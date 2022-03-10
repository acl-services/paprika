export default function getActiveElement(rootElement = document) {
  const activeElement = rootElement.activeElement;
  if (!activeElement) return null;

  const shadowRoot = activeElement.shadowRoot;

  return shadowRoot ? getActiveElement(shadowRoot) : activeElement;
}
