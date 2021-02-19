export function getDOMAttributesForListBoxContainer({ isInline = false } = {}) {
  const tabIndex = isInline ? "0" : "-1";
  return { tabIndex };
}

export function getDOMAttributesForListBox({ activeOption, idListBox, isInline, options, refLabel }) {
  let activedescendant = "";

  if (activeOption && activeOption < Object.keys(options).length) {
    const { id } = options[activeOption];
    if (id) {
      activedescendant = id;
    }
  }
  const bestLabel =
    refLabel && refLabel.current
      ? { "aria-label": refLabel.current.textContent }
      : { "aria-labelledby": `${idListBox}__label` };

  return {
    "aria-activedescendant": activedescendant,
    id: isInline ? idListBox : null,
    role: "listbox",
    ...bestLabel,
  };
}

export const getA11yAttributesForOption = isSelected => {
  const a11yIsSelected = { "aria-selected": `${isSelected ? "true" : "false"}` };
  return { role: "option", ...a11yIsSelected };
};

export const getDOMAttributesForListBoxButton = ({ idListBox, idFormLabel, refLabel }) => ({
  "aria-haspopup": true,
  "aria-labelledby": refLabel && refLabel.current ? `${idFormLabel} ${idListBox}` : null,
  id: idListBox,
});
