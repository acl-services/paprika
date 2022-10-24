export function isSelected({ $$key, selectedOptions, browserKey, isRootListBox }) {
  let key = browserKey;
  if (isRootListBox) {
    key = "root";
  }

  if (key in selectedOptions) {
    return selectedOptions[key].some(option => option.$$key === $$key);
  }

  return false;
}

export function isSelectable({ hasOptions, isParentSelectable }) {
  if (isParentSelectable !== null) {
    return !isParentSelectable;
  }

  return hasOptions;
}
