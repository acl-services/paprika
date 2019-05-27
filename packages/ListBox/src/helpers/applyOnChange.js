import useListBox from "../useListBox";

export function cleanActionTypes() {
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

const applyOnChange = (onChangeCallBack = () => {}, eventType = "", event) => (state, dispatch) => {
  if (!onChangeCallBack) {
    // This could mean that the consumer might decide to use onClickAccept in the footer without a onChange or
    // added a footer without onClickAccept.
    return;
  }

  if (state.isMulti) {
    onChangeCallBack.apply(null, [
      ...getSelectedOptionsMulti(state),
      { dispatch, actionTypes: cleanActionTypes(), eventType, ...event },
    ]);
    dispatch({ type: useListBox.types.cleanOnChangeFn });
    return;
  }

  onChangeCallBack.apply(null, [
    ...getSelectedOptionSingle(state),
    { dispatch, actionTypes: cleanActionTypes(), eventType, ...event },
  ]);
  dispatch({ type: useListBox.types.cleanOnChangeFn });
};

export default applyOnChange;
