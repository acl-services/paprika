import isString from "lodash.isstring";
import { sortDirections } from "../constants";

function compareString(a, b) {
  return a.localeCompare(b);
}

function compareNumber(a, b) {
  return a - b;
}

export default function sort({ data, columnId, direction }) {
  switch (direction) {
    case sortDirections.ASCEND:
      return [...data].sort((rowA, rowB) =>
        isString(rowA[columnId])
          ? compareString(rowA[columnId], rowB[columnId])
          : compareNumber(rowA[columnId], rowB[columnId])
      );
    case sortDirections.DESCEND:
      return [...data].sort((rowA, rowB) =>
        isString(rowA[columnId])
          ? -compareString(rowA[columnId], rowB[columnId])
          : -compareNumber(rowA[columnId], rowB[columnId])
      );
    default:
      return data;
  }
}
