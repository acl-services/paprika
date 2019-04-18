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
        isPopoverOpen: payload.isPopoverOpen,
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
        activeOption: state.hideOptionOnSelected ? getNextOptionActiveIndexLooping(state) : payload.activeOptionIndex,
        selectedOptions: [payload.activeOptionIndex],
        isPopoverOpen,
        shouldContentScroll: true,
      };
    }

    case useListBox.types.selectMultipleOption: {
      return {
        ...state,
        activeOption: state.hideOptionOnSelected ? getNextOptionActiveIndexLooping(state) : payload.activeOptionIndex,
        isPopoverOpen: true,
        options: payload.options,
        selectedOptions: payload.selectedOptions,
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
        selectedOptions: [],
      };
    }

    case useListBox.types.reset: {
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
