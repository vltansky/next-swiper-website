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
  const types = await fs.readJSON(path.join(__dirname, "../src/types.json"));
  types.children
    .filter(({ flags }) => flags.isExported)
    .forEach(async ({ name, children, originalName }) => {
      const _name = name.replace(/^\"(.*).d\"$/, "$1");
      if (_name === "public-api" || _name === "shared") {
        return;
      }
      const filePath = path.join(__dirname, `../src/types_data/${_name}.js`);
      await fs.ensureDir(path.dirname(filePath));
      const data = children
        .filter((v) => !!v.children)
        .map((v) => {
          return {
            name: v.name,
            children: v.children.map((prop) => {
              //   if (prop.kindString !== "Property") {
              //     // prop.kindString can be Constructor, Method, Property
              //     console.log("how?", prop.kindString);
              //   }

              const default_value =
                prop.comment && prop.comment.tags && prop.comment.tags[0];
              return {
                name: prop.name,
                default: default_value
                  ? default_value.text.replace("\n", "")
                  : null,
                type: prop.type,
                comment: prop.comment,
              };
            }),
          };
        });
      const JSON_data = JSON.stringify(data, null, 2);
      await fs.writeFile(filePath, `export default ${JSON_data}`);
    });
  elapsed.end("Generate all types");
  console.log(chalk.green(`Types generation finished`));
})();
