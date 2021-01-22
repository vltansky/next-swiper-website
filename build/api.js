const fs = require("fs-extra");
const path = require("path");
const elapsed = require("elapsed-time-logger");
const chalk = require("chalk");
const { promise: exec } = require("exec-sh");

const buildOptions = require("./api/build-options");

(async () => {
  elapsed.start("Typedoc");
  await exec(
    `npx typedoc --json ./src/types.json ./node_modules/swiper/types --includeDeclarations --excludeExternals`
  );
  elapsed.end("Typedoc");
  elapsed.start("Generate all types");
  const typesPath = path.join(__dirname, "../src/types.json");
  const { children } = await fs.readJSON(typesPath);
  const types = {};
  children.forEach(async ({ name, children, flags, originalName }) => {
    const _name = name.replace(/^\"(.*).d\"$/, "$1");
    if (_name === "public-api" || _name === "shared" || !flags.isExported) {
      return;
    }
    children.forEach((v) => {
      if (!v.children) return;
      types[v.name] = v.children.map((prop) => {
        //   if (prop.kindString !== "Property") {
        //     // prop.kindString can be Constructor, Method, Property
        //     console.log("how?", prop.kindString);
        //   }

        let default_value =
          prop.comment &&
          prop.comment.tags &&
          prop.comment.tags.find((tag) => tag.tag === "default");

        const defaultValueIsNoteOrExample = prop?.comment?.tags?.find(
          (tag) =>
            (tag.tag === "note" || tag.tag === "example") &&
            tag.text === default_value
        );
        if (defaultValueIsNoteOrExample) default_value = "";

        return {
          name: prop.name,
          default_value: default_value
            ? default_value.text.replace("\n", "")
            : null,
          type: prop.type,
          comment: prop.comment,
        };
      });
    });
  });

  buildOptions("SwiperOptions", types);
  buildOptions("A11yOptions", types);
  buildOptions("AutoplayOptions", types);
  buildOptions("ControllerOptions", types);
  buildOptions("CoverflowEffectOptions", types);
  buildOptions("CubeEffectOptions", types);
  buildOptions("FadeEffectOptions", types);
  buildOptions("FlipEffectOptions", types);
  buildOptions("HashNavigationOptions", types);
  buildOptions("HistoryOptions", types);
  buildOptions("KeyboardOptions", types);
  buildOptions("LazyOptions", types);
  buildOptions("MousewheelOptions", types);
  buildOptions("NavigationOptions", types);
  buildOptions("PaginationOptions", types);
  buildOptions("ScrollbarOptions", types);
  buildOptions("ThumbsOptions", types);
  buildOptions("VirtualOptions", types);
  buildOptions("ZoomOptions", types);

  await fs.writeFile(typesPath, `${JSON.stringify(types, null, 4)}`);
  elapsed.end("Generate all types");
  console.log(chalk.green(`Types generation finished`));
})();
