import sort from "../helpers/sort";
import { actions } from "../constants";

export default function sortReducer(state, action) {
  if (action.type === actions.SORT)
    return {
      ...action.changes,
      sortColumn: action.payload.columnId,
      sortDirection: action.payload.direction,
      sortedOrder: sort({
        data: action.changes.data,
        columnId: action.payload.columnId,
        direction: action.payload.direction,
      }).map(item => item[state.keygen]),
    };

  return action.changes;
}
