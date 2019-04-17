import useListBox from "../useListBox";

function cleanOptionProperties(options) {
  return Object.keys(options).map(key => {
    // properties to be share with the consumer
    const { value, groupId, groupLabel, label, preventDefaultOnSelect } = options[key];

    const optionForConsumer = { index: Number.parseInt(key, 10), value, groupId, groupLabel, label };

    if (preventDefaultOnSelect) {
      return Object.freeze({ ...optionForConsumer, hasPreventDefaultOnSelect: true });
    }

    return Object.freeze(optionForConsumer); // read only
  });
}

function getSelectedOptionSingle(state) {
  const activeOptionIndex =
    state.selectedOptions && state.selectedOptions.length === 0 ? null : state.selectedOptions[0];
  return [activeOptionIndex, cleanOptionProperties(state.options)];
}

function getSelectedOptionsMulti(state) {
  return {
    selected: state.selectedOptions,
    options: cleanOptionProperties(state.options),
    index: state.activeOptionIndex,
  };
}

export default function callbackParameters(state, dispatch) {
  if (state.isMulti) {
    return { ...getSelectedOptionsMulti(state), dispatch, types: useListBox.types };
  }

  return [...getSelectedOptionSingle(state), dispatch, useListBox.types];
}
