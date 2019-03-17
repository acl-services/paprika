function handleChangeSingle(state, payload, selectedOptionsArray) {
  const activeOptionIndex =
    selectedOptionsArray && selectedOptionsArray.length === 0 ? null : payload.activeOptionIndex;
  state.onChange(activeOptionIndex, state.options);
}

function handleChangleMulti(state, payload, selectedOptionsArray, eventType) {
  state.onChange(selectedOptionsArray, state.options, payload.activeOptionIndex, eventType);
}

export default function handleChange(state, payload, selectedOptionsArray, eventType) {
  if (state.isMulti) {
    handleChangleMulti(state, payload, selectedOptionsArray, eventType);
    return;
  }

  handleChangeSingle(state, payload, selectedOptionsArray);
}
