module.exports = function BabelConfigJS(api) {
  api.cache(true);

  // Packages are transpiled by swc (see .swcrc, target es2018); babel is only left
  // for Storybook and jest, so target browsers with native ES modules instead of
  // downlevelling everything to ES5.
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
