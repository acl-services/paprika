const path = require("path");
const { storyTree } = require("./storyTree");

const stories = ["./welcome.story.js"];
storyTree.forEach(catList => {
  catList.components.forEach(component => {
    const path = `../packages/${component}/stories`;
    stories.push(
      `${path}/${component}.stories.mdx`,
      `${path}/${component}.stories.(js|ts|tsx)`,
      `${path}/${component}.examples.stories.(js|ts|tsx)`,
      `${path}/${component}.backyard.stories.(js|ts|tsx)`,
      `${path}/${component}.tests.stories.(js|ts|tsx)`
    );
  });
});
stories.push("../packages/**/*.stor(y|ies).(js|ts|tsx)");
stories.push("./components/**/*.stor(y|ies).(js|ts|tsx)");

module.exports = {
  stories,
  core: {
    builder: "webpack5",
  },
  addons: [
    "@storybook/addon-docs/preset",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-cssresources",
  ],
  managerWebpack: async config => {
    config.module.rules.unshift({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: { fullySpecified: false },
    });
    return config;
  },
  webpackFinal: async config => {
    config.module.rules.unshift({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: { fullySpecified: false },
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: { quietDeps: true, silenceDeprecations: ["import", "global-builtin", "legacy-js-api"] },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      storybook: path.resolve("./.storybook/"),
    };

    if (process.env.DISABLE_HMR === "true") {
      config.entry = Object.fromEntries(
        Object.entries(config.entry).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.filter(v => !v.includes("webpack-hot-middleware")) : value,
        ])
      );
    }

    return config;
  },
};
