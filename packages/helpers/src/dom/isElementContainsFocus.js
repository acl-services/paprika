export default function isElementContainsFocus(element) {
  if (!element) return false;
  if (document.activeElement === element) return true;
  return element.contains(document.activeElement);
}
