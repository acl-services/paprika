import isString from "lodash.isstring";
import moment from "moment";
import { sortDirections } from "../constants";

function compareString(a, b) {
  return a.localeCompare(b);
}

function compareNumber(a, b) {
  return a - b;
}

function compareDate(a, b, momentParsingFormat) {
  return moment(a, momentParsingFormat).unix() - moment(b, momentParsingFormat).unix();
}

const compareFunctions = {
  DATE: compareDate,
  NUMBER: compareNumber,
  TEXT: compareString,
};

export default function sort({ data, columnId, direction, columnType, momentParsingFormat }) {
  const type = columnType || (isString(data[0][columnId]) ? "TEXT" : "NUMBER");
  const isAscend = direction === sortDirections.ASCEND;
  const indicator = isAscend ? 1 : -1;

  function getSortedData(fn) {
    return [...data].sort((rowA, rowB) => fn(rowA[columnId], rowB[columnId], momentParsingFormat) * indicator);
  }

  if (compareFunctions[type]) return getSortedData(compareFunctions[type]);
  return data;
}
