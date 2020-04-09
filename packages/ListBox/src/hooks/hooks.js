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
      if (state.isInline === false && state.isOpen === false) {
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
      if ($triggerContainer) {
        dispatch({ type: useListBox.types.setTriggerWidth, payload: $triggerContainer.offsetWidth });
      }
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
    if (!state.refListBox.current || state.activeOption === null) return;

    const $box = state.refListBox.current;
    const $option = document.getElementById(state.options[state.activeOption].id);

    if ($box && $option) {
      const rectBox = $box.getBoundingClientRect();
      const rectOption = $option.getBoundingClientRect();

      // if options its between the box don't do anything
      if (rectOption.top >= rectBox.top && rectOption.bottom <= rectBox.bottom) {
        return;
      }

      const { marginBottom, marginTop } = getComputedStyle($option);

      const margin = Number.parseInt(marginBottom.split("px")[0], 10) + Number.parseInt(marginTop.split("px")[0], 10);
      let gap = rectOption.bottom - rectBox.bottom;

      const isScrollingDown = Math.sign(gap) > 0;
      const optionHeightWithMargin = rectOption.height + margin;
      let gapWithMargin = gap + margin;

      if (isScrollingDown) {
        // this means that the option is partially visible but not completely
        if (gap < rectOption.height) {
          $box.scrollTo(0, $box.scrollTop + gapWithMargin);
          return;
        }

        $box.scrollTo(0, $box.scrollTop + optionHeightWithMargin);
        return;
      }

      gap = rectBox.top - rectOption.top;
      gapWithMargin = gap + margin;

      // this means that the option is partially visible but not completely
      if (gap < rectOption.height) {
        $box.scrollTo(0, $box.scrollTop - gapWithMargin);
        return;
      }

      $box.scrollTo(0, $box.scrollTop - optionHeightWithMargin);
    }
  }, [state.activeOption, state.options, state.refListBox]);
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
