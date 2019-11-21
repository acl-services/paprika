export const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
const isOutOfBoundaries = (nextRow, boundaries) => nextRow < boundaries.top || nextRow > boundaries.bottom;

export default function handleArrowKeys({
  activeCell,
  columnsLength,
  event,
  refActivePage,
  refVirtualizeRows,
  rowHeight,
  rowsLength,
  setActiveCell,
  rowsOffset,
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
            // from + 3 indicate will show 4 new row once start navigating out of the area
            const _top = top - 1 === 0 ? 0 : top - 1;

            $scrollableElement.scrollTo({ top: rowHeight * _top });
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
        ArrowDown: () => {
          const { top, end, bottom } = boundaries;
          const nextRow = row + 1;
          nextIndex = `${nextRow}_${cell}`;

          if (nextRow >= end) {
            return;
          }

          if (isOutOfBoundaries(nextRow, boundaries)) {
            nextIndex = `${boundaries.top}_${cell}`;
          }

          // if we are approaching to the bottom start scrolling
          if (nextRow >= bottom - rowsOffset) {
            const $scrollableElement = refVirtualizeRows.current.getScrollableElement();
            $scrollableElement.scrollTo({ top: rowHeight * (top + 1) });
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
        ArrowRight: () => {
          if (cell + 1 < boundaries.right) {
            nextIndex = isOutOfBoundaries(row, boundaries) ? `${boundaries.top}_${cell + 1}` : `${row}_${cell + 1}`;
          }

          if (cell + 1 >= boundaries.right && isOutOfBoundaries(row, boundaries)) {
            nextIndex = `${boundaries.top}_${cell}`;
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
        ArrowLeft: () => {
          if (cell - 1 >= boundaries.left) {
            nextIndex = isOutOfBoundaries(row, boundaries) ? `${boundaries.top}_${cell - 1}` : `${row}_${cell - 1}`;
          }

          if (cell - 1 < boundaries.left && isOutOfBoundaries(row, boundaries)) {
            nextIndex = `${boundaries.top}_${cell}`;
          }

          setActiveCell(activeCell => ({ ...activeCell, index: nextIndex }));
        },
      };

      actions[event.key]();
    }
  }
}
