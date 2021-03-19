/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
export default function isDescendant(el, attr, value) {
  const doesElementHaveAttribute = el => el?.getAttribute(attr) === value;
  let isChild = doesElementHaveAttribute(el);
  while (!isChild && (el = el.parentNode)) {
    isChild = doesElementHaveAttribute(el);
  }
  return isChild;
}
