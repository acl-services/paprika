import React from "react";
import uuid from "uuid/v4";
import produce from "immer";
import Filters from "../Filters";
import defaultReducer, { actionTypes } from "./defaultReducer";
import { logicalFilterOperators } from "../rules";
import getInitialValueByType from "../helpers/getInitialValueByType";

function getDefaultFilter(columns, rulesByType, data) {
  const firstColumnId = columns[0].id;
  const firstColumnType = columns.find(column => column.id === firstColumnId).type;

  return {
    columnId: firstColumnId,
    rule: rulesByType[firstColumnType][0],
    value: getInitialValueByType(firstColumnType, firstColumnId, data),
    id: uuid(),
  };
}

function initState(initialState) {
  return {
    numberApplied: initialState.numberApplied || 0,
    data: initialState.data,
    filteredData: initialState.isResultControlled ? null : initialState.filteredData || initialState.data,
    filters: initialState.filters || [],
    isResultControlled: initialState.isResultControlled,
    operator: initialState.operator || logicalFilterOperators.AND,
  };
}

export default function useFilter({
  columns,
  data = null,
  initialState = {},
  reducer = produce(defaultReducer),
  rulesByType = Filters.defaultRulesByType,
}) {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState, data }, initState);

  function onAddFilter() {
    dispatch({ type: actionTypes.addFilter, payload: getDefaultFilter(columns, rulesByType, data) });
  }

  function onChangeOperator() {
    dispatch({
      type: actionTypes.changeOperator,
    });
  }

  function onClear() {
    dispatch({ type: actionTypes.clear, payload: { columns } });
  }

  function onApply() {
    dispatch({ type: actionTypes.apply, payload: { columns } });
  }

  function onDeleteFilter(deletedFilterId) {
    dispatch({ type: actionTypes.delete, payload: deletedFilterId });
  }

  function onChangeFilter(type, { id, rule, value, columnId }) {
    dispatch({
      type: actionTypes.changeFilter,
      payload: {
        type,
        changedFilterItem: { id, rule, value, columnId },
        columns,
        rulesByType,
      },
    });
  }

  function getFiltersProps() {
    return {
      numberApplied: state.numberApplied,
      onAddFilter,
      onChangeOperator,
      onClear,
      operator: state.operator,
      onApply,
    };
  }

  function getFilterItemProps() {
    return {
      onDeleteFilter,
      onChangeFilter,
    };
  }

  return {
    filters: state.filters,
    filteredData: state.filteredData,
    getFiltersProps,
    getFilterItemProps,
  };
}
