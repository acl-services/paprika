import React from "react";
import produce from "immer";
import difference from "lodash.difference";

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

  return difference(originalArray, newArray).length > 0 || difference(newArray, originalArray).length > 0;
}

function getInitialOrder({ defaultOrder, isLocalStorageEnabled, localStoragePrefix }) {
  if (!isLocalStorageEnabled) return defaultOrder;

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

function getInitialHiddenColumnIds({
  defaultHiddenColumnIds,
  defaultOrder,
  isLocalStorageEnabled,
  localStoragePrefix,
}) {
  if (!isLocalStorageEnabled) return new Set(defaultHiddenColumnIds);

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

  return new Set(updatedHiddenColumns);
}

export default function useColumnsArrangement({
  defaultOrderedColumnIds: defaultOrder,
  disabledColumnIds = [],
  defaultHiddenColumnIds = [],
  localStoragePrefix = null,
}) {
  const isLocalStorageEnabled = localStoragePrefix !== null;
  const [order, setOrder] = React.useState(
    getInitialOrder({ defaultOrder, isLocalStorageEnabled, localStoragePrefix })
  );

  const [hiddenColumnIds, setHiddenColumnIds] = React.useState(
    getInitialHiddenColumnIds({
      defaultHiddenColumnIds,
      defaultOrder,
      isLocalStorageEnabled,
      localStoragePrefix,
    })
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

  const isColumnHidden = React.useCallback(
    columnId => {
      return hiddenColumnIds.has(columnId);
    },
    [hiddenColumnIds]
  );

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
