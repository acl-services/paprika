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
          onChangeFn: invokeOnChange(onChangeContext, "list-box:imperative:clear"),
        },
      });
    },
    reset: () => {
      dispatch({
        type: useListBox.types.reset,
        payload: { onChangeFn: invokeOnChange(onChangeContext, "list-box:imperative:reset") },
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
