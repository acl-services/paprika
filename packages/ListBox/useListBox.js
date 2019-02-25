import { useState, useEffect, useMemo } from "react";
import { getDataOptions, getDataGroups } from "./helpers/dataStructures";
import { getNextOptionActiveIndex } from "./helpers/options";

export default function useListBox({
  $refListBoxTrigger,
  $refListBoxTriggerContainer,
  $refListBoxContainer,
  $refListBoxFilterInput,
  $refListBox,
  hasFilter,
  isMulti,
  listBoxOptions,
  isPopoverOpen,
}) {
  const memoizedOptions = useMemo(() => getDataOptions(listBoxOptions, [listBoxOptions]));
  const memoizedGroups = useMemo(() => getDataGroups(listBoxOptions, [listBoxOptions]));

  /**
    state description:
    @activeOption     points to the options which have the "focus"
    @filteredOptions  an array containing the options that have been hidden by filtering
                      or selection process
    @hasPopupOpened   is displaying the options popup or not
    @isMulti          Describe if the Listbox accepts or not multiple selection
    @selectedOptions  User selected options via mouse click or keyboard interaction
    @hasNoResults     Will be set to true when the filter dont find results See: Filter.js
  */
  const [state, set] = useState({
    activeOption: 0,
    hasFilter,
    hasNoResults: false,
    hasPopupOpened: false,
    filteredOptions: [],
    isMulti,
    options: memoizedOptions,
    groups: memoizedGroups,
    selectedOptions: [],
    triggerWidth: 0,
    isPopoverOpen,
  });

  function close() {
    set({
      ...state,
      filteredOptions: [],
      isPopoverOpen: false,
    });
  }

  function setActiveOption(nextActiveIndex) {
    set({ ...state, activeOption: nextActiveIndex });
  }

  function setSingleSelectOption(nextSelectedIndex, _isPopoverOpen = true) {
    set(_state => ({
      ..._state,
      activeOption: nextSelectedIndex,
      selectedOptions: [nextSelectedIndex],
      isPopoverOpen: _isPopoverOpen,
    }));
  }

  function setMultipleSelectOptions(nextSelectedIndex) {
    set(_state => {
      const selectedOptionsArray = _state.selectedOptions.slice();

      if (selectedOptionsArray.includes(nextSelectedIndex)) {
        const index = selectedOptionsArray.indexOf(nextSelectedIndex);
        selectedOptionsArray.splice(index, 1);
      } else {
        selectedOptionsArray.push(nextSelectedIndex);
      }

      return {
        ..._state,
        isPopoverOpen: true,
        activeOption: nextSelectedIndex,
        selectedOptions: selectedOptionsArray,
      };
    });
  }

  const handleClickListBoxOption = index => () => {
    if (isMulti) {
      setMultipleSelectOptions(index);
      return;
    }

    setSingleSelectOption(index, false);
  };

  const handleClickListBoxButton = () => {
    set(_state => ({ ..._state, isPopoverOpen: !_state.isPopoverOpen }));
  };

  const handleClickListBoxIsMultiAccept = () => {
    close();
  };

  const handleClickListBoxIsMultiCancel = event => {
    event.stopPropagation();
    close();
  };

  function getPreviousOption() {
    return getNextOptionActiveIndex(state, false);
  }

  function getNextOption() {
    return getNextOptionActiveIndex(state);
  }

  const handleArrowKeyUp = event => {
    event.preventDefault();
    const previous = getPreviousOption();
    if (previous !== null) {
      if (isMulti) {
        setActiveOption(previous);
        return;
      }

      setSingleSelectOption(previous);
    }
  };

  const handleArrowKeyDown = event => {
    event.preventDefault();
    const next = getNextOption();
    if (next !== null) {
      if (isMulti) {
        setActiveOption(next);
        return;
      }

      setSingleSelectOption(next);
    }
  };

  const handleKeyDownListBoxContainer = event => {
    event.stopPropagation();
    switch (event.key) {
      case "ArrowUp":
        handleArrowKeyUp(event);
        break;

      case "ArrowDown":
        handleArrowKeyDown(event);
        break;

      case "Escape":
        if (state.isPopoverOpen) {
          close();
        }
        break;

      case "Enter":
        // NOTE: adding space increase complexity when the multiselect
        // includes search input or input checkbox which is control with
        // the space bar
        // case ' ':
        if (state.isPopoverOpen) {
          if (isMulti) {
            setMultipleSelectOptions(state.activeOption);
          } else {
            close();
          }
        } else {
          set(_state => ({ ..._state, isPopoverOpen: true }));
        }
        break;

      default:
        break;
    }
  };

  const handleBlur = () => {
    // requestAnimationFrame give time to process
    // the element that has received the click event
    // via document.activeElement instead of returning
    // the body element automatically
    window.requestAnimationFrame(() => {
      if (
        $refListBoxContainer &&
        $refListBoxContainer.current &&
        !$refListBoxContainer.current.contains(document.activeElement)
      ) {
        close();
      }
    });
  };

  useEffect(() => {
    const filterInput = $refListBoxFilterInput.current;
    const optionsContainer = $refListBoxContainer.current;
    if (state.isPopoverOpen) {
      if (hasFilter) {
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
        optionsContainer.focus();
      }
      set({ ...state, triggerWidth: $refListBoxTrigger.current.offsetWidth, hasPopupOpened: true });
    } else if (state.hasPopupOpened) {
      $refListBoxTrigger.current.focus();
    }
  }, [state.isPopoverOpen]);

  useEffect(() => {
    set({ ...state, options: memoizedOptions, groups: memoizedGroups });
  }, [listBoxOptions]);

  useEffect(() => {
    if (state.isPopoverOpen && state.options[state.activeOption]) {
      const parentOffsetTop = $refListBox.current.offsetTop;
      const $option = document.getElementById(state.options[state.activeOption].id);
      if ($option) {
        const optionOffsetTop = $option.offsetTop;
        let offsetTop = optionOffsetTop - parentOffsetTop;
        if (state.activeOption === 0) {
          offsetTop = 0;
        }
        $refListBox.current.scrollTo(0, offsetTop - 10);
      }
    }
  }, [state.activeOption]);

  useEffect(() => {
    const $triggerRef = $refListBoxTriggerContainer.current;

    if ($refListBoxTriggerContainer.current) {
      set({
        ...state,
        triggerWidth: $triggerRef.offsetWidth,
      });
    }

    const handleResize = () => {
      set(_state => {
        return { ..._state, triggerWidth: $triggerRef.offsetWidth };
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [$refListBoxTriggerContainer.current]);

  return {
    handleBlur,
    handleClickListBoxButton,
    handleClickListBoxIsMultiAccept,
    handleClickListBoxIsMultiCancel,
    handleClickListBoxOption,
    handleKeyDownListBoxContainer,
    set,
    state,
  };
}
