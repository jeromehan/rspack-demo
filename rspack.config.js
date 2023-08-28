const path = require("path");
const minifyPlugin = require("@rspack/plugin-minify");
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    port: 8899,
    historyApiFallback: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  builtins: {
    html: [{ template: "./index.html" }],
  },
  stats: {
    reasons: true,
    all: true,
  },
};
