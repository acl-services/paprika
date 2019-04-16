import uuidv4 from "uuid/v4";

const listBoxId = `listBoxId_${uuidv4()}`;

export function getDOMAttributesForListBoxContainer() {
  return { tabIndex: "-1" };
}

export function getDOMAttributesForListBox(state) {
  // NOTE: replace this with L10n component
  let activedescendant = "none";
  const { activeOption } = state;

  if (activeOption && activeOption < Object.keys(state.options).length) {
    const { id } = state.options[activeOption];
    if (id) {
      activedescendant = id;
    }
  }

  return {
    "aria-activedescendant": activedescendant,
    "aria-labelledby": "listbox-value",
    id: listBoxId,
    role: "listbox",
  };
}

export const getA11yAttributesForOption = isSelected => {
  const a11yIsSelected = { "aria-selected": `${isSelected ? "true" : "false"}` };
  return { role: "option", ...a11yIsSelected };
};

export function getDOMAttributesForListBoxButton() {
  return {
    "aria-haspopup": "popup-picker",
    "aria-labelledby": "ccc listBox-button",
    id: listBoxId,
    type: "button",
  };
}
