import moment from "moment";

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
  BOOLEAN: compareString,
};

export default function sort({ data, columnId, direction, columnType, momentParsingFormat }) {
  const isAscend = direction === "ASCEND";
  const indicator = isAscend ? 1 : -1;

  function getSortedData(fn) {
    return [...data].sort((rowA, rowB) => fn(rowA[columnId], rowB[columnId], momentParsingFormat) * indicator);
  }

  if (compareFunctions[columnType]) return getSortedData(compareFunctions[columnType]);

  return data;
}
