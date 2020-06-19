import moment from "moment";
import getAlphaSortFunction from "./getAlphaSortFunction";

export function compareString(a, b, { locale }) {
  const alphaSortAsc = getAlphaSortFunction(locale);
  return alphaSortAsc(a, b);
}

export function compareNumber(a, b) {
  return a - b;
}

export function compareDate(a, b, { momentParsingFormat }) {
  return moment(a, momentParsingFormat).unix() - moment(b, momentParsingFormat).unix();
}

export function compareBoolean(a, b) {
  if (a === b) {
    return 0;
  }

  return a ? -1 : 1;
}

const compareFunctions = {
  DATE: compareDate,
  NUMBER: compareNumber,
  TEXT: compareString,
  BOOLEAN: compareBoolean,
};

export default function sort({ data, columnId, direction, columnType, momentParsingFormat, locale }) {
  const isAscend = direction === "ASCEND";
  const indicator = isAscend ? 1 : -1;

  function getSortedData(fn) {
    return [...data].sort((rowA, rowB) => {
      return fn(rowA[columnId], rowB[columnId], { momentParsingFormat, locale }) * indicator;
    });
  }

  if (compareFunctions[columnType]) {
    return getSortedData(compareFunctions[columnType]);
  }

  return data;
}
