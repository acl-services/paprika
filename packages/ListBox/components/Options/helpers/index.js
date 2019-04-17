import useListBox from "../../../useListBox";

export function isOptionSelected(state, index) {
  return state.selectedOptions.includes(index);
}

export function isOptionVisible(state, key) {
  if (!Object.keys(state.options).length) return;

  const keyInt = Number.parseInt(key, 10);

  if (typeof state.options[keyInt] === "undefined") {
    return true;
  }

  if (state.hideOptionOnSelected && state.selectedOptions.includes(keyInt)) {
    return false;
  }

  if (state.hasNoResults) {
    return false;
  }

  if (state.options[keyInt].isHidden) {
    return false;
  }

  return !state.filteredOptions.length || state.filteredOptions.includes(keyInt);
}

function isDisabled(state, key) {
  return state.options[key].isDisabled;
}

export function getNextOptionActiveIndex(state, isAscending = true) {
  if (state.hasNoResults) return null;

  if (state.activeOption === null) return 0;

  const { activeOption, filteredOptions, options } = state;
  const optionsKeys = Object.keys(state.options);

  if (activeOption > Object.keys(options).length) {
    return 0;
  }

  let key = state.options[activeOption].index;

  let index = null;
  let keepIterating = true;

  while (keepIterating) {
    if (isAscending) {
      if (filteredOptions.length === 1) {
        keepIterating = false;
        return filteredOptions[0];
      }

      if ((filteredOptions.length && key + 1 > options.length) || key + 1 > optionsKeys.length - 1) {
        keepIterating = false;
        return null;
      }

      key++;
    } else {
      if ((filteredOptions.length && key - 1 < 0) || key - 1 < 0) {
        keepIterating = false;
        return null;
      }

      key--;
    }

    if (isOptionVisible(state, key) && !isDisabled(state, key)) {
      index = key;
      keepIterating = false;
    }
  }

  return index || 0;
}

export function getNextOptionActiveIndexLooping(state) {
  let activeIndex = getNextOptionActiveIndex(state);
  if (!activeIndex) {
    activeIndex = getNextOptionActiveIndex(state, false);
  }

  return activeIndex;
}

export function handleArrowKeys({ event, state, dispatch, isArrowDown = null }) {
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

function handleClickGroupSelector(state, dispatch, groupId) {
  if (state.selectedGroupSelectors.includes(groupId)) {
    dispatch({
      type: useListBox.types.deselectByGroup,
      payload: groupId,
    });

    return;
  }

  dispatch({
    type: useListBox.types.selectByGroup,
    payload: groupId,
  });
}

export const handleClickOption = ({ props, state, dispatch }) => event => {
  const { index } = props; // eslint-disable-line
  const { options, hasFilter, isMulti, refFilterInput } = state;
  const argsOnClick = [event, index, state.options, state, dispatch];
  const option = options[index];
  if (state.isDisabled || option.preventDefaultOnSelect || option.isDisabled) {
    if (props.onClick) {
      props.onClick(...argsOnClick);
    }

    return;
  }

  if (option.isGroupSelector) {
    handleClickGroupSelector(state, dispatch, option.groupId);
  }

  if (state.refListBox.current.contains(event.target) && document.activeElement === document.body && !hasFilter) {
    state.refListBoxContainer.current.focus();
  }

  if (hasFilter && isMulti) {
    refFilterInput.current.focus();
  }

  if (props.onClick) {
    // no sure if this is the state they want
    // since haven't run the entire cycle befor executing it
    props.onClick(...argsOnClick);
  }

  if (!option.isGroupSelector) {
    if (isMulti) {
      dispatch({
        type: useListBox.types.toggleMultipleSelection,
        payload: { activeOptionIndex: index, isPopoverOpen: true, shouldListBoxContentScroll: false },
      });

      return;
    }

    dispatch({
      type: useListBox.types.toggleSingleSelection,
      payload: { activeOptionIndex: index, isPopoverOpen: false },
    });
  }
};

export function handleEnterOrSpace({ event, state, dispatch }) {
  event.preventDefault();

  const option = state.options[state.activeOption];

  if (option && (option.isDisabled || option.preventDefaultOnSelect)) {
    if (state.options[state.activeOption].onClick) {
      // no sure if this is the state they want
      // since haven't run the entire cycle befor executing it
      state.options[state.activeOption].onClick(event, state.activeOption, state.options, state, dispatch);
    }

    return;
  }

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

  if (state.isPopoverOpen) {
    if (state.options[state.activeOption].onClick) {
      // no sure if this is the state they want
      // since haven't run the entire cycle befor executing it
      state.options[state.activeOption].onClick(state.activeOption, state.options, state, dispatch);
    }

    if (option.isGroupSelector) {
      handleClickGroupSelector(state, dispatch, option.groupId);
      return;
    }

    if (state.isMulti) {
      dispatch({
        type: useListBox.types.toggleMultipleSelection,
        payload: {
          activeOptionIndex: state.activeOption,
          isPopoverOpen: true,
          shouldListBoxContentScroll: false,
        },
      });
      return;
    }

    // for single select the option is set when the user interact with up and down arrows
    // no need to notify which option is selected just close the popover
    dispatch({ type: useListBox.types.closePopover });
  } else {
    dispatch({ type: useListBox.types.openPopover });
  }
}
