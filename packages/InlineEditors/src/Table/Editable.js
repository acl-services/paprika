import React from "react";
import { status as statusType } from "../types";
import { useTable } from "./store";

export default function Editable({ children }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const { optimisticValues, status, setStatusByRowIndexColumnIndex } = useTable();

  const key = `${children.props.rowIndex}-${children.props.columnIndex}`;
  const cellOptimisticValue = optimisticValues.get(key);
  const cellStatus = status.get(key);

  const handleClose = React.useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleEditing = React.useCallback(() => {
    if (cellStatus === statusType.IDLE || typeof cellStatus === "undefined") {
      setIsEditing(true);
    }
  }, [cellStatus]);

  function handleAnimationEndSuccess({ rowIndex, columnIndex }) {
    setStatusByRowIndexColumnIndex({ status: statusType.IDLE, rowIndex, columnIndex });
  }

  return React.cloneElement(children, {
    ...children.props,
    isEditing,
    onClose: handleClose,
    onStart: handleEditing,
    status: cellStatus || statusType.IDLE,
    optimisticValue: cellOptimisticValue || null,
    onAnimationEndSuccess: handleAnimationEndSuccess,
  });
}
