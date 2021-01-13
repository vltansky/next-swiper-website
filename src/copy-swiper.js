const { promise: exec } = require("exec-sh");

exec("cp -r node_modules/swiper/* public/package");
