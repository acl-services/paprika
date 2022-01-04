import React from "react";
import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import Filter from "../Filter";
import defaultReducer, { actionTypes } from "./defaultReducer";
import { logicalFilterOperators } from "../rules";
import getInitialValueByType from "../helpers/getInitialValueByType";
import isIllogicalColumn from "../helpers/isIllogicalColumn";
import getIllogicalFilters from "../helpers/getIllogicalFilters";
import isIllogicalRule from "../helpers/isIllogicalRule";

function getDefaultFilter(columns, rulesByType, data, existingFilters, operator) {
  const { id: firstColumnId, type: firstColumnType } = columns.filter(column =>
    isIllogicalColumn(operator, column, existingFilters)
  )[0];

  const rule = rulesByType[firstColumnType].filter(rule =>
    isIllogicalRule(operator, rule, existingFilters, firstColumnId)
  )[0];

  return {
    columnId: firstColumnId,
    rule,
    value: getInitialValueByType(firstColumnType, firstColumnId, data),
    id: uuidv4(),
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
  rulesByType = Filter.defaultRulesByType,
}) {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState, data }, initState);

  function onAddFilter() {
    dispatch({
      type: actionTypes.addFilter,
      payload: getDefaultFilter(columns, rulesByType, data, state.filters, state.operator),
    });
  }

  function onChangeOperator() {
    const oldOperator = state.operator;

    dispatch({
      type: actionTypes.changeOperator,
    });

    if (oldOperator === logicalFilterOperators.OR) {
      const illogicalFilters = getIllogicalFilters(state.filters);

      illogicalFilters.forEach(filter => {
        console.warn(`Removing illogical filter: ${filter.columnId} ${filter.rule} ${filter.value}`);
        dispatch({ type: actionTypes.delete, payload: filter.id });
      });
    }
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

  function getFilterProps() {
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
    getFilterProps,
    getFilterItemProps,
  };
}
