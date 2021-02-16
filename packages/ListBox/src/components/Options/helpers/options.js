import useListBox from "../../../useListBox";
import invokeOnChange from "../../../helpers/invokeOnChange";
import { KEY_PRESS, CLICK } from "../../../types";

export function selectSingleOption({
  activeOptionIndex,
  isOpen,
  dispatch,
  onChange = null,
  onChangeContext,
  eventType = "unknown",
}) {
  const onChangeFn = onChange || invokeOnChange(onChangeContext, `option-selected:${eventType}`);

  dispatch({
    type: useListBox.types.selectSingleOption,
    payload: { activeOptionIndex, isOpen, onChangeFn },
  });
}

export function toggleMultipleOption({ activeOptionIndex, dispatch, onChangeContext, eventType = "unknown" }) {
  dispatch({
    type: useListBox.types.toggleMultipleOption,
    payload: { activeOptionIndex, onChangeFn: invokeOnChange(onChangeContext, `option-selected:${eventType}`) },
  });
}

export function selectMultipleOption({
  activeOptionIndex,
  dispatch,
  isSelected,
  onChange = null,
  onChangeContext,
  eventType,
}) {
  const onChangeFn = onChange || invokeOnChange(onChangeContext, `option-selected:${eventType}`);

  dispatch({
    type: useListBox.types.selectMultipleOption,
    payload: { activeOptionIndex, onChangeFn, isSelected },
  });
}

export function isOptionSelected(state, index) {
  return state.selectedOptions.includes(index);
}

export function isOptionVisible(state, key) {
  if (!Object.keys(state.options).length) return;

  const keyInt = Number.parseInt(key, 10);

  if (typeof state.options[keyInt] === "undefined") {
    return true;
  }

  if (state.noResultsFound) {
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
  const { activeOption, filteredOptions, options } = state;
  const optionsKeys = Object.keys(state.options);

  if (state.noResultsFound) return null;

  if (optionsKeys.length === 1) {
    if (state.options[0].isDisabled) {
      return null;
    }
    return 0;
  }

  if (optionsKeys.length - 1 < activeOption) return 0;

  let key = state.activeOption === null ? -1 : state.options[activeOption].index;

  let keepIterating = true;

  while (keepIterating) {
    if (isAscending) {
      if (filteredOptions.length === 1) {
        keepIterating = false;
        return filteredOptions[0];
      }

      if (key > -1 && ((filteredOptions.length && key + 1 > options.length) || key + 1 > optionsKeys.length - 1)) {
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
      return key;
    }
  }
}

export function getNextOptionActiveIndexLooping(state) {
  return getNextOptionActiveIndex(state) || getNextOptionActiveIndex(state, false);
}

export function handleArrowKeys({ event, state, dispatch, isArrowDown = null, onChangeContext }) {
  if (!state.isInline && !state.isOpen) {
    dispatch({ type: useListBox.types.openPopover });
    return;
  }

  const next = getNextOptionActiveIndex(state, isArrowDown);
  event.preventDefault();

  if (next !== null) {
    state.refListBox.current.children[next].focus();
    if (state.isMulti) {
      dispatch({
        type: useListBox.types.setActiveOption,
        payload: { activeOptionIndex: next, isOpen: true },
      });
    } else {
      selectSingleOption({ activeOptionIndex: next, isOpen: true, dispatch, onChangeContext, eventType: KEY_PRESS });
    }
  }
}

export const toggleOption = ({ index, isMulti, dispatch, onChangeContext }) => {
  if (isMulti) {
    toggleMultipleOption({
      activeOptionIndex: index,
      dispatch,
      onChangeContext,
    });

    return;
  }

  selectSingleOption({ activeOptionIndex: index, isOpen: false, dispatch, onChangeContext });
};

export const handleClickOption = ({ props, state, dispatch, onChangeContext }) => event => {
  const { index } = props;
  const { options, hasFilter, isMulti, refFilterInput } = state;
  const hasPreventDefaultOnSelect = options[index].preventDefaultOnSelect;
  if (state.isDisabled || props.isDisabled) {
    return;
  }

  const focusListBoxContentIfHasNotFilter =
    state.refListBox.current.contains(event.target) && document.activeElement === document.body && !hasFilter;

  if (focusListBoxContentIfHasNotFilter) {
    state.refListBoxContainer.current.focus();
  }

  if (hasFilter && isMulti) {
    refFilterInput.current.focus();
  }

  if (props.onClick || hasPreventDefaultOnSelect) {
    const onClick = props.onClick ? props.onClick : () => {};

    if (hasPreventDefaultOnSelect) {
      // this will not selected the option, but will report that was clicked it.
      // since this action will not affect the state we can report it right back.

      onClick();
      return;
    }
    onClick();
  }

  if (isMulti) {
    toggleMultipleOption({
      activeOptionIndex: index,
      dispatch,
      onChangeContext,
      eventType: CLICK,
    });

    return;
  }

  selectSingleOption({ activeOptionIndex: index, isOpen: false, dispatch, onChangeContext, eventType: CLICK });
};

export function handleEnterOrSpace({ event, state, dispatch, onChangeContext }) {
  event.preventDefault();

  const option = state.options[state.activeOption];

  if (option && (option.isDisabled || option.preventDefaultOnSelect)) {
    if (typeof state.options[state.activeOption] !== "undefined" && state.options[state.activeOption].onClick) {
      // no sure if this is the state they want
      // since haven't run the entire cycle befor executing it
      state.options[state.activeOption].onClick(event, state.activeOption, state.options, state, dispatch);
    }

    return;
  }

  if (state.activeOption === null) {
    if (state.isInline) {
      return;
    }

    if (state.noResultsFound) {
      return;
    }

    if (state.isMulti) {
      // if the "Enter" occurs using in the filter input, prevent it.
      if (event.target.dataset.pkaAnchor === "list-filter-input") {
        return;
      }

      dispatch({ type: useListBox.types.togglePopover });
      return;
    }
  }

  if (state.isOpen || state.isInline) {
    if (typeof state.options[state.activeOption] !== "undefined" && state.options[state.activeOption].onClick) {
      state.options[state.activeOption].onClick();
    }

    if (state.isMulti) {
      toggleMultipleOption({
        activeOptionIndex: state.activeOption,
        dispatch,
        onChangeContext,
        eventType: KEY_PRESS,
      });
      return;
    }

    // for single select the option is set when the user interact with up and down arrows
    // no need to notify which option is selected just close the popover
    dispatch({ type: useListBox.types.closePopover });
    if (state.refTrigger.current) {
      state.refTrigger.current.focus();
    }
  } else {
    dispatch({ type: useListBox.types.openPopover });
  }
}

export function isWhiteListed(displayName) {
  return displayName === "ListBox.Option" || displayName === "ListBox.RawItem" || displayName === "ListBox.Divider";
}
