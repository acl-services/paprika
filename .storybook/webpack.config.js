/* eslint-disable jsx-a11y/href-no-hash */
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff|woff2)$/i,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      helpers: path.resolve("./packages/helpers/"),
      packages: path.resolve("./packages/"),
      storybook: path.resolve("./.storybook/"),
      stylers: path.resolve("./packages/Stylers/"),
      tokens: path.resolve("./packages/Tokens/"),
    },
  },
};
