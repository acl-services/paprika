import React from "react";
import produce from "immer";

const savedItem = {
  VISIBILITY: "VISIBILITY",
  ORDERS: "ORDERS",
};

function getLocalStorageKey(localStoragePrefix, typeOfSavedItem) {
  return `${localStoragePrefix}--${typeOfSavedItem}`;
}

function getColumnIdsfromLocalStorage(localStorageKey) {
  const prevDataInString = window.localStorage.getItem(localStorageKey);

  if (prevDataInString) return JSON.parse(prevDataInString);
  return [];
}

function updateHiddenColumnIdFromLocalStorage(localStoragePrefix, columnId, isVisible) {
  const localStorageKey = getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY);
  const prevData = getColumnIdsfromLocalStorage(localStorageKey);
  const result = prevData.filter(item => item !== columnId);

  if (isVisible) {
    window.localStorage.setItem(localStorageKey, JSON.stringify(result));
  } else {
    result.push(columnId);
    window.localStorage.setItem(localStorageKey, JSON.stringify(result));
  }
}

export default function useColumnsArrangement({
  defaultOrderedColumnIds: defaultOrder,
  disabledColumnIds = [],
  defaultHiddenColumnIds = [],
  localStoragePrefix = null,
}) {
  const isLocalStorageEnabled = localStoragePrefix !== null;
  const [order, setOrder] = React.useState(defaultOrder);
  const [hiddenColumnIds, setHiddenColumnIds] = React.useState(() =>
    isLocalStorageEnabled
      ? new Set(getColumnIdsfromLocalStorage(getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY)))
      : new Set(defaultHiddenColumnIds)
  );

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
    return hiddenColumnIds.has(columnId);
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
    const newHiddenColumnIds = order.filter(id => !disabledColumnIds.includes(id));
    setHiddenColumnIds(new Set(newHiddenColumnIds));

    if (isLocalStorageEnabled) {
      window.localStorage.setItem(
        getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY),
        JSON.stringify(newHiddenColumnIds)
      );
    }
  }

  function handleShowAll() {
    setHiddenColumnIds(new Set());

    if (isLocalStorageEnabled) {
      window.localStorage.setItem(getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY), "[]");
    }
  }

  function handleChangeVisibility(columnId) {
    setHiddenColumnIds(
      produce(draft => {
        if (draft.has(columnId)) {
          draft.delete(columnId);
        } else {
          draft.add(columnId);
        }
        if (isLocalStorageEnabled) {
          updateHiddenColumnIdFromLocalStorage(localStoragePrefix, columnId, !draft.has(columnId));
        }
        return new Set(draft);
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
