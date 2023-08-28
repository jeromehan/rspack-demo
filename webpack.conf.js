const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "none",
  devtool: "source-map",
  entry: {
    main: "./src/index.js",
  },
  devServer: {
    port: 8899,
    historyApiFallback: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist1"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  stats: {
    reasons: true,
    all: true,
  },
};
