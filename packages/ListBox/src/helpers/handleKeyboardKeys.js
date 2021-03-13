import { handleEnterOrSpace, handleArrowKeys } from "../components/Options/helpers/options";
import useListBox from "../useListBox";

export const handleKeyDownKeyboardKeys = ({ providedProps, state, dispatch, onChangeContext }) => event => {
  if (providedProps.isDisabled) return;

  if (["ArrowUp", "ArrowDown"].includes(event.key)) {
    handleArrowKeys({ event, state, dispatch, onChangeContext });
  }
};

export const handleKeyUpKeyboardKeys = ({ providedProps, state, dispatch, onChangeContext }) => event => {
  if (providedProps.isDisabled) return;

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
      handleEnterOrSpace({ event, providedProps, state, dispatch, onChangeContext });
      break;

    default:
      break;
  }
};
