import React from "react";
import useListBox from "../useListBox";
import { getDataOptions } from "../components/Option/helpers/optionState";

// we should export a hook from the popover so we get notify when the popover state for isOpen change meanwhile:
function waitForPopoverAnimation(func) {
  setTimeout(func, 300);
}

export const handleEffectChildren = (props, state, dispatch) => () => {
  if (Object.keys(state.options).length + state.hasFooter !== React.Children.count(props.children)) {
    const options = getDataOptions(props.children);

    dispatch({
      type: useListBox.types.updateOptions,
      payload: options,
    });
  }
};

export const handleEffectIsPopOverOpen = (state, dispatch, shouldKeepTriggerFocus) => () => {
  if (state.isInline) return;
  if (!state.refListBoxContainer.current) return;

  const filterInput = state.refFilterInput.current;
  const listBoxContainer = state.refListBoxContainer.current;
  const trigger = state.refTrigger.current;
  if (state.isOpen) {
    if (state.hasFilter && !shouldKeepTriggerFocus) {
      waitForPopoverAnimation(() => filterInput.focus());
      return;
    }

    dispatch({ type: useListBox.types.setTriggerWidth, payload: state.refTriggerContainer.current.offsetWidth });
    dispatch({ type: useListBox.types.setHasPopupOpened, payload: true });

    if (!shouldKeepTriggerFocus) {
      waitForPopoverAnimation(() => listBoxContainer.focus());
    }
    return;
  }

  if (state.hasPopupOpened) {
    listBoxContainer.focus();
    if (!state.isInline && !state.isOpen) {
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

  if (state.isOpen && state.options[state.activeOption] && state.shouldContentScroll) {
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

export const handleEffectIsDisabledChange = (props, dispatch) => () => {
  dispatch({
    type: useListBox.types.setIsDisabled,
    payload: props.isDisabled,
  });
};

export const handleEffectOptionSelected = (state, dispatch) => () => {
  if (state.onChangeFn) {
    state.onChangeFn(state, dispatch);
  }
};

export const handleEffectHasFooter = (Footer, dispatch) => () => {
  if (Footer) {
    dispatch({
      type: useListBox.types.setHasFooter,
      payload: true,
    });
  }
};
