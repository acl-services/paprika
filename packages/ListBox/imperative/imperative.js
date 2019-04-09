import useListBox from "../store/useListBox";

const handleImperative = (state, dispatch) => () => {
  return {
    clear: (isPopoverOpen = false) => {
      dispatch({ type: useListBox.types.clear, payload: { isPopoverOpen } });
    },
    reset: () => {
      dispatch({ type: useListBox.types.reset });
    },
    focus: () => {
      state.refTrigger.current.focus();
    },
    selected: state.isMulti ? state.selectedOptions : state.selectedOptions[0],
    options: state.options,
  };
};

export default handleImperative;
