import useListBox from "../useListBox";

export function sanitizeActionTypes() {
  const actionTypes = useListBox.types;
  return {
    clear: actionTypes.clear,
    closePopover: actionTypes.closePopover,
    openPopover: actionTypes.openPopover,
    reset: actionTypes.reset,
    togglePopover: actionTypes.togglePopover,
    unhideOptions: actionTypes.unhideOptions,
    unselectOptions: actionTypes.unselectOptions,
  };
}

export function getSelectedOptionSingle(state) {
  const activeOptionIndex =
    state.selectedOptions && state.selectedOptions.length === 0 ? null : state.selectedOptions[0];
  return [activeOptionIndex, state.options];
}

export function getSelectedOptionsMulti(state) {
  return [state.selectedOptions, state.options, state.activeOption];
}

const invokeOnChange = (onChangeCallback = () => {}, eventType = "", event) => (state, dispatch) => {
  if (!onChangeCallback) {
    // This could mean that the consumer might decide to use onClickAccept in the footer without a onChange or
    // added a footer without onClickAccept.
    return;
  }

  if (state.isMulti) {
    const [selected, options, current] = getSelectedOptionsMulti(state);
    onChangeCallback(selected, options, current, { dispatch, actionTypes: sanitizeActionTypes(), eventType, ...event });
    dispatch({ type: useListBox.types.cleanOnChangeFn });
    return;
  }

  const [selected, options] = getSelectedOptionSingle(state);
  onChangeCallback(selected, options, { dispatch, actionTypes: sanitizeActionTypes(), eventType, ...event });
  dispatch({ type: useListBox.types.cleanOnChangeFn });
};

export default invokeOnChange;
