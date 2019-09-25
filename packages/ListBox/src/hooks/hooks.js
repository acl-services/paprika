import React from "react";
import useListBox from "../useListBox";
import { getDataOptions } from "../components/Option/helpers/optionState";

// we should export a hook from the popover so we get notify when the popover state for isOpen change meanwhile:
function waitForPopoverAnimation(func) {
  setTimeout(func, 300);
}

export function useChildrenLengthChange(children) {
  const [state, dispatch] = useListBox();
  React.useEffect(() => {
    if (Object.keys(state.options).length !== React.Children.count(children)) {
      const options = getDataOptions(children);

      dispatch({
        type: useListBox.types.updateOptions,
        payload: options,
      });
    }
  }, [children, dispatch, state.hasFooter, state.options]);
}

export function useIsPopOverOpen(shouldKeepTriggerFocus) {
  const [state, dispatch] = useListBox();

  React.useLayoutEffect(() => {
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
  }, [
    dispatch,
    shouldKeepTriggerFocus,
    state.hasFilter,
    state.hasPopupOpened,
    state.isInline,
    state.isOpen,
    state.refFilterInput,
    state.refListBoxContainer,
    state.refTrigger,
    state.refTriggerContainer,
  ]);
}

export function useAdjustWidth() {
  const [state, dispatch] = useListBox();

  React.useLayoutEffect(() => {
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
  }, [dispatch, state.refTriggerContainer]);
}

export function useOnScrolled() {
  const [state] = useListBox();
  React.useLayoutEffect(() => {
    if (!state.refListBox.current) return;

    const shallScrolled = (state.shouldContentScroll && state.isInline) || (state.isOpen && state.shouldContentScroll);

    if (shallScrolled && state.options[state.activeOption]) {
      const parentOffsetTop = state.refListBox.current.offsetTop;
      const $option = document.getElementById(state.options[state.activeOption].id);
      if ($option) {
        const optionOffsetTop = $option.offsetTop;
        let offsetTop = optionOffsetTop - parentOffsetTop;
        if (state.activeOption === 0) {
          offsetTop = 0;
        }

        if (state.refListBox.current) state.refListBox.current.scrollTo(0, offsetTop - 10);
      }
    }
  }, [state.activeOption, state.isInline, state.isOpen, state.options, state.refListBox, state.shouldContentScroll]);
}

export function useIsDisabled(isDisabled) {
  const [, dispatch] = useListBox();

  React.useEffect(() => {
    dispatch({
      type: useListBox.types.setIsDisabled,
      payload: isDisabled,
    });
  }, [dispatch, isDisabled]);
}

export function useOptionSelected() {
  const [state, dispatch] = useListBox();

  React.useEffect(() => {
    if (state.onChangeFn) {
      state.onChangeFn(state, dispatch);
    }
  }, [dispatch, state, state.selectedOptions]);
}

export function useHasFooter(footer) {
  const [, dispatch] = useListBox();

  React.useEffect(() => {
    if (footer) {
      dispatch({
        type: useListBox.types.setHasFooter,
        payload: true,
      });
    }
  }, [dispatch, footer]);
}
