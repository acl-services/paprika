module.exports = function BabelConfigJS(api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"];

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
