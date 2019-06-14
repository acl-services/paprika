export default function isElementContainsFocus(element) {
  if (document.activeElement === element) return true;
  return element.contains(document.activeElement);
}
