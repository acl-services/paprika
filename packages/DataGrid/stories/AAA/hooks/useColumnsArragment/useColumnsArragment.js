import React from "react";

export default function useColumnsArragment(initialColumns) {
  const [orderedColumns, setColumns] = React.useState(initialColumns);

  function handleChangeOrder({ source, destination }) {
    const newOrder = [...orderedColumns];
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

  React.useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

  return { orderedColumns, handleChangeVisibility, handleShowAll, handleHideAll, handleChangeOrder };
}
