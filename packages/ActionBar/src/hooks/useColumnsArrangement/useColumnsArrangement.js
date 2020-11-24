import React from "react";
import produce from "immer";

export default function useColumnsArrangement(defaultOrder, disabledColumnIds = []) {
  const [order, setOrder] = React.useState(defaultOrder);
  const [hiddenColumnIds, setHiddenColumnIds] = React.useState([]);

  function canMove({ source, destination }) {
    if (disabledColumnIds.length === 0) return true;

    const newOrder = [...order];
    const movedChild = newOrder.splice(source, 1);
    newOrder.splice(destination, 0, ...movedChild);

    return disabledColumnIds.every(
      disabledColumnId => defaultOrder.indexOf(disabledColumnId) === newOrder.indexOf(disabledColumnId)
    );
  }

  function isColumnHidden(columnId) {
    return hiddenColumnIds.indexOf(columnId) > -1;
  }

  function handleChangeOrder({ source, destination }) {
    if (!canMove({ source, destination })) return;

    setOrder(
      produce(draftOrder => {
        const movedChild = draftOrder.splice(source, 1);
        draftOrder.splice(destination, 0, ...movedChild);
      })
    );
  }

  function handleHideAll() {
    setHiddenColumnIds(order.filter(id => !disabledColumnIds.includes(id)));
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
