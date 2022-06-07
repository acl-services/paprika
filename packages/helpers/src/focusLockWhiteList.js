// ignore any focusable elements in pendo container, react-focus-lock expects false to be able to ignore them
// https://github.com/theKashey/react-focus-lock#focus-fighting

const pendoContainerSelectors = ["#pendo-base", "#pendo-designer-container"];

const focusLockWhiteList = consumerDefinedWhiteList => node => {
  const pendoContainers = document.querySelectorAll(pendoContainerSelectors.join(","));
  const consumerResult = consumerDefinedWhiteList ? consumerDefinedWhiteList(node) : true;

  if (pendoContainers.length === 0) return consumerResult;

  return ![...pendoContainers].some(container => container.contains(node)) && consumerResult;
};

export default focusLockWhiteList;
