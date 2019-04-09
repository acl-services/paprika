import { getNextOptionActiveIndex } from "./options";
import useListBox from "../useListBox";

const handleKeyboardKeys = (state, dispatch) => event => {
  if (state.isDisabled) {
    return;
  }

  function handleArrowKeys({ isArrowDown = null } = {}, event) {
    if (!state.isPopoverOpen) {
      dispatch({ type: useListBox.types.openPopover });
      return;
    }

    event.preventDefault();
    const next = isArrowDown ? getNextOptionActiveIndex(state) : getNextOptionActiveIndex(state, false);
    if (next !== null) {
      if (state.isMulti) {
        dispatch({
          type: useListBox.types.setActiveOption,
          payload: { activeOptionIndex: next, isPopoverOpen: true },
        });
      } else {
        dispatch({
          type: useListBox.types.toggleSingleSelection,
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
        dispatch({ type: useListBox.types.closePopover });
      }
      break;

    case "Enter":
    case " ":
      {
        event.preventDefault();
        if (state.activeOption === null) {
          if (state.isInlineDisplay) {
            return;
          }

          if (state.hasNoResults) {
            return;
          }

          if (state.isMulti) {
            dispatch({ type: useListBox.types.togglePopover });
            return;
          }
        }

        const option = state.options[state.activeOption];

        if (option && option.isDisabled) {
          return;
        }

        if (state.isPopoverOpen) {
          if (state.isMulti) {
            if (option.isOptionActionGroup) {
              dispatch({
                type: useListBox.types.toggleSelectOptionsByGroup,
                payload: { index: option.index, group: option.value },
              });
            } else {
              dispatch({
                type: useListBox.types.toggleMultipleSelection,
                payload: {
                  activeOptionIndex: state.activeOption,
                  isPopoverOpen: true,
                  shouldListBoxContentScroll: false,
                },
              });
            }
          } else {
            dispatch({ type: useListBox.types.closePopover });
          }
        } else {
          dispatch({ type: useListBox.types.openPopover });
        }
      }
      break;

    default:
      break;
  }
};

export default handleKeyboardKeys;
