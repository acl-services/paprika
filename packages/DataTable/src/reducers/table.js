import { actions } from "../constants";

export default function tableReducer(state, action) {
  if (action.type === actions.RESET_DATA) return { ...state, data: action.payload };
  return { ...state };
}
