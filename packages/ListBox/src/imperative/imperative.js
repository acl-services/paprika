import useListBox from "../useListBox";
import applyOnChange from "../helpers/applyOnChange";

const handleImperative = (state, dispatch) => () => {
  return {
    clear: (isPopoverOpen = false) => {
      dispatch({ type: useListBox.types.clear, payload: { isPopoverOpen } });
      applyOnChange(
        { ...state, selectedOptions: [], activeOption: null, eventType: "listbox:imperative" },
        dispatch,
        state.onChange
      );
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
