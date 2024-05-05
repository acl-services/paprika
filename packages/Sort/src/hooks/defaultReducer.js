/* eslint-disable no-param-reassign */
import * as types from "../types";
import sortData from "../helpers/sortData";

export const actionTypes = {
  addSort: "addSort",
  apply: "apply",
  changeSort: "changeSort",
  reset: "reset",
  delete: "delete",
};

export default function defaultReducer(draft, action) {
  switch (action.type) {
    case actionTypes.addSort:
      draft.fields.push(action.payload);
      break;
    case actionTypes.apply: {
      draft.numberApplied = draft.fields.length;
      if (!draft.isResultControlled) {
        draft.filteredData = sortData({
          fields: draft.fields,
          operator: draft.operator,
          columns: action.payload.columns,
          data: draft.data,
        });
      }
      break;
    }
    case actionTypes.changeSort: {
      const { payload } = action;
      const { changedSortItem } = payload;

      draft.fields.forEach(field => {
        if (field.id !== changedSortItem.id) return;

        switch (payload.type) {
          case types.changeTypes.COLUMN: {
            field.columnId = changedSortItem.columnId;
            field.direction = "ASCEND";
            break;
          }
          case types.changeTypes.DIRECTION: {
            field.direction = changedSortItem.direction;
            break;
          }
          default:
            break;
        }
      });
      break;
    }
    case actionTypes.reset: {
      draft.numberApplied = 0;
      draft.fields = [];
      if (!draft.isResultControlled) {
        draft.filteredData = sortData({
          fields: [],
          operator: draft.operator,
          columns: action.payload.columns,
          data: draft.data,
        });
      }
      break;
    }
    case actionTypes.delete:
      draft.fields = draft.fields.filter(filter => filter.id !== action.payload);
      break;
    default: {
      throw new Error(`Unsupported type: ${action.type}`);
    }
  }
}
