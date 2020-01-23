import moment from "moment";
import rules from "../../../src/components/Filter/rules";

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

export default {
  [rules.IS]: is,
  [rules.IS_NOT]: isNot,
  [rules.CONTAINS]: (value, testValue) => (testValue === "" ? true : value.includes(testValue)),
  [rules.DOES_NOT_CONTAIN]: (value, testValue) => (testValue === "" ? true : !value.includes(testValue)),
  [rules.IS_BLANK]: isBlank,
  [rules.IS_NOT_BLANK]: isNotBlank,
  [rules.EQUALS]: (value, testValue) => processNumber(value, testValue, is),
  [rules.NOT_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, isNot),
  [rules.GREATER_THAN]: (value, testValue) => processNumber(value, testValue, (a, b) => a > b),
  [rules.GREATER_THAN_OR_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, (a, b) => a >= b),
  [rules.LESS_THAN]: (value, testValue) => processNumber(value, testValue, (a, b) => a < b),
  [rules.LESS_THAN_OR_EQUAL_TO]: (value, testValue) => processNumber(value, testValue, (a, b) => a <= b),
  [rules.IS_EMPTY]: isBlank,
  [rules.IS_NOT_EMPTY]: isNotBlank,
  [rules.IS_BEFORE]: (value, testValue, { momentParsingFormat }) =>
    processDate(momentParsingFormat, value, testValue, (a, b) => a.isBefore(b)),
  [rules.IS_AFTER]: (value, testValue, { momentParsingFormat }) =>
    processDate(momentParsingFormat, value, testValue, (a, b) => a.isAfter(b)),
};
