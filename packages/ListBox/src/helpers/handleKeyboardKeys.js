import { handleEnterOrSpace, handleArrowKeys } from "../components/Options/helpers/options";
import useListBox from "../useListBox";

const handleKeyboardKeys = (state, dispatch) => event => {
  if (state.isDisabled) {
    return;
  }

  switch (event.key) {
    case "ArrowUp":
      handleArrowKeys({ event, state, dispatch, isArrowDown: false });
      break;

    case "ArrowDown":
      handleArrowKeys({ event, state, dispatch, isArrowDown: true });
      break;

    case "Escape":
      if (state.isPopoverOpen) {
        dispatch({ type: useListBox.types.closePopover });
      }
      break;

    case "Enter":
    case " ":
      handleEnterOrSpace({ event, state, dispatch });
      break;

    default:
      break;
  }
};

export default handleKeyboardKeys;
