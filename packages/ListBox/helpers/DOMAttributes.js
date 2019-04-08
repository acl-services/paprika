export function getDOMAttributesForListBoxContainer() {
  return { tabIndex: "-1" };
}

export function getDOMAttributesForListBox(state) {
  // NOTE: replace this with L10n component
  const activedescendant = state.activeOption === null ? "none" : state.options[state.activeOption].id;

  return {
    "aria-activedescendant": activedescendant,
    "aria-labelledby": "listbox-value",
    id: "popup-picker",
    role: "listbox",
  };
}

// TODO Remove after refactor of Option and Options render
// export const getDOMAttributesForListBoxOption = (index, state) => () => {
//   return index === state.activeOption
//     ? {
//         "aria-selected": "true",
//       }
//     : "";
// };

export const getA11yAttributesForOption = isSelected => {
  const a11yIsSelected = { "aria-selected": `${isSelected ? "true" : "false"}` };
  return { role: "option", ...a11yIsSelected };
};

export function getDOMAttributesForListBoxButton() {
  return {
    "aria-haspopup": "popup-picker",
    "aria-labelledby": "ccc listBox-button",
    id: "listBox-button",
    type: "button",
  };
}
