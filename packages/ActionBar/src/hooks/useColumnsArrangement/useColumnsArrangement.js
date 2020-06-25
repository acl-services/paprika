import React from "react";
import produce from "immer";

export default function useColumnsArrangement(defaultOrder) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [hiddenColumnIds, setHiddenColumnIds] = React.useState([]);

  const isColumnHidden = React.useCallback(
    columnId => {
      return hiddenColumnIds.indexOf(columnId) > -1;
    },
    [hiddenColumnIds]
  );

  function handleChangeOrder({ source, destination }) {
    setOrder(
      produce(draftOrder => {
        const movedChild = draftOrder.splice(source, 1);
        draftOrder.splice(destination, 0, ...movedChild);
      })
    );
  }

  function handleHideAll() {
    setHiddenColumnIds([...order]);
  }

  function handleShowAll() {
    setHiddenColumnIds([]);
  }

  function handleChangeVisibility(columnId) {
    setHiddenColumnIds(
      produce(draft => {
        const index = draft.indexOf(columnId);
        if (index > -1) {
          draft.splice(index, 1);
        } else {
          draft.push(columnId);
        }
      })
    );
  }

  return {
    orderedColumnIds: order,
    isColumnHidden,
    onChangeVisibility: handleChangeVisibility,
    onShowAll: handleShowAll,
    onHideAll: handleHideAll,
    onChangeOrder: handleChangeOrder,
  };
}
