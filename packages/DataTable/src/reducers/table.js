import filterReducer from "./filter";
import sort from "../helpers/sort";
import { actions } from "../constants";

const filterActions = [actions.ADD_FILTER, actions.REMOVE_FILTER, actions.UPDATE_FILTER, actions.UPDATE_FILTER_LOGIC];

export default function tableReducer(state, action) {
  if (action.type === actions.RESET_DATA) return { ...state, data: action.payload };
  if (filterActions.includes(action.type)) return { ...state, filters: filterReducer(state.filters, action) };
  if (action.type === actions.SORT)
    return {
      ...state,
      sortColumn: action.payload.columnId,
      sortDirection: action.payload.direction,
      sortedOrder: sort(
        state.data,
        state.keygen,
        action.payload.columnId,
        action.payload.direction,
        action.payload.isBackendSort
      ),
    };

  return { ...state };
}
