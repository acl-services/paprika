export default {
  is: (value, testValue) => (testValue === "" ? true : value === testValue),
  is_not: (value, testValue) => (testValue === "" ? true : value !== testValue),
  contains: (value, testValue) => (testValue === "" ? true : value.includes(testValue)),
  does_not_contain: (value, testValue) => (testValue === "" ? true : !value.includes(testValue)),
  is_blank: value => value !== null || value !== undefined || value !== "",
  is_not_blank: value => value !== null && value !== undefined && value !== "",
};
