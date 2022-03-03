import { getActiveElement } from "@paprika/helpers";

export default function isElementContainsFocus(element) {
  if (!element) return false;

  const activeElement = getActiveElement();
  if (activeElement === element) return true;

  return element.contains(activeElement);
}
