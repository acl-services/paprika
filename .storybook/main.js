const path = require("path");
const { storyTree } = require("./storyTree");

const stories = ["./welcome.story.js"];
storyTree.forEach(catList => {
  catList.components.forEach(component => {
    const path = `../packages/${component}/stories`;
    stories.push(
      `${path}/${component}.stories.mdx`,
      `${path}/${component}.stories.js`,
      `${path}/${component}.examples.stories.js`,
      `${path}/${component}.backyard.stories.js`,
      `${path}/${component}.tests.stories.js`
    );
  });
});
stories.push("../packages/**/*.stor(y|ies).js");
stories.push("./components/**/*.stor(y|ies).js");

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
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../"),
      },
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      storybook: path.resolve("./.storybook/"),
    };
    config.output = {
      ...config.output,
      globalObject: "self",
    };

    return config;
  },
};
