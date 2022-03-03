export default function getActiveElement(rootElement = document) {
  const activeElement = rootElement.activeElement;
  const shadowRoot = activeElement.shadowRoot;

  return shadowRoot ? getActiveElement(shadowRoot) : activeElement;
}
