import rules from "./rules";

export default {
  [rules.IS]: (value, testValue) => (testValue === "" ? true : value === testValue),
  [rules.IS_NOT]: (value, testValue) => (testValue === "" ? true : value !== testValue),
  [rules.CONTAINS]: (value, testValue) => (testValue === "" ? true : value.includes(testValue)),
  [rules.DOES_NOT_CONTAIN]: (value, testValue) => (testValue === "" ? true : !value.includes(testValue)),
  [rules.IS_BLANK]: value => value !== null || value !== undefined || value !== "",
  [rules.IS_NOT_BLANK]: value => value !== null && value !== undefined && value !== "",
};
