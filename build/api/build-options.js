const fs = require("fs-extra");
const path = require("path");
const unified = require("unified");
const parse = require("remark-parse");
const remark2rehype = require("remark-rehype");
const rehypePrism = require("@mapbox/rehype-prism");
const html = require("rehype-stringify");

const references = {
  A11yOptions: "#accessibility-parameters",
  AutoplayOptions: "#autoplay-parameters",
  ControllerOptions: "#controller-parameters",
  CoverflowEffectOptions: "#coverflow-effect-parameters",
  CubeEffectOptions: "#cube-effect-parameters",
  FadeEffectOptions: "#cade-effect-parameters",
  FlipEffectOptions: "#clip-effect-parameters",
  HashNavigationOptions: "#hash-navigation-parameters",
  HistoryOptions: "#history-navigation-parameters",
  KeyboardOptions: "#keyboard-control-parameters",
  LazyOptions: "#lazy-loading-parameters",
  MousewheelOptions: "#mousewheel-control-parameters",
  NavigationOptions: "#navigation-parameters",
  PaginationOptions: "#pagination-parameters",
  ScrollbarOptions: "#scrollbar-parameters",
  ThumbsOptions: "#thumbs-parameters",
  VirtualOptions: "#virtual-slides-parameters",
  ZoomOptions: "#zoom-parameters",
};

const buildOptions = async (typesName, typesData) => {
  items = typesData[typesName]?.filter(
    (item) => !item.comment?.shortText.toLowerCase().includes("internal")
  );

  const processDescription = (text) => {
    const result = unified()
      .use(parse)
      .use(remark2rehype)
      .use(rehypePrism)
      .use(html)
      .processSync(text).contents;
    return result
      .replace(/>\{</g, `>{'{'}<`)
      .replace(/>\}</g, `>{'}'}<`)
      .replace(/ class="/g, ' className="')
      .replace(/<code className="([a-z-]*)">([^№]*)<\/code>/g, (...args) => {
        const lang = args[1];
        const inner = args[2]
          .replace(/>([^№^<^>]*)</g, (...args) => {
            return `>${args[1].replace(
              /[ ]{1,}/g,
              (spaces) => `{'${spaces}'}`
            )}<`;
          })
          .replace(/\n/g, "{`\n`}");
        return `<code className="${lang}">${inner}</code>`;
      });
  };

  const typeReference = (name) => {
    if (references[name]) return `<a href="${references[name]}">${name}</a>`;

    return name;
  };
  const type = (item = {}) => {
    const typeObj = item.type || {};
    if (typeObj.type === "union") {
      const types = [];
      typeObj.types.forEach(({ name, value }) => {
        if (value) types.push(`'${value}'`);
        else types.push(typeReference(name));
      });
      return types.join(`{' | '}`);
    }
    return typeReference(typeObj.name || "");
  };

  const description = (item = {}) => {
    const { shortText, text, tags = [] } = item.comment || {};

    const textContent = [shortText, text].filter((el) => !!el).join("\n\n");

    const tagsContent = tags
      .filter((tag) => tag.tag === "note" || tag.tag === "example")
      .map((tag) => {
        if (tag.tag === "note") {
          return `> ${tag.text}`;
        }

        if (tag.tag === "example") return tag.text;
      })
      .join("\n\n");

    return processDescription([textContent, tagsContent].join("\n\n"));
  };

  const defaultValue = (item) => {
    return (item.default_value || "").replace(
      /[{}]/g,
      (bracket) => `{'${bracket}'}`
    );
  };
  const content = `
export const ${typesName} = () => {
  return (
    <table className="table-fixed params-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${items
          ?.map(
            (item) => `
          <tr className="border-t">
            <td className="w-1/6 text-red-700 font-mono font-semibold">
              ${item.name}
            </td>
            <td className="w-1/6 text-green-700 font-mono font-semibold">
              ${type(item)}
            </td>
            <td className="w-1/6 text-red-700 font-mono font-semibold">
              ${defaultValue(item)}
            </td>
            <td className="w-3/6 space-y-2">${description(item)}</td>
          </tr>
        `
          )
          .join("")}
        
      </tbody>
    </table>
  )
}
`;
  await fs.writeFile(
    path.join(__dirname, `../../src/components/api/${typesName}.js`),
    content
  );
};

module.exports = buildOptions;
