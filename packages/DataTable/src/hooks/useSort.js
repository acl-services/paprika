import { useDispatch } from "../context";
import { actions } from "../constants";

export default function useSort() {
  const dispatch = useDispatch();

  return (columnId, direction, isBackendSort) =>
    dispatch({ type: actions.SORT, payload: { columnId, direction, isBackendSort } });
}
