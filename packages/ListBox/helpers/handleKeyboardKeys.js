import { getNextOptionActiveIndex } from "./options";
import * as actionTypes from "../store/actionTypes";

const handleKeyboardKeys = (state, dispatch) => event => {
  function handleArrowKeys({ isArrowDown = null } = {}) {
    const next = isArrowDown ? getNextOptionActiveIndex(state) : getNextOptionActiveIndex(state, false);
    if (next !== null) {
      if (state.isMulti) {
        dispatch({ type: actionTypes.setActiveOption, payload: { activeOptionIndex: next, isPopoverOpen: true } });
        return;
      }

      dispatch({
        type: actionTypes.setOptionOnSingleSelection,
        payload: { activeOptionIndex: next, isPopoverOpen: true },
      });
    }
  }

  switch (event.key) {
    case "ArrowUp":
      event.preventDefault();
      handleArrowKeys({ isArrowDown: false });
      break;

    case "ArrowDown":
      event.preventDefault();
      handleArrowKeys({ isArrowDown: true });
      break;

    case "Escape":
      if (state.isPopoverOpen) {
        dispatch({ type: actionTypes.closePopover });
      }
      break;

    case "Enter":
    case " ":
      event.preventDefault();
      if (state.isPopoverOpen) {
        if (state.isMulti) {
          dispatch({ type: actionTypes.setOptionOnMultipleSelection, payload: state.activeOption });
        } else {
          dispatch({ type: actionTypes.closePopover });
        }
      } else {
        dispatch({ type: actionTypes.openPopover });
      }
      break;

    default:
      break;
  }
};

export default handleKeyboardKeys;
