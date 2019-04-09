import useListBox from "../../../useListBox";

export function isOptionSelected(state, index) {
  return state.selectedOptions.includes(index);
}

export function isOptionVisible(state, key) {
  const keyInt = Number.parseInt(key, 10);

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
  if (state.hasNoResults) {
    return null;
  }

  if (state.activeOption === null && !state.options[0].preventDefaultOnSelect) {
    return 0;
  }

  const optionsKeys = Object.keys(state.options);

  const { activeOption, filteredOptions, options } = state;
  let index = null;

  let keepIterating = true;
  let key = activeOption;

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

export const handleClickOption = ({ props, state, dispatch }) => event => {
  const { index } = props; // eslint-disable-line
  const { options, hasFilter, isMulti, refFilterInput } = state;

  if (state.isDisabled || options[index].preventDefaultOnSelect || options[index].isDisabled) {
    return;
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
    props.onClick(state.activeOption, state.options, dispatch);
  }

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
};

export function handleEnterOrSpace({ event, state, dispatch }) {
  event.preventDefault();

  const option = state.options[state.activeOption];

  if (option && (option.isDisabled || option.preventDefaultOnSelect)) {
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
      state.options[state.activeOption].onClick(state.activeOption, state.options, dispatch);
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
    } else {
      dispatch({ type: useListBox.types.closePopover });
    }
  } else {
    dispatch({ type: useListBox.types.openPopover });
  }
}
