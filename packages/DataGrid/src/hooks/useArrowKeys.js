import React from "react";
import nanoid from "nanoid";
import isDevEnv from "@paprika/helpers/lib/isDevEnv";

const getDataCell = event => {
  let dataCell = event.target.dataset.cell;
  if (!dataCell) {
    dataCell = event.target.parentElement.dataset.cell;
  }
  return dataCell;
};

export function timeDiff(t1, t2) {
  if (isDevEnv()) {
    console.log(`%c diff: ${t2 - t1}`, "color: yellow; background: #333;");
  }
}

export default function useArrowKeys({ refGrid, refContainer, columnCount, rowCount, scrollBarWidth }) {
  const [gridId] = React.useState(() => `PKA${nanoid()}`);
  const refContainerBoundClientRect = React.useRef(null);
  const refScroll = React.useRef(null);
  const refPrevCell = React.useRef(null);
  const refHasHorizontalScrollBar = React.useRef(false);

  const cell = React.useRef(null);
  const prevCell = React.useRef(null);

  function $getCell({ refContainer, gridId, cell }) {
    return refContainer.current.querySelector(
      `[data-cell='${gridId}.${cell.current.columnIndex}.${cell.current.rowIndex}']`
    );
  }

  function setRefPrevCell() {
    refPrevCell.current = $getCell({ refContainer, gridId, cell });
  }

  const setHighlight = React.useCallback(() => {
    if (cell && cell.current && refGrid && refGrid.current) {
      const $cell = $getCell({ refContainer, gridId, cell });

      if ($cell) {
        const classNameStr = "grid--is-active";

        const $withClassName = refContainer.current.querySelector(`.${classNameStr}`);
        if ($withClassName) {
          $withClassName.classList.toggle(classNameStr);
        }

        $cell.classList.toggle(classNameStr);
      }
    }
  }, [gridId, refContainer, refGrid]);

  function focus($cell) {
    window.requestAnimationFrame(() => {
      if (refPrevCell.current) {
        refPrevCell.current.children[1].tabIndex = "-1";
      }

      const $gridCell = $cell.children[1];
      $gridCell.tabIndex = 0;
      $gridCell.focus();
    });
  }

  function scrollToTheBottom() {
    const $cell = $getCell({ refContainer, gridId, cell });
    refScroll.current.scrollTo(refScroll.current.scrollLeft, refScroll.current.scrollHeight);
    focus($cell);
  }

  // This handle the cases where the Grid needs to scroll to a
  // new position outside of refContainer's boundaries
  function scroll(columnIndex, rowIndex) {
    const t1 = performance.now();
    const $cell = $getCell({ refContainer, gridId, cell });

    const cellBoundClientRect = $cell.getBoundingClientRect();
    const scrollbarThickness = refHasHorizontalScrollBar.current ? scrollBarWidth : 0;

    // left right
    if (cellBoundClientRect.right > refContainerBoundClientRect.current.right) {
      const left = refScroll.current.scrollLeft + cellBoundClientRect.width;
      focus($cell);
      refScroll.current.scrollTo(left, refScroll.current.scrollTop);
      timeDiff(t1, performance.now());
      return;
    }

    if (cellBoundClientRect.left < refContainerBoundClientRect.current.left) {
      const left = refScroll.current.scrollLeft - cellBoundClientRect.width;
      focus($cell);
      refScroll.current.scrollTo(left, refScroll.current.scrollTop);
      timeDiff(t1, performance.now());
      return;
    }

    // up and down
    if (
      (cellBoundClientRect &&
        refContainerBoundClientRect.current &&
        cellBoundClientRect.bottom > refContainerBoundClientRect.current.height) ||
      cellBoundClientRect.y < refContainerBoundClientRect.current.y
    ) {
      if (cellBoundClientRect.bottom > refContainerBoundClientRect.current.bottom) {
        const top =
          refScroll.current.scrollTop +
          scrollbarThickness +
          cellBoundClientRect.bottom -
          refContainerBoundClientRect.current.bottom;

        /**
           on last row scroll to the bottom in case we have custom content like a load more button
          */

        if (rowIndex + 1 === rowCount) {
          scrollToTheBottom();
          focus($cell);
          return;
        }

        // adjust the next element to fit exactly inside of the container so the next element will scroll exactly the height
        // of the cell
        const bottomGap = cellBoundClientRect.bottom - refContainerBoundClientRect.current.bottom;
        if (bottomGap > 0) {
          refScroll.current.scrollTo(refScroll.current.scrollLeft, refScroll.current.scrollTop + bottomGap);

          focus($cell);
          timeDiff(t1, performance.now());
          return;
        }

        refScroll.current.scrollTo(refScroll.current.scrollLeft, top);
        focus($cell);
        return;
      }

      if (cellBoundClientRect.top < refContainerBoundClientRect.current.top) {
        const topGap = refContainerBoundClientRect.current.top - cellBoundClientRect.top;
        if (topGap > 0) {
          refScroll.current.scrollTo(refScroll.current.scrollLeft, refScroll.current.scrollTop - topGap);

          focus($cell);
          timeDiff(t1, performance.now());
          return;
        }

        refScroll.current.scrollTo(
          refScroll.current.scrollLeft,
          refScroll.current.scrollTop - topGap - scrollbarThickness - cellBoundClientRect.height
        );

        focus($cell);
        timeDiff(t1, performance.now());
        return;
      }
    }

    focus($cell);
    timeDiff(t1, performance.now());
  }

  function toCellState(column, index) {
    return {
      columnIndex: Number.parseInt(column, 10),
      rowIndex: Number.parseInt(index, 10),
    };
  }

  // This in charge of highlight and assigned the cell while using the keyboard
  const handleKeyDown = event => {
    event.preventDefault();

    const keyboardKeys = {
      ArrowUp: () => {
        const columnIndex = cell.current.columnIndex;
        const rowIndex = cell.current.rowIndex;
        const nextRowIndex = Number.parseInt(rowIndex, 10) - 1;
        if (nextRowIndex >= 0) {
          cell.current = toCellState(columnIndex, nextRowIndex);
          setHighlight();
          setRefPrevCell();
          scroll(0, nextRowIndex);
        }
      },
      ArrowRight: () => {
        const columnIndex = cell.current.columnIndex;
        const rowIndex = cell.current.rowIndex;
        const nextColumnIndex = Number.parseInt(columnIndex, 10) + 1;
        if (nextColumnIndex < columnCount) {
          cell.current = toCellState(nextColumnIndex, rowIndex);
          setHighlight();
          setRefPrevCell();
          scroll(nextColumnIndex, 0);
          if (rowIndex + 1 === rowCount) {
            scrollToTheBottom();
          }
        }
      },
      ArrowDown: () => {
        if (cell === null) return;

        const columnIndex = cell.current.columnIndex;
        const rowIndex = cell.current.rowIndex;
        const nextRowIndex = Number.parseInt(rowIndex, 10) + 1;
        if (nextRowIndex < rowCount) {
          cell.current = toCellState(columnIndex, nextRowIndex);
          setHighlight();
          setRefPrevCell();
          scroll(0, nextRowIndex);
        }
      },
      ArrowLeft: () => {
        const columnIndex = cell.current.columnIndex;
        const rowIndex = cell.current.rowIndex;
        const nextColumnIndex = Number.parseInt(columnIndex, 10) - 1;
        if (nextColumnIndex >= 0) {
          cell.current = toCellState(nextColumnIndex, rowIndex);
          setHighlight();
          setRefPrevCell();
          scroll(nextColumnIndex, 0);
          if (rowIndex + 1 === rowCount) {
            scrollToTheBottom();
          }
        }
      },
    };

    if (event.key in keyboardKeys) {
      if (!cell) {
        return;
      }

      prevCell.current = cell.current;
      keyboardKeys[event.key](getDataCell(event));
    }
  };

  React.useEffect(() => {
    const handleClick = event => {
      const dataCell = getDataCell(event);

      if (!dataCell) return;

      const [, columnIndex, rowIndex] = dataCell.split(".");

      cell.current = toCellState(columnIndex, rowIndex);
      setHighlight();

      const $cell = event.target.hasAttribute("data-cell") ? event.target : event.target.parentElement;
      focus($cell);
    };

    const ref = refContainer.current;
    ref.addEventListener("click", handleClick);

    return () => {
      ref.removeEventListener("click", handleClick);
    };
  }, [gridId, refContainer, setHighlight]);

  React.useEffect(() => {
    refContainerBoundClientRect.current = refContainer.current.querySelector(`.grid-${gridId}`).getBoundingClientRect();
    refScroll.current = refContainer.current.querySelector(`.grid-${gridId} [role="row"]`).parentElement;
  }, [gridId, refContainer]);

  React.useEffect(() => {
    refHasHorizontalScrollBar.current = refScroll.current.scrollWidth > refScroll.current.clientWidth;
  }, [refScroll]);

  return { cell, prevCell, handleKeyDown, gridId };
}
