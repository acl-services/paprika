export const keyTypes = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  FIRST: "Home",
  LAST: "End",
  SPACE: " ",
};

const itemSelector = "[role='tab']";

export function isItemDisabled(item) {
  return item.getAttribute("aria-disabled") === "true";
}

export function getItems(refList) {
  if (!refList.current) return [];
  return Array.from(refList.current.querySelectorAll(itemSelector));
}

export function getItemIndexes(refList, { hasDisabledItems } = { hasDisabledItems: true }) {
  return getItems(refList)
    .map((item, index) => (!hasDisabledItems && isItemDisabled(item) ? null : index))
    .filter(index => index !== null);
}
