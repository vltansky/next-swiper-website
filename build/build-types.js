const { promise: exec } = require("exec-sh");

exec(
  "npx typedoc --out ./public/types ./node_modules/swiper --includeDeclarations --excludeExternals"
);
