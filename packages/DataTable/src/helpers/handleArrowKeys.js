import closest from "@paprika/helpers/lib/dom/closest";
import getRow from "./getRow";

export const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
const isOutOfBoundaries = (nextRow, boundaries) => nextRow < boundaries.top || nextRow > boundaries.bottom;

function handleArrowKeyDown({ event, onKeyDownArrow, row, refActivePage }) {
  // wait until the next repaint and let the scroll happens with the new virtualizes subset then
  // get the value of the next loaded row.
  window.requestAnimationFrame(() => {
    const rowData = getRow({ row, refActivePage });
    onKeyDownArrow(event, rowData);
  });
}

export default function handleArrowKeys({
  activeCell,
  columnsLength,
  event,
  onKeyDownArrow,
  refActivePage,
  refVirtualizeRows,
  rowHeight,
  rowsLength,
  setActiveCell,
}) {
  if (arrowKeys.includes(event.key)) {
    if (activeCell.index) {
      const keys = activeCell.index.split("_");
      const row = Number.parseInt(keys[0], 10);
      const cell = Number.parseInt(keys[1], 10);

      const boundaries = {
        start: 0,
        end: rowsLength,
        top: refActivePage.current.from,
        bottom: refActivePage.current.to,
        left: 0,
        right: columnsLength,
      };

      let nextIndex = activeCell.index;
      const actions = {
        ArrowUp: () => {
          const { top, start } = boundaries;
          const nextRow = row - 1;

          if (nextRow < start) {
            return;
          }

          // if the user is using the keyboard and then decide to use the wheel or scroll manually the current
          // activeCell.index will be out of boundaries so we have to position it again to the first row on the new pageSize
          nextIndex = isOutOfBoundaries(row, boundaries) ? `${boundaries.top}_${cell}` : `${nextRow}_${cell}`;

          // if we are approaching to the top start scrolling
          if (nextRow <= top - 1) {
            const $scrollableElement = refVirtualizeRows.current.getScrollableElement();
            const _top = top - 1 === 0 ? 0 : top - 1;

            $scrollableElement.scrollTo({ top: rowHeight * _top });
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row: nextRow, refActivePage });
        },
        ArrowDown: () => {
          const { top, end } = boundaries;
          const nextRow = row + 1;
          const $scrollableElement = refVirtualizeRows.current.getScrollableElement();
          nextIndex = `${nextRow}_${cell}`;

          if (nextRow >= end) {
            $scrollableElement.scrollTo({ top: rowHeight * (top + 1) });
            return;
          }

          if (isOutOfBoundaries(nextRow, boundaries)) {
            nextIndex = `${boundaries.top}_${cell}`;
          }

          /*
            there are three cases where we want to scroll down:
            1.- if the user
          */
          const nextElement = document.querySelector(`[data-pka-cell-index='${nextIndex}']`);
          const nextElementBottom = nextElement.getBoundingClientRect().bottom;

          // where 32 is the header row
          const viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          const virtualizeElement = closest(nextElement, '[data-pka-anchor="virtualize-rows-root"]');
          const virtualizeRect = virtualizeElement.getBoundingClientRect();
          const virtualizeGap = virtualizeRect.height + virtualizeRect.top;

          if (nextElementBottom >= virtualizeGap || nextElementBottom > viewPortHeight) {
            $scrollableElement.scrollTo({ top: rowHeight * (top + 1) });
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row: nextRow, refActivePage });
        },
        ArrowRight: () => {
          if (cell + 1 < boundaries.right) {
            nextIndex = isOutOfBoundaries(row, boundaries) ? `${boundaries.top}_${cell + 1}` : `${row}_${cell + 1}`;
          }

          if (cell + 1 >= boundaries.right && isOutOfBoundaries(row, boundaries)) {
            nextIndex = `${boundaries.top}_${cell}`;
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row, refActivePage });
        },
        ArrowLeft: () => {
          if (cell - 1 >= boundaries.left) {
            nextIndex = isOutOfBoundaries(row, boundaries) ? `${boundaries.top}_${cell - 1}` : `${row}_${cell - 1}`;
          }

          if (cell - 1 < boundaries.left && isOutOfBoundaries(row, boundaries)) {
            nextIndex = `${boundaries.top}_${cell}`;
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
          handleArrowKeyDown({ event, onKeyDownArrow, row, refActivePage });
        },
      };

      actions[event.key]();
    }
  }
}
