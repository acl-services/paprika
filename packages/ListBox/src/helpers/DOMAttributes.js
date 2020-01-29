export function getDOMAttributesForListBoxContainer({ isInline = false } = {}) {
  const tabIndex = isInline ? "0" : "-1";
  return { tabIndex };
}

export function getDOMAttributesForListBox(state) {
  let activedescendant = "";
  const { activeOption } = state;

  if (activeOption && activeOption < Object.keys(state.options).length) {
    const { id } = state.options[activeOption];
    if (id) {
      activedescendant = id;
    }
  }
  const idListBox = state.idListBox;

  return {
    "aria-activedescendant": activedescendant,
    "aria-labelledby": `${idListBox}__button`,
    id: idListBox,
    role: "listbox",
  };
}

export const getA11yAttributesForOption = isSelected => {
  const a11yIsSelected = { "aria-selected": `${isSelected ? "true" : "false"}` };
  return { role: "option", ...a11yIsSelected };
};

export function getDOMAttributesForListBoxButton(idListBox) {
  return function innerFunction() {
    return {
      id: `${idListBox}__button`,
      type: "button",
    };
  };
}
