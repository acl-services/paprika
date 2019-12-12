import { columnTypes } from "../constants";

export default function getColumnType(data, columns, columnId) {
  return columns[columnId].type || (typeof data[0][columnId] === "number" ? columnTypes.NUMBER : columnTypes.TEXT);
}
