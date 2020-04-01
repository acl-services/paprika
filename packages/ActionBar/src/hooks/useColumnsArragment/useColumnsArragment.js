import React from "react";
import produce from "immer";

export default function useColumnsArragment(initialColumns) {
  const [orderedColumns, setColumns] = React.useState(initialColumns);

  function handleChangeOrder({ source, destination }) {
    const newColumns = produce(draftColumns => {
      const movedChild = draftColumns.splice(source, 1);
      draftColumns.splice(destination, 0, ...movedChild);
    });
    setColumns(newColumns);
  }

  const setIsHiddenForAll = isHidden =>
    produce(draftColumns => {
      draftColumns.forEach(column => {
        // eslint-disable-next-line no-param-reassign
        column.isHidden = isHidden;
      });
    });

  function handleHideAll() {
    setColumns(setIsHiddenForAll(true));
  }

  function handleShowAll() {
    setColumns(setIsHiddenForAll(false));
  }

  function handleChangeVisibility(columnId) {
    const newColumns = produce(draftColumns => {
      draftColumns.forEach(column => {
        if (columnId === column.id) {
          // eslint-disable-next-line no-param-reassign
          column.isHidden = !column.isHidden;
        }
      });
    });
    setColumns(newColumns);
  }

  return { orderedColumns, handleChangeVisibility, handleShowAll, handleHideAll, handleChangeOrder };
}
