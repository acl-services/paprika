import useListBox from "../useListBox";
import invokeOnChange from "../helpers/invokeOnChange";

const handleImperative = (state, dispatch) => () => {
  return {
    clear: (isOpen = false) => {
      dispatch({
        type: useListBox.types.clear,
        payload: {
          isOpen,
          onChangeFn: invokeOnChange(state.onChange, "listbox:imperative:clear"),
        },
      });
    },
    reset: () => {
      dispatch({
        type: useListBox.types.reset,
        payload: { onChangeFn: invokeOnChange(state.onChange, "listbox:imperative:reset") },
      });
    },
    focus: () => {
      state.refTrigger.current.focus();
    },
    selected: state.isMulti ? state.selectedOptions : state.selectedOptions[0],
    options: state.options,
    close: () => {
      dispatch({ type: useListBox.types.closePopover });
    },
  };
};

export default handleImperative;
