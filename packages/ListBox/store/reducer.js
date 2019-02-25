import * as actionTypes from "./actionTypes";

export default function reducer(state, { type, payload }) {
  // - export const closePopover = "close popover";
  // export const openPopover = "open popover";
  // - export const setActiveOption = "set active option";
  // - export const setOptionOnMultipleSelection = "set the selected option on multiple select";
  // - export const setOptionOnSingleSelection = "set select option on single select";
  // export const toggleDisabled = "toggle disabled";
  // export const togglePopover = "toggle popover";

  switch (type) {
    case actionTypes.closePopover:
      return {
        ...state,
        filteredOptions: [],
        isPopoverOpen: false,
      };

    case actionTypes.togglePopover:
      return {
        ...state,
        isPopoverOpen: !state.isPopoverOpen,
      };

    case actionTypes.setActiveOption:
      return { ...state, activeOption: payload.activeOption };

    case actionTypes.setOptionOnSingleSelection:
      return {
        ...state,
        activeOption: payload.activeOptionIndex,
        selectedOptions: [payload.activeOptionIndex],
        isPopoverOpen: payload.isPopoverOpen,
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
      };
    }

    default:
      return state;
  }
}
