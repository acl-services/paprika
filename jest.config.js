// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect", "given2/setup", "./testingHelpers/config.js"],
};
