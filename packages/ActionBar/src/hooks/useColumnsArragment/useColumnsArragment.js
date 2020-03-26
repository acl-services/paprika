import React from "react";
import produce from "immer";

export default function useColumnsArragment(initialColumns) {
  const [orderedColumns, setColumns] = React.useState(initialColumns);

  function handleChangeOrder({ source, destination }) {
    setColumns(
      produce(draftColumns => {
        const movedChild = draftColumns.splice(source, 1);
        draftColumns.splice(destination, 0, ...movedChild);
      })
    );
  }

  function handleHideAll() {
    setColumns(
      produce(draftColumns => {
        draftColumns.forEach(column => {
          // eslint-disable-next-line no-param-reassign
          column.isHidden = true;
        });
      })
    );
  }

  function handleShowAll() {
    setColumns(
      produce(draftColumns => {
        draftColumns.forEach(column => {
          // eslint-disable-next-line no-param-reassign
          column.isHidden = false;
        });
      })
    );
  }

  function handleChangeVisibility(columnId) {
    setColumns(
      produce(draftColumns => {
        draftColumns.forEach(column => {
          if (columnId === column.id) {
            // eslint-disable-next-line no-param-reassign
            column.isHidden = !column.isHidden;
          }
        });
      })
    );
  }

  return { orderedColumns, handleChangeVisibility, handleShowAll, handleHideAll, handleChangeOrder };
}
