module.exports = function BabelConfigJS(api) {
  api.cache(true);

  // Storybook is the only babel consumer left — packages are transpiled by swc
  // (.swcrc) and so are the tests (jest.config.js) — so target browsers with native
  // ES modules instead of downlevelling everything to ES5.
  const presets = [
    ["@babel/preset-env", { targets: { esmodules: true }, bugfixes: true }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    "styled-components",
  ];

  return {
    sourceType: "unambiguous",
    presets,
    plugins,
    overrides: [
      {
        ignore: ["**/*.d.ts"],
      },
    ],
  };
};
