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
  return [state.selectedOptions, cleanOptionProperties(state.options), state.activeOptionIndex];
}

const applyOnChange = (onChangeCallBack = () => {}, eventType = "", event) => (state, dispatch) => {
  const actionTypes = useListBox.types;

  if (state.isMulti) {
    onChangeCallBack.apply(null, [...getSelectedOptionsMulti(state), { dispatch, actionTypes, eventType, event }]);
    return;
  }

  return onChangeCallBack.apply(null, [...getSelectedOptionSingle(state), { dispatch, actionTypes, eventType, event }]);
};

export default applyOnChange;
