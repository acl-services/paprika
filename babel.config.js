module.exports = function BabelConfigJS(api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"];

  const plugins = [
    "styled-components",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ];

  return {
    sourceType: "unambiguous",
    presets,
    plugins,
  };
};
