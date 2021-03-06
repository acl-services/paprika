import useListBox from "../useListBox";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case useListBox.types.closePopover:
      return {
        ...state,
        filteredOptions: [],
        isOpen: false,
      };

    case useListBox.types.openPopover:
      return {
        ...state,
        activeOption: state.selectedOptions.length ? state.selectedOptions[state.selectedOptions.length - 1] : null,
        isOpen: true,
      };

    case useListBox.types.togglePopover:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case useListBox.types.setActiveOption: {
      return {
        ...state,
        activeOption: payload.activeOptionIndex,
      };
    }

    case useListBox.types.selectSingleOption: {
      let isOpen = payload.isOpen;
      if (state.hasFooter) {
        isOpen = true;
      }

      return {
        ...state,
        onChangeFn: payload.onChangeFn,
        activeOption: payload.activeOptionIndex,
        isOpen,
        selectedOptions: [payload.activeOptionIndex],
      };
    }

    case useListBox.types.selectMultipleOption: {
      const { activeOptionIndex, isSelected } = payload;
      let selectedOptions = [];

      if (isSelected) {
        // remove duplicates
        selectedOptions = [...new Set([...state.selectedOptions, activeOptionIndex])];
      } else if (state.selectedOptions.includes(activeOptionIndex)) {
        selectedOptions = state.selectedOptions.slice(0);
        const index = selectedOptions.indexOf(activeOptionIndex);
        selectedOptions.splice(index, 1);
      } else {
        return { ...state };
      }

      return {
        ...state,
        activeOption: activeOptionIndex,
        onChangeFn: payload.onChangeFn,
        selectedOptions,
      };
    }

    case useListBox.types.toggleMultipleOption: {
      const selectedOptionsArray = state.selectedOptions.slice();
      const { activeOptionIndex, onChangeFn } = payload;
      if (selectedOptionsArray.includes(activeOptionIndex)) {
        const index = selectedOptionsArray.indexOf(activeOptionIndex);
        selectedOptionsArray.splice(index, 1);
      } else {
        selectedOptionsArray.push(activeOptionIndex);
      }

      return {
        ...state,
        activeOption: activeOptionIndex,
        onChangeFn,
        selectedOptions: selectedOptionsArray,
      };
    }

    case useListBox.types.hasFilter: {
      return {
        ...state,
        hasFilter: payload,
      };
    }

    case useListBox.types.applyFilter: {
      return {
        ...state,
        filteredOptions: payload.filteredOptions,
        noResultsFound: payload.noResultsFound,
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
      const { options, optionsIndex } = payload;
      const selectedOptions = Object.keys(options)
        .filter(key => options[key].isSelected)
        .map(key => Number.parseInt(key, 10));

      return {
        ...state,
        options,
        optionsIndex,
        selectedOptions,
        lastKnownSelectedOptions: [...selectedOptions],
      };
    }

    case useListBox.types.unselectOptions: {
      if (!Array.isArray(payload)) {
        throw new Error("unselectOptions action expect an array as a payload");
      }

      return {
        ...state,
        selectedOptions: state.selectedOptions.filter(index => !payload.includes(index)),
      };
    }

    case useListBox.types.hideOptions: {
      if (!Array.isArray(payload)) {
        throw new Error("hideOptions action expect an array as a payload");
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
        isOpen: (payload && payload.isOpen) || false,
        onChangeFn: payload && payload.onChangeFn ? payload.onChangeFn : null,
        selectedOptions: [],
      };
    }

    case useListBox.types.reset: {
      return {
        ...state.originalState,
        isOpen: false,
        onChangeFn: payload && payload.onChangeFn ? payload.onChangeFn : null,
        originalState: state.originalState,
      };
    }

    case useListBox.types.accept: {
      const selectedOptions = state.selectedOptions.slice(0);

      return {
        ...state,
        isOpen: false,
        selectedOptions,
        lastKnownSelectedOptions: selectedOptions,
        onChangeFn: payload.onChangeFn,
      };
    }

    case useListBox.types.cancel: {
      return {
        ...state,
        isOpen: false,
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

    case useListBox.types.cleanOnChangeFn: {
      return {
        ...state,
        onChangeFn: null,
      };
    }

    default:
      return state;
  }
}
