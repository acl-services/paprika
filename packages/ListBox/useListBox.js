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

  useEffect(() => {
    set({ ...state, options: memoizedOptions, groups: memoizedGroups });
  }, [listBoxOptions]);

  return {
    handleClickListBoxButton,
    handleClickListBoxIsMultiAccept,
    handleClickListBoxIsMultiCancel,
    handleClickListBoxOption,
    set,
    state,
  };
}
