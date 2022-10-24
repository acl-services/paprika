// jest.config.js
module.exports = {
  setupFilesAfterEnv: [
    "jest-dom/extend-expect",
    "@testing-library/react/cleanup-after-each",
    "given2/setup",
    "./testingHelpers/config.js",
  ],
};
