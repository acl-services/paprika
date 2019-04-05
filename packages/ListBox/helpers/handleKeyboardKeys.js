import { getNextOptionActiveIndex } from "./options";
import * as actionTypes from "../store/actionTypes";

const handleKeyboardKeys = (state, dispatch) => event => {
  if (state.isDisabled) {
    return;
  }

  function handleArrowKeys({ isArrowDown = null } = {}, event) {
    if (!state.isPopoverOpen) {
      dispatch({ type: actionTypes.openPopover });
      return;
    }

    event.preventDefault();
    const next = isArrowDown ? getNextOptionActiveIndex(state) : getNextOptionActiveIndex(state, false);
    if (next !== null) {
      if (state.isMulti) {
        dispatch({
          type: actionTypes.setActiveOption,
          payload: { activeOptionIndex: next, isPopoverOpen: true },
        });
      } else {
        dispatch({
          type: actionTypes.toggleSingleSelection,
          payload: { activeOptionIndex: next, isPopoverOpen: true },
        });
      }
    }
  }

  switch (event.key) {
    case "ArrowUp":
      handleArrowKeys({ isArrowDown: false }, event);
      break;

    case "ArrowDown":
      handleArrowKeys({ isArrowDown: true }, event);
      break;

    case "Escape":
      if (state.isPopoverOpen) {
        dispatch({ type: actionTypes.closePopover });
      }
      break;

    case "Enter":
    case " ":
      {
        event.preventDefault();

        debugger;

        if (state.activeOption === null) {
          if (state.isInlineDisplay) {
            return;
          }

          if (state.hasNoResults) {
            return;
          }

          if (state.isMulti) {
            dispatch({ type: actionTypes.togglePopover });
            return;
          }
        }

        const option = state.options[state.activeOption];

        if (option.isDisabled) {
          return;
        }

        if (state.isPopoverOpen) {
          if (state.isMulti) {
            if (option.isOptionActionGroup) {
              dispatch({
                type: actionTypes.toggleSelectOptionsByGroup,
                payload: { index: option.index, group: option.value },
              });
            } else {
              dispatch({
                type: actionTypes.toggleMultipleSelection,
                payload: {
                  activeOptionIndex: state.activeOption,
                  isPopoverOpen: true,
                  shouldListBoxContentScroll: false,
                },
              });
            }
          } else {
            dispatch({ type: actionTypes.closePopover });
          }
        } else {
          dispatch({ type: actionTypes.openPopover });
        }
      }
      break;

    default:
      break;
  }
};

export default handleKeyboardKeys;
