const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    disableHostCheck: true
  }
};
