import "@paprika/helpers/lib/polyfills/elementClosest";
import useListBox from "../../../useListBox";
import invokeOnChange from "../../../helpers/invokeOnChange";
import { KEY_PRESS, CLICK } from "../../../types";

function getOptions(event) {
  let HTMLNodeList = null;
  if (event.target.dataset?.pkaAnchor === "list-filter-input") {
    // the event is coming from the filter
    HTMLNodeList = event.target
      .closest("[data-pka-anchor='list-box-box']")
      .querySelector("[data-pka-anchor='styled-list']");
  } else {
    HTMLNodeList = event.target.querySelector("[data-pka-anchor='styled-list']");
  }

  // filtering only results with role="option" attribute
  return [...HTMLNodeList.children].filter(li => li.hasAttribute("role"));
}

function getNextUp(event) {
  function next(element) {
    const list = event.target.closest("[data-pka-anchor='styled-list']");
    const HTMLChildren = list.children;
    if (list && [...HTMLChildren].indexOf(element) > 0) {
      const sibling = element.previousElementSibling;
      // if the next sibling has aria-hidden we skip it and call
      // again previousSibling
      if (sibling.hasAttribute("aria-hidden")) {
        return next(sibling);
      }

      return sibling;
    }

    const box = document.activeElement.closest("[data-pka-anchor='list-box-box']");
    const filter = box.querySelector("[data-pka-anchor='list-filter-input']");
    if (filter) {
      filter.focus();
    }

    return null;
  }

  // an activeElement is an option
  if (document.activeElement && document.activeElement.getAttribute("role") === "option") {
    return next(document.activeElement);
  }

  // filter is already focussed just ignore the event
  if (document.activeElement.dataset?.pkaAnchor === "list-filter-input") {
    return null;
  }

  // focus the first option
  const options = getOptions(event);
  if (options.length) {
    return options[0];
  }

  return null;
}

function getNextDown(event) {
  function next(element) {
    const list = event.target.closest("[data-pka-anchor='styled-list']");
    const HTMLOptions = list.children;
    if (list && [...HTMLOptions].indexOf(element) < HTMLOptions.length - 1) {
      const sibling = element.nextElementSibling;

      // if the next sibling has aria-hidden we skip it and call
      // again nextElementSibling
      if (sibling.hasAttribute("aria-hidden")) {
        return next(sibling);
      }

      return sibling;
    }

    return null;
  }

  // an activeElement is an option
  if (document.activeElement.getAttribute("role") === "option") {
    return next(document.activeElement);
  }

  const options = getOptions(event);
  if (options.length) {
    return options[0];
  }

  return null;
}

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

export function handleArrowKeys({ event, state, dispatch, onChangeContext }) {
  event.preventDefault();

  const nextElement = event.key === "ArrowUp" ? getNextUp(event) : getNextDown(event);
  if (nextElement) {
    const activeOptionIndex = state.optionsIndex[nextElement.getAttribute("id")];

    if (state.isMulti) {
      dispatch({
        type: useListBox.types.setActiveOption,
        payload: { activeOptionIndex, isOpen: true },
      });

      // this fixed a weird bug when the list is filtered the dom stop focusing correctly
      // seems like a browser issue :/
      window.requestAnimationFrame(() => {
        nextElement.focus();
      });
      return;
    }

    const option = state.options[activeOptionIndex];
    if (option && !option.isDisabled) {
      selectSingleOption({
        activeOptionIndex,
        isOpen: true,
        dispatch,
        onChangeContext,
        eventType: KEY_PRESS,
      });
    }
    // this fixed a weird bug when the list is filtered the dom stop focusing correctly
    // seems like a browser issue :/
    window.requestAnimationFrame(() => {
      nextElement.focus();
    });
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

export const handleClickOption = ({ event, onClick, index, isDisabled, state, dispatch, onChangeContext }) => {
  if (isDisabled) return;
  const { options, hasFilter, isMulti, refListBox, refListBoxContainer } = state;
  const hasPreventDefaultOnSelect = options[index].preventDefaultOnSelect;

  const focusListBoxContentIfHasNotFilter =
    refListBox.current.contains(event.target) && document.activeElement === document.body && !hasFilter;

  if (focusListBoxContentIfHasNotFilter) {
    refListBoxContainer.current.focus();
  }

  if (onClick || hasPreventDefaultOnSelect) {
    const onClickFn = onClick ? onClick : () => {};

    if (hasPreventDefaultOnSelect) {
      // this will not selected the option, but will report that was clicked it.
      // since this action will not affect the state we can report it right back.

      onClickFn();
      return;
    }
    onClickFn();
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

export function handleEnterOrSpace({ event, providedProps, state, dispatch, onChangeContext }) {
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
    if (providedProps.isInline) {
      return;
    }

    if (state.noResultsFound) {
      return;
    }

    if (state.isMulti) {
      // if the "Enter" occurs using in the filter input, prevent it.
      if (event.target.dataset?.pkaAnchor === "list-filter-input") {
        return;
      }

      dispatch({ type: useListBox.types.togglePopover });
      return;
    }
  }

  if (state.isOpen || providedProps.isInline) {
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
    // no need to notify which option is selected just close the popover unless the option is disabled
    // id is null when in the focus of filter bar for space/ enter event
    const id = state.optionsIndex[document.activeElement.getAttribute("id")];
    if (state.options[id] && !state.options[id].isDisabled) {
      dispatch({ type: useListBox.types.closePopover });

      if (state.refTrigger.current) {
        state.refTrigger.current.focus();
      }
    }
  } else {
    dispatch({ type: useListBox.types.openPopover });
  }
}

export function isWhiteListed(displayName) {
  return displayName === "ListBox.Option" || displayName === "ListBox.RawItem" || displayName === "ListBox.Divider";
}
