import useListBox from "../useListBox";
import invokeOnChange from "../helpers/invokeOnChange";
import { toggleOption } from "../components/Options/helpers/options";

const handleImperative = ({ state, dispatch, onChangeContext }) => () => {
  return {
    clear: (isOpen = false) => {
      dispatch({
        type: useListBox.types.clear,
        payload: {
          isOpen,
          onChangeFn: invokeOnChange(onChangeContext, "listbox:imperative:clear"),
        },
      });
    },
    reset: () => {
      dispatch({
        type: useListBox.types.reset,
        payload: { onChangeFn: invokeOnChange(onChangeContext, "listbox:imperative:reset") },
      });
    },
    setActiveOptionIndex: (index = 0) => {
      dispatch({
        type: useListBox.types.setActiveOption,
        payload: { activeOptionIndex: index },
      });
    },
    focus: () => {
      state.refTrigger.current.focus();
    },
    toggleSelectedOption: index => {
      toggleOption({
        index,
        isMulti: state.isMulti,
        dispatch,
        onChangeContext,
      });
    },
    selected: state.isMulti ? state.selectedOptions : state.selectedOptions[0],
    options: state.options,
    close: () => {
      dispatch({ type: useListBox.types.closePopover });
    },
  };
};

export default handleImperative;
