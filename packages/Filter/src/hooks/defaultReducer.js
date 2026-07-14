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
  updateData: "updateData",
};

function changeFilterItem(filterItem, payload, data) {
  const { changedFilterItem } = payload;
  if (filterItem.id !== changedFilterItem.id) return filterItem;

  switch (payload.type) {
    case types.changeTypes.COLUMN: {
      const columnType = payload.columns.find(column => column.id === changedFilterItem.columnId).type;
      return {
        ...filterItem,
        columnId: changedFilterItem.columnId,
        rule: payload.rulesByType[columnType][0],
        value: getInitialValueByType(columnType, changedFilterItem.columnId, data),
        renderValueField: null,
      };
    }
    case types.changeTypes.RULE:
      return { ...filterItem, rule: changedFilterItem.rule };
    case types.changeTypes.FILTER_VALUE:
      return { ...filterItem, value: changedFilterItem.value };
    default:
      return filterItem;
  }
}

export default function defaultReducer(state, action) {
  switch (action.type) {
    case actionTypes.addFilter:
      return { ...state, filters: [...state.filters, action.payload] };
    case actionTypes.updateData: {
      const { columns, newData } = action.payload;
      return {
        ...state,
        data: newData,
        filteredData: filterData({ filters: state.filters, operator: state.operator, columns, data: newData }),
      };
    }
    case actionTypes.apply: {
      const nextState = { ...state, numberApplied: state.filters.length };
      if (!state.isResultControlled) {
        nextState.filteredData = filterData({
          filters: state.filters,
          operator: state.operator,
          columns: action.payload.columns,
          data: state.data,
        });
      }
      return nextState;
    }
    case actionTypes.changeFilter: {
      const { payload } = action;
      return {
        ...state,
        filters: state.filters.map(filterItem => changeFilterItem(filterItem, payload, state.data)),
      };
    }
    case actionTypes.changeOperator:
      return { ...state, operator: action.payload };
    case actionTypes.clear: {
      const nextState = { ...state, numberApplied: 0, filters: [] };
      if (!state.isResultControlled) {
        nextState.filteredData = filterData({
          filters: [],
          operator: state.operator,
          columns: action.payload.columns,
          data: state.data,
        });
      }
      return nextState;
    }
    case actionTypes.delete:
      return { ...state, filters: state.filters.filter(filter => filter.id !== action.payload) };
    default: {
      throw new Error(`Unsupported type: ${action.type}`);
    }
  }
}
