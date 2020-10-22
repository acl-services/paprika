import React from "react";
import isEqual from "lodash.isequal";
import useListBox from "../useListBox";
import { getDataOptions } from "../components/Option/helpers/optionState";

// we should export a hook from the popover so we get notify when the popover state for isOpen change meanwhile:
function waitForPopoverAnimation(func) {
  setTimeout(func, 300);
}

export function useChildrenChange(children) {
  const [state, dispatch] = useListBox();
  React.useEffect(() => {
    const options = getDataOptions(children);

    if (Object.keys(state.options).length === Object.keys(options).length) {
      const difference = Object.values(state.options).find(
        (prevOption, key) =>
          !isEqual(prevOption.value, options[key].value) ||
          prevOption.isDisabled !== options[key].isDisabled ||
          prevOption.isSelected !== options[key].isSelected
      );
      if (!difference) return;
    }

    dispatch({
      type: useListBox.types.updateOptions,
      payload: options,
    });
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
    const $option = state.options[state.activeOption]
      ? document.getElementById(state.options[state.activeOption].id)
      : null;

    if ($box && $option) {
      const rectBox = $box.getBoundingClientRect();
      const scrollTop = $box.scrollTop;
      const { marginBottom, marginTop } = window.getComputedStyle($option);
      const marginBottomNumber = Number.parseInt(marginBottom, 10);
      const marginTopNumber = Number.parseInt(marginTop, 10);
      const rectOption = $option.getBoundingClientRect();

      const nextTopPositionForOption =
        rectOption.height * state.activeOption + state.activeOption * (marginBottomNumber + marginTopNumber);

      if (nextTopPositionForOption >= scrollTop && nextTopPositionForOption <= scrollTop + rectBox.height) {
        if (rectBox.bottom >= rectOption.top && rectBox.bottom <= rectOption.bottom) {
          $box.scrollTo({
            top: scrollTop + (rectOption.bottom - rectBox.bottom) + (marginBottomNumber + marginTopNumber),
          });
          return;
        }
        return;
      }

      // position by the height of the option rect by the position index = rectOption.height * state.activeOption
      // calculate the amount of margin bottom and top for all elements before the option = state.activeOption * (marginBottomNumber + marginTopNumber)
      // correct scroll position
      $box.scrollTo({
        top: nextTopPositionForOption,
      });
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
