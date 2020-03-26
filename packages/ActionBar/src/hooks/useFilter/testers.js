import moment from "moment";
import Filter from "../../components/Filter";

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
  [Filter.rules.IS]: is,
  [Filter.rules.IS_NOT]: isNot,
  [Filter.rules.CONTAINS]: (value, testValue) => (testValue === "" ? true : `${value}`.includes(testValue)),
  [Filter.rules.DOES_NOT_CONTAIN]: (value, testValue) => (testValue === "" ? true : !value.includes(testValue)),
  [Filter.rules.IS_BLANK]: isBlank,
  [Filter.rules.IS_NOT_BLANK]: isNotBlank,
  [Filter.rules.EQUALS]: (value, testValue) => processNumber(value, testValue, is),
  [Filter.rules.NOT_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, isNot),
  [Filter.rules.GREATER_THAN]: (value, testValue) => processNumber(value, testValue, (a, b) => a > b),
  [Filter.rules.GREATER_THAN_OR_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, (a, b) => a >= b),
  [Filter.rules.LESS_THAN]: (value, testValue) => processNumber(value, testValue, (a, b) => a < b),
  [Filter.rules.LESS_THAN_OR_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, (a, b) => a <= b),
  [Filter.rules.IS_EMPTY]: isBlank,
  [Filter.rules.IS_NOT_EMPTY]: isNotBlank,
  [Filter.rules.IS_BEFORE]: (value, testValue, { momentParsingFormat }) =>
    processDate(momentParsingFormat, value, testValue, (a, b) => a.isBefore(b)),
  [Filter.rules.IS_AFTER]: (value, testValue, { momentParsingFormat }) =>
    processDate(momentParsingFormat, value, testValue, (a, b) => a.isAfter(b)),
};

export default testers;
