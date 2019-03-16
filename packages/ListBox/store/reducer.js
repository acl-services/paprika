import * as actionTypes from "./actionTypes";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case actionTypes.closePopover:
      return {
        ...state,
        filteredOptions: [],
        isPopoverOpen: false,
      };

    case actionTypes.openPopover:
      return {
        ...state,
        isPopoverOpen: true,
      };

    case actionTypes.togglePopover:
      return {
        ...state,
        isPopoverOpen: !state.isPopoverOpen,
      };

    case actionTypes.setActiveOption:
      return {
        ...state,
        activeOption: payload.activeOptionIndex,
        isPopoverOpen: payload.isPopoverOpen,
        shouldListBoxContentScroll: true,
      };

    case actionTypes.setOptionOnSingleSelection: {
      state.onChange(payload.activeOptionIndex, state.options);

      return {
        ...state,
        activeOption: payload.activeOptionIndex,
        selectedOptions: [payload.activeOptionIndex],
        isPopoverOpen: payload.isPopoverOpen,
        shouldListBoxContentScroll: true,
        lastActiveOptionIndexAffected: [payload.activeOptionIndex],
      };
    }
    case actionTypes.setOptionOnMultipleSelection: {
      const selectedOptionsArray = state.selectedOptions.slice();

      if (selectedOptionsArray.includes(payload.activeOptionIndex)) {
        const index = selectedOptionsArray.indexOf(payload.activeOptionIndex);
        selectedOptionsArray.splice(index, 1);
        state.onChange(selectedOptionsArray, state.options, payload.activeOptionIndex, "removed");
      } else {
        selectedOptionsArray.push(payload.activeOptionIndex);
        state.onChange(selectedOptionsArray, state.options, payload.activeOptionIndex, "added");
      }

      return {
        ...state,
        isPopoverOpen: true,
        activeOption: payload.activeOptionIndex,
        selectedOptions: selectedOptionsArray,
        shouldListBoxContentScroll: false,
        lastActiveOptionIndexAffected: [payload.activeOptionIndex],
      };
    }

    case actionTypes.applyFilter: {
      return {
        ...state,
        filteredOptions: payload.filteredOptions,
        hasNoResults: payload.hasNoResults,
        activeOption: 0,
      };
    }

    case actionTypes.setTriggerWidth: {
      return {
        ...state,
        triggerWidth: payload,
      };
    }

    case actionTypes.setHasPopupOpened: {
      return {
        ...state,
        hasPopupOpened: payload,
      };
    }

    case actionTypes.toggleSelectOptionsByGroup: {
      const isSelected = state.selectedOptions.includes(payload.index);
      let selectedOptions = [];

      if (isSelected) {
        selectedOptions = state.selectedOptions.slice(0);

        selectedOptions = selectedOptions
          .filter(index => state.options[index].groupTitle !== payload.group)
          .map(index => Number.parseInt(index, 10));

        const indexGroupToRemove = selectedOptions.indexOf(payload.index);
        selectedOptions.splice(indexGroupToRemove, 1);

        state.onChange(selectedOptions, state.options, payload.index, "removed");
      } else {
        selectedOptions = Object.keys(state.options)
          .filter(key => state.options[key].groupTitle === payload.group)
          .map(index => Number.parseInt(index, 10));

        state.onChange(selectedOptions, state.options, payload.index, "added");

        selectedOptions.push(payload.index);

        if (state.selectedOptions.length) {
          selectedOptions = [...state.selectedOptions.slice(), ...selectedOptions];
        }
      }

      return {
        ...state,
        activeOption: payload.index,
        selectedOptions: [...new Set(selectedOptions)], // remove duplicated
      };
    }

    case actionTypes.updateOptions: {
      return {
        ...state,
        options: payload,
      };
    }

    case actionTypes.unselectOptions: {
      if (!Array.isArray(payload)) {
        throw Error("unselectOptions action expect an array as a payload");
      }

      return {
        ...state,
        selectedOptions: state.selectedOptions.filter(index => !payload.includes(index)),
        lastActiveOptionIndexAffected: payload,
      };
    }

    case actionTypes.hideOptions: {
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

    case actionTypes.unhideOptions: {
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

    case actionTypes.clear: {
      return {
        ...state,
        selectedOptions: [],
      };
    }

    case actionTypes.reset: {
      return {
        ...state.originalState,
        originalState: state.originalState,
      };
    }

    default:
      return state;
  }
}
