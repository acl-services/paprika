import useListBox from "../store/useListBox";
import { getDataOptions } from "../helpers/dataStructure";

export const handleEffectChildren = (dispatch, children) => () => {
  const options = getDataOptions(children);

  dispatch({
    type: useListBox.types.updateOptions,
    payload: options,
  });
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
      }, 200);
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

export const handleEffectHeightChange = (props, dispatch) => () => {
  dispatch({
    type: useListBox.types.setHeight,
    payload: props.height,
  });
};

export const handleEffectIsDisabledChange = dispatch => () => {
  dispatch({
    type: useListBox.types.toggleDisabled,
  });
};

export const handleEffectSelectedOptions = (state, dispatch) => () => {
  if (state.selectedOptions.length === Object.keys(state.options).length) {
    dispatch({ type: useListBox.types.closePopover });
  }
};
