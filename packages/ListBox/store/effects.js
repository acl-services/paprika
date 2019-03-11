import * as actionTypes from "./actionTypes";

export const handleEffectIsPopOverOpen = (state, dispatch) => () => {
  if (!state.isPopoverEager) {
    return;
  }

  const filterInput = state.refFilterInput.current;
  const listBoxContainer = state.refListBoxContainer.current;
  const trigger = state.refTrigger.current;
  if (state.isPopoverOpen) {
    if (state.hasFilter) {
      // this is compiting with the focus of the
      // Popover, the popover will try to put the
      // focus on the <Popover.Content> which works
      // ok when you automatically wants to grant
      // focus to whatever content on the popover
      // unsure how to properly handle this.
      setTimeout(() => {
        filterInput.focus();
      }, 200);
    } else {
      listBoxContainer.focus();
    }

    dispatch({ type: actionTypes.setTriggerWidth, payload: state.refTriggerContainer.current.offsetWidth });
    dispatch({ type: actionTypes.setHasPopupOpened, payload: true });
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
    dispatch({ type: actionTypes.setTriggerWidth, payload: $triggerContainer.offsetWidth });
  }

  const handleResize = () => {
    dispatch({ type: actionTypes.setTriggerWidth, payload: $triggerContainer.offsetWidth });
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
};

export const handleEffectOnListBoxScrolled = state => () => {
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
