function handleChangeSingle(state, payload, selectedOptionsArray, eventType) {
  const activeOptionIndex =
    selectedOptionsArray && selectedOptionsArray.length === 0 ? null : payload.activeOptionIndex;
  state.onChange({ index: activeOptionIndex, options: state.options, type: eventType });
}

function handleChangeMulti(state, payload, selectedOptionsArray, eventType) {
  state.onChange({
    selected: selectedOptionsArray,
    options: state.options,
    index: payload.activeOptionIndex,
    type: eventType,
  });
}

export default function handleChange(state, payload, selectedOptionsArray, eventType) {
  if (state.isMulti) {
    handleChangeMulti(state, payload, selectedOptionsArray, eventType);
    return;
  }

  handleChangeSingle(state, payload, selectedOptionsArray, eventType);
}
