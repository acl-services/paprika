export default function tableReducer(state, action) {
  if (action.type === "RESET_STATE") return { ...state, ...action.payload };
  if (action.type === "UPDATE_LOCAL_STORAGE") {
    localStorage.getItem(storageKey)
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        sortColumn: initialState.sortColumn,
        sortDirection: initialState.sortDirection,
        columnsOrder: initialState.columnsOrder,
        filters: initialState.filters,
        logicalFilterOperator: initialState.logicalFilterOperator,
        columns: initialState.columns,
      })
    );
    return state;
  }
  return { ...state };
}
