/* eslint-disable jsx-a11y/href-no-hash */
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ["babel-loader?cacheDirectory"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  },
  resolve: {
    alias: {
      tokens: path.resolve("./packages/Tokens/"),
      storybook: path.resolve("./.storybook/")
    }
  }
};
