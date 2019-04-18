import React from "react";
import useListBox from "../useListBox";
import { getDataOptions } from "../components/Option/helpers/optionState";

export const handleEffectChildren = (props, state, dispatch) => () => {
  if (Object.keys(state.options).length !== React.Children.count(props.children)) {
    const options = getDataOptions(props.children);

    dispatch({
      type: useListBox.types.updateOptions,
      payload: options,
    });
  }
};

export const handleEffectIsPopOverOpen = (state, dispatch) => () => {
  if (!state.isPopoverEager) {
    return;
  }

  if (!state.refListBoxContainer.current) return;

  const filterInput = state.refFilterInput.current;
  const listBoxContainer = state.refListBoxContainer.current;
  const trigger = state.refTrigger.current;
  if (state.isPopoverOpen) {
    if (state.hasFilter) {
      // this is racing with the focus of the
      // Popover, the popover will try to put the
      // focus on the <Popover.Content> which works
      // ok when you automatically wants to grant
      // focus to whatever content on the popover
      // unsure how to handle this properly.
      setTimeout(() => {
        filterInput.focus();
      }, 300);
    } else {
      if (state.isInlineDisplay) return;

      listBoxContainer.focus();
    }

    dispatch({ type: useListBox.types.setTriggerWidth, payload: state.refTriggerContainer.current.offsetWidth });
    dispatch({ type: useListBox.types.setHasPopupOpened, payload: true });
  } else if (state.hasPopupOpened) {
    listBoxContainer.focus();
    if (!state.isPopoverOpen) {
      trigger.focus();
    }
  }
};

export const handleEffectListBoxWidth = (state, dispatch) => () => {
  const $triggerContainer = state.refTriggerContainer.current;

  if ($triggerContainer) {
    dispatch({ type: useListBox.types.setTriggerWidth, payload: $triggerContainer.offsetWidth });
  }

  const handleResize = () => {
    dispatch({ type: useListBox.types.setTriggerWidth, payload: $triggerContainer.offsetWidth });
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
};

// This function is a candiate to use a memo in someway is used to scroll the window depending
// of the scrolling, not sure if this will conflict with react window.

export const handleEffectListBoxScrolled = state => () => {
  if (!state.refListBox.current) return;

  if (state.isPopoverOpen && state.options[state.activeOption] && state.shouldListBoxContentScroll) {
    const parentOffsetTop = state.refListBox.current.offsetTop;
    const $option = document.getElementById(state.options[state.activeOption].id);
    if ($option) {
      const optionOffsetTop = $option.offsetTop;
      let offsetTop = optionOffsetTop - parentOffsetTop;
      if (state.activeOption === 0) {
        offsetTop = 0;
      }

      state.refListBox.current.scrollTo(0, offsetTop - 10);
    }
  }
};

export const handleEffectHeightChange = (props, state, dispatch) => () => {
  if (props.height !== state.height) {
    dispatch({
      type: useListBox.types.setHeight,
      payload: props.height,
    });
  }
};

export const handleEffectIsDisabledChange = (props, dispatch) => () => {
  dispatch({
    type: useListBox.types.setIsDisabled,
    payload: props.isDisabled,
  });
};
