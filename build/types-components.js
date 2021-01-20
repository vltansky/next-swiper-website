const fs = require("fs-extra");
const path = require("path");
const elapsed = require("elapsed-time-logger");
const chalk = require("chalk");
const { promise: exec } = require("exec-sh");

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

        const default_value =
          prop.comment && prop.comment.tags && prop.comment.tags[0];
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
  await fs.writeFile(typesPath, `${JSON.stringify(types, null, 4)}`);
  elapsed.end("Generate all types");
  console.log(chalk.green(`Types generation finished`));
})();
