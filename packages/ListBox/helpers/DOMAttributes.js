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

export const getDOMAttributesForListBoxOption = (index, state) => () => {
  return index === state.activeOption
    ? {
        "aria-selected": "true",
      }
    : "";
};

export function getDOMAttributesForListBoxButton() {
  return {
    "aria-haspopup": "popup-picker",
    "aria-labelledby": "ccc listBox-button",
    id: "listBox-button",
    type: "button",
  };
}
