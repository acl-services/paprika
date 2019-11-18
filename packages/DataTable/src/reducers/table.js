import sort from "../helpers/sort";
import { actions } from "../constants";

export default function tableReducer(state, action) {
  if (action.type === actions.RESET_DATA) return { ...state, data: action.payload };
  if (action.type === actions.SORT)
    return {
      ...state,
      sortColumn: action.payload.columnId,
      sortDirection: action.payload.direction,
      sortedOrder: action.payload.hasBackendSort
        ? null
        : sort({
            data: state.data,
            columnId: action.payload.columnId,
            direction: action.payload.direction,
          }).map(item => item[state.keygen]),
    };

  return { ...state };
}
