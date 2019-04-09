import useListBox from "../useListBox";
import handleChange from "../helpers/handleChange";
import { getNextOptionActiveIndexLooping } from "../helpers/options";

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

      handleChange(state, payload);

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

    case useListBox.types.toggleSelectOptionsByGroup: {
      const isSelected = state.selectedOptions.includes(payload.index);
      let selectedOptionsArray = [];

      if (isSelected) {
        selectedOptionsArray = state.selectedOptions.slice(0);

        selectedOptionsArray = selectedOptionsArray
          .filter(index => state.options[index].groupTitle !== payload.group)
          .map(index => Number.parseInt(index, 10));

        const indexGroupToRemove = selectedOptionsArray.indexOf(payload.index);
        selectedOptionsArray.splice(indexGroupToRemove, 1);

        handleChange(state, payload, selectedOptionsArray, "removed");
      } else {
        selectedOptionsArray = Object.keys(state.options)
          .filter(key => state.options[key].groupTitle === payload.group)
          .map(index => Number.parseInt(index, 10));

        handleChange(state, payload, selectedOptionsArray, "added");

        selectedOptionsArray.push(payload.index);

        if (state.selectedOptions.length) {
          selectedOptionsArray = [...state.selectedOptions.slice(), ...selectedOptionsArray];
        }
      }

      return {
        ...state,
        activeOption: payload.index,
        selectedOptions: [...new Set(selectedOptionsArray)], // remove duplicated
      };
    }

    case useListBox.types.updateOptions: {
      const options = payload;
      const selectedOptions = Object.keys(options)
        .filter(key => options[key].isSelected)
        .map(key => Number.parseInt(key, 10));

      return {
        ...state,
        options,
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

    default:
      return state;
  }
}
