/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */
function getAttributeValue(el, attr) {
  return el.getAttribute(attr);
}

function hasElementAttributeValue(el, attr, parentAttrValue) {
  return el.getAttribute && getAttributeValue(el, attr) === parentAttrValue;
}

export default function isDescendant(el, parentAttrValue, attr) {
  // let isChild = false;

  // if (hasElementAttributeValue(el, attr, parentAttrValue)) {
  // is this the element itself?
  let isChild = hasElementAttributeValue(el, attr, parentAttrValue);
  // }

  // if (!isChild) {
  while (!isChild && (el = el.parentNode)) {
    isChild = hasElementAttributeValue(el, attr, parentAttrValue);
  }
  // }

  return isChild;
}
