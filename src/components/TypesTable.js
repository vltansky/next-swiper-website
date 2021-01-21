import React from "react";
import rehypePrism from "@mapbox/rehype-prism";
import rehype2react from "rehype-react";
import parse from "remark-parse";
import remark2rehype from "remark-rehype";
import unified from "unified";
import raw from "rehype-raw";

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

const processDescription = (text) => {
  return unified()
    .use(parse)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehypePrism)
    .use(rehype2react, {
      createElement: React.createElement,
    })
    .processSync(text).result;
};

const typeReference = (name) => {
  if (references[name]) return <a href={`${references[name]}`}>{name}</a>;

  return name;
};

export default function TypesTable({ items }) {
  items = items?.filter(
    (item) => !item.comment?.shortText.toLowerCase().includes("internal")
  );
  const type = (item = {}) => {
    const typeObj = item.type || {};
    if (typeObj.type === "union") {
      const types = [];
      typeObj.types.forEach(({ name, value }, index) => {
        if (value) types.push(`'${value}'`);
        else types.push(typeReference(name));
        if (index < typeObj.types.length - 1) types.push(" | ");
      });
      return types;
    }
    return typeReference(typeObj.name || "");
  };
  const description = (item) => {
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
        {items?.map((item) => (
          <tr key={item.name} className="border-t">
            <td className="w-1/6 text-red-700 font-mono font-semibold">
              {item.name}
            </td>
            <td className="w-1/6 text-green-700 font-mono font-semibold">
              {type(item)}
            </td>
            <td className="w-1/6 text-red-700 font-mono font-semibold">
              {item.default_value}
            </td>
            <td className="w-3/6 space-y-2">{description(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
