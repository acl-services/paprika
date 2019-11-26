// https://github.com/yomotsu/dom-ponyfills/blob/master/dist/dom-ponyfills.js#L13

function matches(el, selector) {
  if (Element.prototype.matches) {
    return el.matches(selector);
  }
  if (Element.prototype.webkitMatchesSelector) {
    return el.webkitMatchesSelector(selector);
  }
  if (Element.prototype.msMatchesSelector) {
    return el.msMatchesSelector(selector);
  }
  return false;
}

export default function closest(el, selector) {
  if (Element.prototype.closest) {
    return el.closest(selector);
  }

  let parent = el.parentNode;
  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode;
  }
  return null;
}
