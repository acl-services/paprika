// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "given2/setup", "./testingHelpers/config.js"],
  // Mirrors .swcrc, minus the CommonJS module target that jest needs and the
  // jsc.target, which @swc/jest picks from the running node version. Spelled out
  // inline, with the .swcrc lookup off, because that file excludes .spec./.test.
  // from transpilation — swc refuses ignored files instead of passing them through.
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "@swc/jest",
      {
        swcrc: false,
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "classic",
            },
          },
          experimental: {
            // Relative to the cwd, which is the repo root here and the package
            // directory in scripts/transpile.js — hence the different path in .swcrc.
            cacheRoot: "node_modules/.cache/swc",
            plugins: [["@swc/plugin-styled-components", { displayName: true, ssr: true }]],
          },
        },
        module: {
          type: "commonjs",
        },
      },
    ],
  },
};
