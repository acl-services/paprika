/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
export default function isDescendant(el, parentId) {
  let isChild = false;

  if (el.getAttribute("data-pka-anchor") === parentId) {
    // is this the element itself?
    isChild = true;
  }

  while ((el = el.parentNode)) {
    if (el.getAttribute && el.getAttribute("data-pka-anchor") == parentId) {
      isChild = true;
    }
  }

  return isChild;
}
