const isElementContainsFocus = element => {
  if (document.activeElement === element) return true;
  return element.contains(document.activeElement);
};

export default isElementContainsFocus;
