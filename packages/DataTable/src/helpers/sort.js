import isString from "lodash.isstring";
import { sortDirections } from "../constants";
import moment from "moment";

function compareString(a, b) {
  return a.localeCompare(b);
}

function compareNumber(a, b) {
  return a - b;
}

function compareDate(a, b) {
  return moment(a).unix() - moment(b).unix();
}

const compareFunctions = {
  DATE: compareDate,
  NUMBER: compareNumber,
  TEXT: compareString,
};

export default function sort({ data, columnId, direction, columnType }) {
  // switch (direction) {
  //   case sortDirections.ASCEND:
  //     return [...data].sort((rowA, rowB) =>
  //       isString(rowA[columnId])
  //         ? compareString(rowA[columnId], rowB[columnId])
  //         : compareNumber(rowA[columnId], rowB[columnId])
  //     );
  //   case sortDirections.DESCEND:
  //     return [...data].sort((rowA, rowB) =>
  //       isString(rowA[columnId])
  //         ? -compareString(rowA[columnId], rowB[columnId])
  //         : -compareNumber(rowA[columnId], rowB[columnId])
  //     );
  //   default:
  //     return data;
  // }

  // eslint-disable-next-line no-nested-ternary
  const type = columnType ? columnType : isString(data[0][columnId]) ? "STRING" : "NUMBER";
  const isAscend = direction === sortDirections.ASCEND;
  const indicator = isAscend ? 1 : -1;

  function getSortedData(fn) {
    return [...data].sort((rowA, rowB) => fn(rowA[columnId], rowB[columnId]) * indicator);
  }

  if (compareFunctions[type]) return getSortedData(compareFunctions[type]);
  return data;
}
