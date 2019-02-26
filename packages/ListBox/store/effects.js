import * as actionTypes from "./actionTypes";

export const handleEffectIsPopOver = (state, dispatch) => () => {
  const filterInput = state.refFilterInput.current;
  const listBoxContainer = state.refListBoxContainer.current;
  if (state.isPopoverOpen) {
    if (state.hasFilter) {
      // this is compiting with the focus of the
      // Popover, the popover will try to put the
      // focus on the <Popover.Content> which works
      // ok when you automatically wants to grant
      // focus to whatever content on the popover
      // unsure how to handle this without settimout
      // 200ms seems really stable for stealing the
      // focus from the <Popover.Content />
      setTimeout(() => {
        if (filterInput) {
          filterInput.focus();
        }
      }, 200);
    } else {
      listBoxContainer.focus();
    }

    dispatch({ type: actionTypes.setTriggerWidth, payload: state.refTriggerContainer.current.offsetWidth });
    dispatch({ type: actionTypes.setHasPopupOpened, payload: true });
  } else if (state.hasPopupOpened) {
    listBoxContainer.focus();
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
  if (state.isPopoverOpen && state.options[state.activeOption]) {
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
