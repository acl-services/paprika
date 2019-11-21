import { useDispatch } from "../context";
import { actions } from "../constants";

export default function useSort() {
  const dispatch = useDispatch();

  return (columnId, direction) => dispatch({ type: actions.SORT, payload: { columnId, direction } });
}
