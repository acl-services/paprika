// jest.config.js
module.exports = {
  setupFiles: ["./testingHelpers/config.js"],
  setupFilesAfterEnv: ["jest-dom/extend-expect", "@testing-library/react/cleanup-after-each"],
};
