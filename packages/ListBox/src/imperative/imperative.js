import useListBox from "../useListBox";
import applyOnChange from "../helpers/applyOnChange";

const handleImperative = (state, dispatch) => () => {
  return {
    clear: (isPopoverOpen = false) => {
      dispatch({
        type: useListBox.types.clear,
        payload: {
          isPopoverOpen,
          onChangeFn: applyOnChange(state.onChange, "listbox:imperative:clear"),
        },
      });
    },
    reset: () => {
      dispatch({
        type: useListBox.types.reset,
        payload: { onChangeFn: applyOnChange(state.onChange, "listbox:imperative:reset") },
      });
    },
    focus: () => {
      state.refTrigger.current.focus();
    },
    selected: state.isMulti ? state.selectedOptions : state.selectedOptions[0],
    options: state.options,
  };
};

export default handleImperative;
