import isString from "lodash.isstring";
import { sortDirections } from "../constants";

function compareString(a, b) {
  return a.localeCompare(b);
}

function compareNumber(a, b) {
  return a - b;
}

export default function sort({ data, keygen, columnId, direction, hasBackendSort = false }) {
  if (hasBackendSort) return null;

  switch (direction) {
    case sortDirections.ASCEND:
      return [...data]
        .sort((rowA, rowB) =>
          isString(rowA[columnId])
            ? compareString(rowA[columnId], rowB[columnId])
            : compareNumber(rowA[columnId], rowB[columnId])
        )
        .map(item => item[keygen]);
    case sortDirections.DESCEND:
      return [...data]
        .sort((rowA, rowB) =>
          isString(rowA[columnId])
            ? -compareString(rowA[columnId], rowB[columnId])
            : -compareNumber(rowA[columnId], rowB[columnId])
        )
        .map(item => item[keygen]);
    default:
      return null;
  }
}
