import useListBox from "../useListBox";
import handleChange from "../helpers/handleChange";
import { getNextOptionActiveIndexLooping } from "../components/Options/helpers";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case useListBox.types.closePopover:
      return {
        ...state,
        filteredOptions: [],
        isPopoverOpen: false,
      };

    case useListBox.types.openPopover:
      return {
        ...state,
        isPopoverOpen: true,
      };

    case useListBox.types.togglePopover:
      return {
        ...state,
        isPopoverOpen: !state.isPopoverOpen,
      };

    case useListBox.types.setActiveOption: {
      return {
        ...state,
        activeOption: payload.activeOptionIndex,
        isPopoverOpen: payload.isPopoverOpen,
        shouldListBoxContentScroll: true,
      };
    }

    case useListBox.types.toggleSingleSelection: {
      let isPopoverOpen = payload.isPopoverOpen;
      if (state.hasFooter) {
        isPopoverOpen = true;
      }

      let options = null;
      if (state.hideOptionOnSelected) {
        options = { ...state.options };
        options[payload.activeOptionIndex].isHidden = true;
      }

      const hasPreventDefaultOnSelect = state.options[payload.activeOptionIndex].preventDefaultOnSelect;

      if (!hasPreventDefaultOnSelect) {
        handleChange(state, payload);
      }

      return {
        ...state,
        ...options,
        activeOption: state.hideOptionOnSelected ? getNextOptionActiveIndexLooping(state) : payload.activeOptionIndex,
        selectedOptions: [payload.activeOptionIndex],
        isPopoverOpen,
        shouldListBoxContentScroll: true,
        lastActiveOptionIndexAffected: [payload.activeOptionIndex],
      };
    }

    case useListBox.types.toggleMultipleSelection: {
      const selectedOptionsArray = state.selectedOptions.slice();

      // handle hide options
      let options = null;
      if (state.hideOptionOnSelected) {
        options = { ...state.options };
        options[payload.activeOptionIndex].isHidden = true;
      }

      if (selectedOptionsArray.includes(payload.activeOptionIndex)) {
        const index = selectedOptionsArray.indexOf(payload.activeOptionIndex);
        selectedOptionsArray.splice(index, 1);
        handleChange(state, payload, selectedOptionsArray, "removed");
      } else {
        selectedOptionsArray.push(payload.activeOptionIndex);
        handleChange(state, payload, selectedOptionsArray, "added");
      }

      return {
        ...state,
        ...options,
        isPopoverOpen: true,
        activeOption: state.hideOptionOnSelected ? getNextOptionActiveIndexLooping(state) : payload.activeOptionIndex,
        selectedOptions: selectedOptionsArray,
        shouldListBoxContentScroll: false,
        lastActiveOptionIndexAffected: [payload.activeOptionIndex],
      };
    }

    case useListBox.types.applyFilter: {
      let activeOption = null;
      if (payload.filteredOptions.length === 1) {
        activeOption = payload.filteredOptions[0];
      }

      if (payload.filteredOptions.length > 1) {
        activeOption = getNextOptionActiveIndexLooping(state);
      }

      return {
        ...state,
        filteredOptions: payload.filteredOptions,
        hasNoResults: payload.hasNoResults,
        activeOption,
      };
    }

    case useListBox.types.setTriggerWidth: {
      return {
        ...state,
        triggerWidth: payload,
      };
    }

    case useListBox.types.setHasPopupOpened: {
      return {
        ...state,
        hasPopupOpened: payload,
      };
    }

    case useListBox.types.selectByGroup: {
      const groupId = payload;
      const selectedOptionsArray = Object.keys(state.options)
        .filter(
          key =>
            state.options[key].groupId === groupId &&
            !state.options[key].isGroupSelector &&
            !state.options[key].preventDefaultOnSelect
        )
        .map(key => Number.parseInt(key, 10));

      const selectedOptionsMerged = [...selectedOptionsArray, ...state.selectedOptions];

      handleChange(state, payload, selectedOptionsArray, "add:bulk");

      return {
        ...state,
        selectedGroupSelectors: [...new Set([...state.selectedGroupSelectors, groupId])],
        selectedOptions: [...new Set(selectedOptionsMerged)], // remove duplicated
      };
    }

    case useListBox.types.deselectByGroup: {
      const groupId = payload;
      const optionsToRemove = Object.keys(state.options)
        .filter(key => state.options[key].groupId === groupId && !state.options[key].isGroupSelector)
        .map(key => Number.parseInt(key, 10));

      const selectedOptionsArray = state.selectedOptions.slice(0);
      optionsToRemove.forEach(index => {
        const indexOf = selectedOptionsArray.indexOf(index);
        selectedOptionsArray.splice(indexOf, 1);
      });

      const indexOfGroupSelected = state.selectedGroupSelectors.indexOf(groupId);
      const selectedGroupSelectorsClone = state.selectedGroupSelectors.slice(0);
      selectedGroupSelectorsClone.splice(indexOfGroupSelected, 1);

      handleChange(state, payload, selectedOptionsArray, "remove:bulk");

      return {
        ...state,
        selectedGroupSelectors: selectedGroupSelectorsClone,
        selectedOptions: selectedOptionsArray, // remove duplicated
      };
    }

    case useListBox.types.updateOptions: {
      const selectedOptions = Object.keys(payload)
        .filter(key => payload[key].isSelected)
        .map(key => Number.parseInt(key, 10));

      return {
        ...state,
        options: payload,
        selectedOptions,
      };
    }

    case useListBox.types.unselectOptions: {
      if (!Array.isArray(payload)) {
        throw Error("unselectOptions action expect an array as a payload");
      }

      let options = null;
      if (state.hideOptionOnSelected) {
        options = { ...state.options };
        payload.forEach(index => {
          options[index].isHidden = false;
        });
      }

      return {
        ...state,
        ...options,
        selectedOptions: state.selectedOptions.filter(index => !payload.includes(index)),
        lastActiveOptionIndexAffected: payload,
      };
    }

    case useListBox.types.hideOptions: {
      if (!Array.isArray(payload)) {
        throw Error("hideOptions action expect an array as a payload");
      }

      const optionsClone = { ...state.options };
      payload.forEach(index => {
        optionsClone[index].isHidden = true;
      });

      return {
        ...state,
        options: optionsClone,
      };
    }

    case useListBox.types.unhideOptions: {
      if (!Array.isArray(payload)) {
        throw Error("unhideOptions action expect an array as a payload");
      }

      const optionsClone = { ...state.options };
      payload.forEach(index => {
        optionsClone[index].isHidden = false;
      });

      return {
        ...state,
        options: optionsClone,
      };
    }

    case useListBox.types.clear: {
      handleChange(state, { activeOptionIndex: 0 }, [], "clear");
      return {
        ...state,
        activeOption: null,
        isPopoverOpen: payload.isPopoverOpen,
        selectedOptions: [],
      };
    }

    case useListBox.types.reset: {
      handleChange(
        state.originalState,
        { activeOptionIndex: state.originalState.activeOption },
        state.originalState.selectedOptions,
        "reset"
      );

      return {
        ...state.originalState,
        isPopoverOpen: false,
        originalState: state.originalState,
      };
    }

    case useListBox.types.accept: {
      return {
        ...state,
        lastKnownSelectedOptions: state.selectedOptions.slice(0),
        isPopoverOpen: false,
      };
    }

    case useListBox.types.cancel: {
      return {
        ...state,
        selectedOptions: state.lastKnownSelectedOptions.slice(0),
        isPopoverOpen: false,
      };
    }

    case useListBox.types.setHeight: {
      return {
        ...state,
        height: payload,
      };
    }

    case useListBox.types.setHasFooter: {
      return {
        ...state,
        hasFooter: payload,
      };
    }

    case useListBox.types.setIsDisabled: {
      return {
        ...state,
        isDisabled: payload,
      };
    }

    default:
      return state;
  }
}
