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

    case actionTypes.setOptionOnSingleSelection:
      return {
        ...state,
        activeOption: payload.activeOptionIndex,
        selectedOptions: [payload.activeOptionIndex],
        isPopoverOpen: payload.isPopoverOpen,
        shouldListBoxContentScroll: true,
      };

    case actionTypes.setOptionOnMultipleSelection: {
      const selectedOptionsArray = state.selectedOptions.slice();

      if (selectedOptionsArray.includes(payload.activeOptionIndex)) {
        const index = selectedOptionsArray.indexOf(payload.activeOptionIndex);
        selectedOptionsArray.splice(index, 1);
      } else {
        selectedOptionsArray.push(payload.activeOptionIndex);
      }

      return {
        ...state,
        isPopoverOpen: true,
        activeOption: payload.activeOptionIndex,
        selectedOptions: selectedOptionsArray,
        shouldListBoxContentScroll: false,
      };
    }

    case actionTypes.applyGroupFilter: {
      return {
        ...state,
        filteredOptions: payload.addFilteredOptions,
        activeOption: 0,
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
      let optionsToSelect = [];

      if (isSelected) {
        optionsToSelect = Object.keys(state.options)
          .filter(key => state.options[key].groupTitle === payload.group)
          .map(index => Number.parseInt(index, 10));

        if (state.selectedOptions.length) {
          optionsToSelect = [...state.selectedOptions.slice(), ...optionsToSelect];
        }
      } else {
        optionsToSelect = state.selectedOptions
          .filter(index => state.options[index].groupTitle !== payload.group)
          .map(index => Number.parseInt(index, 10));
      }

      return {
        ...state,
        selectedOptions: optionsToSelect,
      };
    }

    default:
      return state;
  }
}
