export default function tableReducer(state, action) {
  if (action.type === "RESET_STATE") return { ...state, ...action.payload };
  return { ...state };
}
