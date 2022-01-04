/* eslint-disable no-param-reassign */
import { logicalFilterOperators } from "../rules";
import * as types from "../types";
import filterData from "../helpers/filterData";
import getInitialValueByType from "../helpers/getInitialValueByType";

export const actionTypes = {
  addFilter: "addFilter",
  apply: "apply",
  changeFilter: "changeFilter",
  changeOperator: "changeOperator",
  clear: "clear",
  delete: "delete",
};

export default function defaultReducer(draft, action) {
  switch (action.type) {
    case actionTypes.addFilter:
      draft.filters.push(action.payload);
      break;
    case actionTypes.apply: {
      draft.numberApplied = draft.filters.length;
      if (!draft.isResultControlled) {
        draft.filteredData = filterData({
          filters: draft.filters,
          operator: draft.operator,
          columns: action.payload.columns,
          data: draft.data,
        });
      }
      break;
    }
    case actionTypes.changeFilter: {
      const { payload } = action;
      const { changedFilterItem } = payload;

      draft.filters.forEach(filterItem => {
        if (filterItem.id !== changedFilterItem.id) {
          return;
        }

        switch (payload.type) {
          case types.changeTypes.COLUMN: {
            const columnType = payload.columns.find(column => column.id === changedFilterItem.columnId).type;
            filterItem.columnId = changedFilterItem.columnId;
            filterItem.rule = payload.rulesByType[columnType][0];
            filterItem.value = getInitialValueByType(columnType, changedFilterItem.columnId, draft.data);
            filterItem.renderValueField = null;
            break;
          }
          case types.changeTypes.RULE: {
            filterItem.rule = changedFilterItem.rule;
            break;
          }
          case types.changeTypes.FILTER_VALUE: {
            filterItem.value = changedFilterItem.value;
            break;
          }
          default:
            break;
        }
      });
      break;
    }
    case actionTypes.changeOperator: {
      draft.operator =
        draft.operator === logicalFilterOperators.AND ? logicalFilterOperators.OR : logicalFilterOperators.AND;
      break;
    }
    case actionTypes.clear: {
      draft.numberApplied = 0;
      draft.filters = [];
      if (!draft.isResultControlled) {
        draft.filteredData = filterData({
          filters: [],
          operator: draft.operator,
          columns: action.payload.columns,
          data: draft.data,
        });
      }
      break;
    }
    case actionTypes.delete:
      draft.filters = draft.filters.filter(filter => filter.id !== action.payload);
      break;
    default: {
      throw new Error(`Unsupported type: ${action.type}`);
    }
  }
}
