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

export default function applyCallback(state, dispatch, callback, event = null) {
  const { eventType = null } = state;

  if (event) {
    return callback(event, ...[...getSelectedOptionSingle(state), dispatch, useListBox.types, eventType]);
  }

  if (state.isMulti) {
    return callback({ ...getSelectedOptionsMulti(state), dispatch, types: useListBox.types, eventType });
  }

  return callback(...[...getSelectedOptionSingle(state), dispatch, useListBox.types, eventType]);
}
