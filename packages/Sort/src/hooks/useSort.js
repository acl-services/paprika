import React from "react";
import { v4 as uuidv4 } from "uuid";
import produce from "immer";
import Sort from "../Sort";
import defaultReducer, { actionTypes } from "./defaultReducer";

function getDefaultSort(columns, direction) {
  const firstColumnId = columns[0].id;

  return {
    columnId: firstColumnId,
    direction,
    id: uuidv4(),
  };
}

function initState(initialState) {
  return {
    numberApplied: initialState.numberApplied || 0,
    data: initialState.data,
    sortedData: initialState.isResultControlled ? null : initialState.sortedData || initialState.data,
    fields: initialState.fields || [],
    isResultControlled: initialState.isResultControlled,
  };
}

export default function useSort({ columns, data = null, initialState = {}, reducer = produce(defaultReducer) }) {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState, data }, initState);

  function onAddSort() {
    dispatch({ type: actionTypes.addSort, payload: getDefaultSort(columns, "ASCEND") });
  }

  function onClear() {
    dispatch({ type: actionTypes.clear, payload: { columns } });
  }

  function onApply() {
    dispatch({ type: actionTypes.apply, payload: { columns } });
  }

  function onDeleteSort(deletedSortId) {
    dispatch({ type: actionTypes.delete, payload: deletedSortId });
  }

  function onChangeSort(type, { id, direction, columnId }) {
    dispatch({
      type: actionTypes.changeSort,
      payload: {
        type,
        changedSortItem: { id, direction, columnId },
        columns,
      },
    });
  }

  function getSortProps() {
    return {
      numberApplied: state.numberApplied,
      onAddSort,
      onClear,
      onApply,
    };
  }

  function getFieldProps() {
    return {
      onDeleteSort,
      onChangeSort,
    };
  }

  return {
    fields: state.fields,
    sortedData: state.sortedData,
    getSortProps,
    getFieldProps,
  };
}
