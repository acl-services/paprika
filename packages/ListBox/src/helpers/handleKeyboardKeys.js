import { handleEnterOrSpace, handleArrowKeys } from "../components/Options/helpers/options";
import useListBox from "../useListBox";

const handleKeyboardKeys = ({ state, dispatch, onChangeContext }) => event => {
  if (state.isDisabled) {
    return;
  }

  switch (event.key) {
    case "ArrowUp":
      handleArrowKeys({ event, state, dispatch, onChangeContext, isArrowDown: false });
      break;

    case "ArrowDown":
      handleArrowKeys({ event, state, dispatch, onChangeContext, isArrowDown: true });
      break;

    case "Escape":
      if (!state.isOpen) break;
      if (state.hasFooter) {
        dispatch({ type: useListBox.types.cancel });
      } else {
        dispatch({ type: useListBox.types.closePopover });
      }
      break;

    case "Enter":
    case " ":
      handleEnterOrSpace({ event, state, dispatch, onChangeContext });
      break;

    default:
      break;
  }
};

export default handleKeyboardKeys;
