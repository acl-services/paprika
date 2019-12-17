import { useDispatch, useDataTableState, useLocalStorage } from "../context";

export default function useToggleColumn() {
  const dispatch = useDispatch();
  const { columns } = useDataTableState();
  const updateLocalStorage = useLocalStorage();

  function toggleColumn(columnId) {
    dispatch({ type: "TOGGLE_COLUMN", payload: columnId });

    const newColumn = {
      ...columns[columnId],
      isHidden: !columns[columnId].isHidden,
    };
    updateLocalStorage({ columns: { ...columns, [columnId]: newColumn } });
  }

  return toggleColumn;
}
