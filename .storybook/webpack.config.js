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
      storybook: path.resolve("./.storybook/"),
    },
  },
};
