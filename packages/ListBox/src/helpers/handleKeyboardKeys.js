import { handleEnterOrSpace, handleArrowKeys } from "../components/Options/helpers/options";
import useListBox from "../useListBox";

export const handleKeyDownKeyboardKeys = ({ state, dispatch, onChangeContext }) => event => {
  if (state.isDisabled) {
    return;
  }

  console.log("PRESS DOWN");

  switch (event.key) {
    case "ArrowUp":
      handleArrowKeys({ event, state, dispatch, onChangeContext, isArrowDown: false });
      break;

    case "ArrowDown":
      handleArrowKeys({ event, state, dispatch, onChangeContext, isArrowDown: true });
      break;

    default:
      break;
  }
};

export const handleKeyUpKeyboardKeys = ({ state, dispatch, onChangeContext }) => event => {
  if (state.isDisabled) {
    return;
  }

  console.log("PRESS UP");

  switch (event.key) {
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
      console.log("ENTER");
      handleEnterOrSpace({ event, state, dispatch, onChangeContext });
      break;

    default:
      break;
  }
};
