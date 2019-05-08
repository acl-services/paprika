import useListBox from "../useListBox";
import { getNextOptionActiveIndexLooping } from "../components/Options/helpers/options";

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
        shouldContentScroll: true,
      };
    }

    case useListBox.types.selectSingleOption: {
      let isPopoverOpen = payload.isPopoverOpen;
      if (state.hasFooter) {
        isPopoverOpen = true;
      }

      let options = null;
      if (state.hideOptionOnSelected) {
        options = { ...state.options };
        options[payload.activeOptionIndex].isHidden = true;
      }

      return {
        ...state,
        ...options,
        onChangeFn: payload.onChangeFn,
        activeOption: state.hideOptionOnSelected ? getNextOptionActiveIndexLooping(state) : payload.activeOptionIndex,
        isPopoverOpen,
        selectedOptions: [payload.activeOptionIndex],
        shouldContentScroll: true,
      };
    }

    case useListBox.types.selectMultipleOption: {
      const selectedOptionsArray = state.selectedOptions.slice();
      const { activeOptionIndex } = payload;

      // handle hide options
      let options = null;
      if (state.hideOptionOnSelected) {
        options = { ...state.options };
        options[activeOptionIndex].isHidden = true;
      } else {
        options = state.options;
      }

      if (selectedOptionsArray.includes(activeOptionIndex)) {
        const index = selectedOptionsArray.indexOf(activeOptionIndex);
        selectedOptionsArray.splice(index, 1);
      } else {
        selectedOptionsArray.push(activeOptionIndex);
      }

      return {
        ...state,
        activeOption: state.hideOptionOnSelected ? getNextOptionActiveIndexLooping(state) : activeOptionIndex,
        isPopoverOpen: true,
        onChangeFn: payload.onChangeFn,
        options,
        selectedOptions: selectedOptionsArray,
        shouldContentScroll: false,
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
        noResultsFound: payload.noResultsFound,
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
      return {
        ...state,
        activeOption: null,
        isPopoverOpen: (payload && payload.isPopoverOpen) || false,
        onChangeFn: payload && payload.onChangeFn ? payload.onChangeFn : null,
        selectedOptions: [],
      };
    }

    case useListBox.types.reset: {
      return {
        ...state.originalState,
        isPopoverOpen: false,
        onChangeFn: payload && payload.onChangeFn ? payload.onChangeFn : null,
        originalState: state.originalState,
      };
    }

    case useListBox.types.accept: {
      const selectedOptions = state.selectedOptions.slice(0);
      return {
        ...state,
        isPopoverOpen: false,
        selectedOptions,
        lastKnownSelectedOptions: selectedOptions,
        onChangeFn: payload.onChangeFn,
      };
    }

    case useListBox.types.cancel: {
      return {
        ...state,
        isPopoverOpen: false,
        onChangeFn: payload && payload.onChangeFn ? payload.onChangeFn : null,
        selectedOptions: state.lastKnownSelectedOptions.slice(0),
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
