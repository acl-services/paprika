import React from "react";
import { useSeducerWithContext, Provider } from "@paprika/seducer";
import { status as statusType } from "../types";

const initialState = {
  status: new Map(),
  optimisticValues: new Map(),
};

export function useTable({ rowIndex, columnIndex } = {}) {
  const [state, dispatch, actionsTypes] = useSeducerWithContext();

  // when the context is the cell
  function setStatus(nextStatus) {
    dispatch(actionsTypes.setStatus, { status: nextStatus, rowIndex, columnIndex });
  }

  function setOptimisticValue(optimisticValue) {
    dispatch(actionsTypes.setOptimisticValue, { optimisticValue, rowIndex, columnIndex });
  }

  // when the context is the table
  function setStatusByRowIndexColumnIndex({ status, rowIndex, columnIndex }) {
    dispatch(actionsTypes.setStatus, { status, rowIndex, columnIndex });
  }

  return {
    setStatus,
    setOptimisticValue,
    setStatusByRowIndexColumnIndex,
    statusType,
    optimisticValues: state.optimisticValues,
    getStatus: () => {
      return state.status.get(`${rowIndex}-${columnIndex}`);
    },
    status: state.status,
  };
}

const actions = {
  setStatus(state, { rowIndex, columnIndex, status }) {
    const nextStatus = new Map(state.status);
    nextStatus.set(`${rowIndex}-${columnIndex}`, status);
    return { ...state, status: nextStatus };
  },
  setOptimisticValue(state, { rowIndex, columnIndex, optimisticValue }) {
    const nextOptimisticValues = new Map(state.optimisticValues);
    nextOptimisticValues.set(`${rowIndex}-${columnIndex}`, optimisticValue);
    return { ...state, optimisticValues: nextOptimisticValues };
  },
};

export function TableProvider(props) {
  return (
    /* eslint-disable react/prop-types */
    <Provider initialState={initialState} actions={actions}>
      {props.children}
    </Provider>
    /* eslint-enable react/prop-types */
  );
}
