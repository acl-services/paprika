import closest from "@paprika/helpers/lib/dom/closest";
import { getCoordinatesByCellIndex } from "./getRow";

export const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

function handleArrowKeyDown({ event, onKeyDownArrow, row, refData }) {
  // wait until the next repaint and let the scroll happens with the new virtualizes subset then
  // get the value of the next loaded row.
  window.requestAnimationFrame(() => {
    onKeyDownArrow(event, refData[row]);
  });
}

const getIndex = dataTableID => (row, column) => {
  return `${dataTableID}${row}_${column}`;
};

export default function handleArrowKeys({
  activeCell,
  columnsLength,
  dataTableID,
  event,
  onKeyDownArrow,
  refData,
  setActiveCell,
}) {
  if (arrowKeys.includes(event.key)) {
    if (activeCell.index) {
      const getRootElement = nextElement => {
        return closest(nextElement, ".virtualize-rows-root");
      };
      const getNextElement = nextIndex => {
        return document.getElementById(`${nextIndex}`);
      };
      const { row, column } = getCoordinatesByCellIndex(activeCell.index);
      const createIndex = getIndex(dataTableID);

      let nextIndex = activeCell.index;
      const actions = {
        ArrowUp: () => {
          const nextRow = row - 1;

          if (nextRow <= 0) {
            const topElement = document.getElementById(nextIndex);
            const $scrollableElement = closest(topElement, ".virtualize-rows-root");
            $scrollableElement.scrollTo({
              top: 0,
            });
            return;
          }

          nextIndex = createIndex(nextRow, column); // `${dataTableID}${nextRow}_${column}`;
          const nextElement = getNextElement(nextIndex);
          const $scrollableElement = getRootElement(nextElement);
          const rect = $scrollableElement.getBoundingClientRect();
          const nextElementTop = nextElement.getBoundingClientRect().top;

          if (nextElementTop < rect.top) {
            $scrollableElement.scrollTo({
              top: $scrollableElement.scrollTop - nextElement.offsetHeight,
            });
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row: nextRow, refData });
        },
        ArrowDown: () => {
          const nextRow = row + 1;
          nextIndex = createIndex(nextRow, column); // `${dataTableID}${nextRow}_${column}`;
          const nextElement = getNextElement(nextIndex);

          // refData.current.length + 1 we are adding the header on the grid
          if (nextRow >= refData.current.length + 1) {
            return;
          }

          const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          const $scrollableElement = getRootElement(nextElement);
          const rect = $scrollableElement.getBoundingClientRect();
          const gap = rect.height + rect.top;
          const nextElementBottom = nextElement.getBoundingClientRect().bottom;

          if (nextElementBottom >= gap || nextElementBottom > viewPortHeight) {
            $scrollableElement.scrollTo({
              top: $scrollableElement.scrollTop + nextElement.offsetHeight,
            });
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row: nextRow, refData });
        },
        ArrowRight: () => {
          if (column + 1 < columnsLength) {
            nextIndex = createIndex(row, column + 1); // `${dataTableID}${row}_${column + 1}`;
            const nextElement = getNextElement(nextIndex);
            const $scrollableElement = getRootElement(nextElement);
            const rect = $scrollableElement.getBoundingClientRect();
            const nextElementRight = nextElement.getBoundingClientRect().right;

            if (nextElementRight > rect.right) {
              $scrollableElement.scrollTo({
                left: $scrollableElement.scrollLeft + nextElement.offsetWidth,
              });
            }
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row, refData });
        },
        ArrowLeft: () => {
          if (column - 1 >= 0) {
            nextIndex = createIndex(row, column - 1); // `${dataTableID}${row}_${column - 1}`;
            const nextElement = getNextElement(nextIndex);
            const $scrollableElement = getRootElement(nextElement);
            const rect = $scrollableElement.getBoundingClientRect();
            const nextElementLeft = nextElement.getBoundingClientRect().left;

            if (nextElementLeft < rect.left) {
              $scrollableElement.scrollTo({
                left: $scrollableElement.scrollLeft - nextElement.offsetWidth,
              });
            }
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row, refData });
        },
      };

      actions[event.key]();
    }
  }
}
