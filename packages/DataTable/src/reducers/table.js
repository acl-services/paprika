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
      sortedOrder: sort({
        data: state.data,
        keygen: state.keygen,
        columnId: action.payload.columnId,
        direction: action.payload.direction,
        hasBackendSort: action.payload.hasBackendSort,
      }),
    };

  return { ...state };
}
