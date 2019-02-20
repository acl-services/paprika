// https://github.com/webpack/webpack/issues/4039#issuecomment-445941469
// @babel/plugin-transform-modules-commonjs is for memoize-one

module.exports = function BabelConfigJS(api) {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
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
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        allowTopLevelThis: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
