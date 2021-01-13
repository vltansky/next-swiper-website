const fs = require("fs-extra");
const { promise: exec } = require("exec-sh");
const dir = "./public/types";
fs.removeSync(dir);
fs.ensureDirSync(dir);
exec(
  `npx typedoc --json ./src/types.json ./node_modules/swiper/types --includeDeclarations --excludeExternals`
);
