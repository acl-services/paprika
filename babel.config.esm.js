module.exports = function BabelConfigJS(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];

  const plugins = [
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
