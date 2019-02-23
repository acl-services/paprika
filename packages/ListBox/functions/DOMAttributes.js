export function getDOMAttributesForListBoxContainer() {
  return { tabIndex: "-1" };
}

export function getDOMAttributesForListBox(state) {
  return {
    "aria-activedescendant": state.options[state.activeOption].id,
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
