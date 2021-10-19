import React from "react";
import { useSeducerWithContext, Provider } from "@paprika/seducer";
import { status as statusType } from "../types";

const initialState = {
  status: new Map(),
  optimisticValues: new Map(),
  messagesError: new Map(),
};

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
  setMessagesError(state, { rowIndex, columnIndex, messageError }) {
    const nextMessagesError = new Map(state.messagesError);
    nextMessagesError.set(`${rowIndex}-${columnIndex}`, messageError);
    return { ...state, messagesError: nextMessagesError };
  },
};

export function useTable({ rowIndex, columnIndex } = {}) {
  const [state, dispatch, actionsTypes] = useSeducerWithContext();

  // when the context is the cell
  function setStatus(nextStatus, { ...options } = {}) {
    const { messageError = null } = options;

    dispatch(actionsTypes.setStatus, { status: nextStatus, rowIndex, columnIndex });

    if (messageError && nextStatus === statusType.ERROR) {
      dispatch(actionsTypes.setMessagesError, { rowIndex, columnIndex, messageError });
    }
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
    messagesError: state.messagesError,
    optimisticValues: state.optimisticValues,
    getStatus: () => state.status.get(`${rowIndex}-${columnIndex}`),
    status: state.status,
  };
}

export function TableProvider(props) {
  return (
    /* eslint-disable react/prop-types */
    <Provider initialState={initialState} actions={actions}>
      {props.children}
    </Provider>
    /* eslint-enable react/prop-types */
  );
}
