import * as types from "../types";

export default function getInitialValueByType(columnType, columnId, data) {
  switch (columnType) {
    case types.columnTypes.BOOLEAN:
      return true;
    case types.columnTypes.SINGLE_SELECT: {
      return data.map(data => data[columnId]).find(option => option);
    }
    default:
      return "";
  }
}
