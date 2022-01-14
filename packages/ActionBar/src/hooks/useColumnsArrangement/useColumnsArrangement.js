import React from "react";
import produce from "immer";

const savedItem = {
  VISIBILITY: "VISIBILITY",
  ORDER: "ORDER",
};

function getLocalStorageKey(localStoragePrefix, typeOfSavedItem) {
  return `${localStoragePrefix}--${typeOfSavedItem}`;
}

function getColumnIdsfromLocalStorage(localStorageKey, fallbackArray = []) {
  const prevDataInString = window.localStorage.getItem(localStorageKey);

  if (prevDataInString) return JSON.parse(prevDataInString);
  window.localStorage.setItem(localStorageKey, JSON.stringify(fallbackArray));
  return fallbackArray;
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

function hasDifferences(originalArray, newArray) {
  if (originalArray.length !== newArray.length) return true;

  return originalArray.some(item => !newArray.includes(item)) || newArray.some(item => !originalArray.includes(item));
}

function getInitialOrder({ defaultOrder, localStoragePrefix }) {
  const cachedOrder = getColumnIdsfromLocalStorage(
    getLocalStorageKey(localStoragePrefix, savedItem.ORDER),
    defaultOrder
  );

  if (hasDifferences(cachedOrder, defaultOrder)) {
    window.localStorage.setItem(getLocalStorageKey(localStoragePrefix, savedItem.ORDER), JSON.stringify(defaultOrder));
    return defaultOrder;
  }

  return cachedOrder;
}

function getInitialHiddenColumnIds({ defaultHiddenColumnIds, defaultOrder, localStoragePrefix }) {
  const cachedHiddenColumns = getColumnIdsfromLocalStorage(
    getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY),
    defaultHiddenColumnIds
  );

  const updatedHiddenColumns = cachedHiddenColumns.filter(columnId => defaultOrder.includes(columnId));

  if (hasDifferences(updatedHiddenColumns, cachedHiddenColumns)) {
    window.localStorage.setItem(
      getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY),
      JSON.stringify(updatedHiddenColumns)
    );
  }

  return updatedHiddenColumns;
}

export default function useColumnsArrangement({
  defaultOrderedColumnIds: defaultOrder,
  disabledColumnIds = [],
  defaultHiddenColumnIds = [],
  localStoragePrefix = null,
}) {
  const isLocalStorageEnabled = localStoragePrefix !== null;
  const [order, setOrder] = React.useState(() =>
    isLocalStorageEnabled ? getInitialOrder({ defaultOrder, localStoragePrefix }) : defaultOrder
  );
  const [hiddenColumnIds, setHiddenColumnIds] = React.useState(() =>
    isLocalStorageEnabled
      ? getInitialHiddenColumnIds({
          defaultHiddenColumnIds,
          defaultOrder,
          localStoragePrefix,
        })
      : defaultHiddenColumnIds
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

  const isColumnHidden = React.useCallback(columnId => hiddenColumnIds.includes(columnId), [hiddenColumnIds]);

  function handleChangeOrder({ source, destination }) {
    if (!canMove({ source, destination })) return;

    setOrder(
      produce(draftOrder => {
        const movedChild = draftOrder.splice(source, 1);
        draftOrder.splice(destination, 0, ...movedChild);

        if (isLocalStorageEnabled) {
          window.localStorage.setItem(
            getLocalStorageKey(localStoragePrefix, savedItem.ORDER),
            JSON.stringify(draftOrder)
          );
        }
      })
    );
  }

  function handleHideAll() {
    const newHiddenColumnIds = order.filter(id => !disabledColumnIds.includes(id));
    setHiddenColumnIds(newHiddenColumnIds);

    if (isLocalStorageEnabled) {
      window.localStorage.setItem(
        getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY),
        JSON.stringify(newHiddenColumnIds)
      );
    }
  }

  function handleShowAll() {
    setHiddenColumnIds([]);

    if (isLocalStorageEnabled) {
      window.localStorage.setItem(getLocalStorageKey(localStoragePrefix, savedItem.VISIBILITY), "[]");
    }
  }

  function handleChangeVisibility(columnId) {
    setHiddenColumnIds(
      produce(draft => {
        const index = draft.indexOf(columnId);

        if (index !== -1) {
          draft.splice(index, 1);
        } else {
          draft.push(columnId);
        }
        if (isLocalStorageEnabled) {
          updateHiddenColumnIdFromLocalStorage(localStoragePrefix, columnId, !draft.includes(columnId));
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
