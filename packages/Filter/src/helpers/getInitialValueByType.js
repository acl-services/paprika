import * as types from "../types";

export default function getInitialValueByType(columnType, columnId, data) {
  switch (columnType) {
    case types.columnTypes.BOOLEAN:
      return true;
    case types.columnTypes.SINGLE_SELECT: {
      if (!data) return null;
      const firstOption = data.map(row => row[columnId]).find(option => option);
      return firstOption ? firstOption.id : null;
    }
    case types.columnTypes.MULTI_SELECT: {
      return [];
    }
    default:
      return "";
  }
}
