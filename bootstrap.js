const { default: WideJS } = require("wide-js");
const path = require("path");

const bootstrap = () => {
  const wideJS = new WideJS();
  wideJS.on("listen", (port) => {
    console.log("Function running on Port No. " + port);
  });
  wideJS.init();
};

bootstrap();
