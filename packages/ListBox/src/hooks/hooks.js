import React from "react";
import isEqual from "lodash.isequal";
import useListBox from "../useListBox";
import { PropsContext } from "../store/PropsProvider";
import { getDataOptions } from "../components/Option/helpers/optionState";

// we should export a hook from the popover so we get notify when the popover state for isOpen change meanwhile:
function waitForPopoverAnimation(func) {
  setTimeout(func, 300);
}

export function useChildrenChange(children) {
  const [state, dispatch] = useListBox();
  React.useEffect(() => {
    const { options, optionsIndex } = getDataOptions(children);

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
      payload: { options, optionsIndex },
    });
  }, [children, dispatch, state.hasFooter, state.options]);
}

export function useIsPopOverOpen(shouldKeepTriggerFocus) {
  const [state, dispatch] = useListBox();
  const {
    hasFilter,
    hasPopupOpened,
    isOpen,
    refFilterInput,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
  } = state;
  const { isInline } = React.useContext(PropsContext);

  React.useLayoutEffect(() => {
    if (isInline) return;
    if (!refListBoxContainer.current) return;

    const filterInput = refFilterInput.current;
    const listBoxContainer = refListBoxContainer.current;
    const trigger = refTrigger.current;

    if (isOpen) {
      dispatch({ type: useListBox.types.setTriggerWidth, payload: refTriggerContainer.current.offsetWidth });

      if (!shouldKeepTriggerFocus) {
        waitForPopoverAnimation(() => (hasFilter ? filterInput.focus() : listBoxContainer.focus()));
      }

      return;
    }

    if (hasPopupOpened) {
      listBoxContainer.focus();
      if (isInline === false && isOpen === false) {
        trigger.focus();
      }
    }
  }, [
    dispatch,
    hasFilter,
    hasPopupOpened,
    isInline,
    isOpen,
    refFilterInput,
    refListBoxContainer,
    refTrigger,
    refTriggerContainer,
    shouldKeepTriggerFocus,
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
