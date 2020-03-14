import React from "react";

export default function useColumnsArragment({ columns: initialColumns, setNext = () => {} }) {
  const [orderedColumns, setColumns] = React.useState({ initialColumns });

  function handleChangeOrder({ source, destination }) {
    const newOrder = [...orderedColumns];
    const movedChild = newOrder.splice(source, 1);
    newOrder.splice(destination, 0, ...movedChild);
    setColumns(newOrder);
    setNext(prev => prev && prev + 1);
  }

  function handleHideAll() {
    setColumns(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        isHidden: true,
      }))
    );
    setNext(prev => prev && prev + 1);
  }

  function handleShowAll() {
    setColumns(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        isHidden: false,
      }))
    );
    setNext(prev => prev && prev + 1);
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
    setNext(prev => prev && prev + 1);
  }

  React.useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]);

  return { orderedColumns, handleChangeVisibility, handleShowAll, handleHideAll, handleChangeOrder };
}
