export function getDOMAttributesForListBox({ idListBox, refLabel, activeOption, isInline, isMulti, options }) {
  let activedescendant = "";

  if (activeOption && activeOption < Object.keys(options).length) {
    const { id } = options[activeOption];
    if (id) {
      activedescendant = id;
    }
  }
  const bestLabel =
    refLabel && refLabel.current ? `${refLabel.current.getAttribute("id")} ${idListBox}__label` : `${idListBox}__label`;

  return {
    "aria-activedescendant": activedescendant,
    "aria-labelledby": bestLabel,
    "aria-multiselectable": isMulti ? "true" : null,
    id: isInline ? idListBox : `${idListBox}__content`,
  };
}

export const getA11yAttributesForOption = isSelected => {
  const a11yIsSelected = { "aria-selected": `${isSelected ? "true" : "false"}` };
  return { role: "option", ...a11yIsSelected };
};

export const getDOMAttributesForListBoxButton = ({ idListBox, idFormLabel, isOpen }) => ({
  "aria-controls": `${idListBox}__content`,
  "aria-haspopup": true,
  "aria-expanded": isOpen,
  "aria-labelledby": idFormLabel ? `${idFormLabel} ${idListBox}__label` : null,
  id: idListBox,
});
