import moment from "moment";
import Filters from "../../Filters";

const is = (value, testValue) => (testValue === "" ? true : value === testValue);
const isNot = (value, testValue) => (testValue === "" ? true : value !== testValue);
const isBlank = value => value === null || value === undefined || value === "";
const isNotBlank = value => value !== null && value !== undefined && value !== "";
const processNumber = (value, testValue, testFunction) => {
  if (testValue === "") return true;
  const testNumber = parseFloat(testValue, 10);
  return Number.isNaN(testNumber) ? false : testFunction(value, testNumber);
};
const processDate = (momentParsingFormat, value, testValue, testFunction) => {
  if (testValue === "") return true;
  const testDate = moment(testValue, momentParsingFormat);
  if (testDate.isValid()) return testFunction(moment(value, momentParsingFormat), testDate);
  return false;
};

const testers = {
  [Filters.rules.IS]: is,
  [Filters.rules.IS_NOT]: isNot,
  [Filters.rules.CONTAINS]: (value, testValue) =>
    testValue === "" ? true : `${value}`.match(new RegExp(testValue, "i")),
  [Filters.rules.DOES_NOT_CONTAIN]: (value, testValue) =>
    testValue === "" ? true : !value.match(new RegExp(testValue, "i")),
  [Filters.rules.IS_BLANK]: isBlank,
  [Filters.rules.IS_NOT_BLANK]: isNotBlank,
  [Filters.rules.EQUALS]: (value, testValue) => processNumber(value, testValue, is),
  [Filters.rules.NOT_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, isNot),
  [Filters.rules.GREATER_THAN]: (value, testValue) => processNumber(value, testValue, (a, b) => a > b),
  [Filters.rules.GREATER_THAN_OR_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, (a, b) => a >= b),
  [Filters.rules.LESS_THAN]: (value, testValue) => processNumber(value, testValue, (a, b) => a < b),
  [Filters.rules.LESS_THAN_OR_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, (a, b) => a <= b),
  [Filters.rules.IS_EMPTY]: isBlank,
  [Filters.rules.IS_NOT_EMPTY]: isNotBlank,
  [Filters.rules.IS_BEFORE]: (value, testValue, { momentParsingFormat }) =>
    processDate(momentParsingFormat, value, testValue, (a, b) => a.isBefore(b)),
  [Filters.rules.IS_AFTER]: (value, testValue, { momentParsingFormat }) =>
    processDate(momentParsingFormat, value, testValue, (a, b) => a.isAfter(b)),
};

export default testers;
