const path = require("path");
const { storyTree } = require("./storyTree");

const stories = ["./welcome.story.js"];
storyTree.forEach(catList => {
  catList.components.forEach(component => {
    const path = `../packages/${component}/stories/${component}`;
    stories.push(
      `${path}.stories.mdx`,
      `${path}.stories.js`,
      `${path}.examples.stories.js`,
      `${path}.backyard.stories.js`,
      `${path}.tests.stories.js`
    );
  });
});
stories.push("./components/CodeViewer/CodeViewer.story.js");
// stories.push("../packages/**/*.stories.js");

module.exports = {
  stories,
  addons: [
    "@storybook/addon-docs/preset",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-cssresources",
  ],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        resolve: {
          alias: {
            storybook: path.resolve("./.storybook/"),
          },
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      }
    );
    config.output = {
      ...config.output,
      globalObject: "self",
    };

    return config;
  },
};
