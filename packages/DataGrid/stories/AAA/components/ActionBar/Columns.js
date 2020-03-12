import React from "react";
import { ColumnsArrangement } from "@paprika/action-bar";

export default function MyColumns({ columns, setColumns }) {
  function handleChangeOrder({ source, destination }) {
    const newOrder = [...columns];
    const movedChild = newOrder.splice(source, 1);
    newOrder.splice(destination, 0, ...movedChild);
    setColumns(newOrder);
  }

  function handleHideAll() {
    setColumns(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        isHidden: true,
      }))
    );
  }

  function handleShowAll() {
    setColumns(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        isHidden: false,
      }))
    );
  }

  function handleChangeVisibility(columnId) {
    setColumns(prevColumns =>
      prevColumns.map(column =>
        column.id === columnId
          ? {
              ...column,
              isHidden: !column.isHidden,
            }
          : column
      )
    );
  }

  return (
    <ColumnsArrangement
      columns={columns}
      onChangeOrder={handleChangeOrder}
      onHideAll={handleHideAll}
      onShowAll={handleShowAll}
      onChangeVisibility={handleChangeVisibility}
    />
  );
}
