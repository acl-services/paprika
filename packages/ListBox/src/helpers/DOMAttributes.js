export function getDOMAttributesForListBox({ activeOption, idListBox, isInline, isMulti, options, refLabel }) {
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
    id: isInline ? idListBox : null,
  };
}

export const getA11yAttributesForOption = isSelected => {
  const a11yIsSelected = { "aria-selected": `${isSelected ? "true" : "false"}` };
  return { role: "option", ...a11yIsSelected };
};

export const getDOMAttributesForListBoxButton = ({ idListBox, idFormLabel }) => ({
  "aria-haspopup": true,
  "aria-labelledby": idFormLabel ? `${idFormLabel} ${idListBox}__label` : null,
  id: idListBox,
});
