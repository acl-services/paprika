export default function filterReducer(state = [], action) {
  switch (action.type) {
    case "filter":
      return [...state];
    case "addFilter":
      return [
        ...state,
        {
          column: action.payload.column,
          rule: action.payload.rule,
          value: action.payload.value,
        },
      ];
    default:
      return [...state];
  }
}
