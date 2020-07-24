import React from "react";
import "@paprika/helpers/lib/dom/closest";

const getDataCell = event => {
  const $cell = event.target.closest("[data-pka-cell-key]");
  return $cell && $cell.dataset.pkaCellKey;
};

export const getGridRefId = ({ gridId, rowIndex, columnIndex }) => {
  return `${gridId}.${columnIndex}.${rowIndex}`;
};

function toInt(num) {
  return Number.parseInt(num, 10);
}

export default function useGridEventHandler({
  columnCount,
  onClick,
  onPressEnter,
  onKeyDown,
  onRowChecked,
  onPressShiftSpaceBar,
  onPressSpaceBar,
  refContainer,
  refGrid,
  rowCount,
  scrollBarWidth,
  stickyColumnsIndexes,
  gridId,
}) {
  const refContainerBoundClientRect = React.useRef(null);
  const refScroll = React.useRef(null);
  const refPrevCell = React.useRef(null);
  const refHasHorizontalScrollBar = React.useRef(false);

  const cell = React.useRef(null);
  const prevCell = React.useRef(null);

  const $getCell = React.useCallback(() => {
    if (!refContainer.current && cell !== null) return;

    return refContainer.current.querySelector(
      `[data-pka-cell-key='${gridId}.${cell.current.columnIndex}.${cell.current.rowIndex}']`
    );
  }, [gridId, refContainer]);

  const setRefPrevCell = React.useCallback(() => {
    refPrevCell.current = $getCell();
  }, [$getCell]);

  const setHighlight = React.useCallback(
    ({ rowIndex, columnIndex }) => {
      if (cell && cell.current && refGrid && refGrid.current) {
        const $cell = $getCell();

        if ($cell) {
          const classNameStr = "grid--is-active";

          const nextHighlight = refContainer.current.querySelector(`.${classNameStr}`);
          if (nextHighlight) {
            nextHighlight.classList.toggle(classNameStr);
          }

          $cell.classList.toggle(classNameStr);

          const event = document.createEvent("CustomEvent");
          event.initCustomEvent("dataGridCellHighlighted", false, false, { rowIndex, columnIndex });
          document.dispatchEvent(event);
        }
      }
    },
    [$getCell, refContainer, refGrid]
  );

  function focus($cell) {
    const $prev = refPrevCell.current;
    if (!$cell) return;

    if ($prev) {
      $prev.querySelector("[role=gridcell]").tabIndex = "-1";
    }

    if ($cell.hasAttribute("data-pka-cell-key")) {
      const $a11Txt = $cell.querySelector("[role=gridcell]");
      $a11Txt.tabIndex = 0;
      $a11Txt.focus();
      return;
    }

    const $gridCell = $cell.closest("[data-pka-cell-key]");
    const $a11Txt = $gridCell.querySelector("[role=gridcell]");
    $a11Txt.tabIndex = 0;
    $a11Txt.focus();
  }

  function scrollToTheBottom() {
    const $cell = $getCell();
    refScroll.current.scrollTo(refScroll.current.scrollLeft, refScroll.current.scrollHeight);

    focus($cell);
  }

  function scrollToTheRightEdge() {
    const $cell = $getCell();
    refScroll.current.scrollTo(refScroll.current.scrollWidth, refScroll.current.scrollTop);

    focus($cell);
  }

  // This is in charge of scrolling the Grid in case the content has overflow
  // it's responsible of the sticky columns as well in case include any.
  function scroll(columnIndex, rowIndex) {
    const $cell = $getCell();

    if (!$cell) return;

    const cellBoundClientRect = $cell.getBoundingClientRect();
    const scrollbarThickness = refHasHorizontalScrollBar.current ? scrollBarWidth : 0;

    // left right
    if (cellBoundClientRect.right > refContainerBoundClientRect.current.right) {
      let left = refScroll.current.scrollLeft + cellBoundClientRect.width;
      if (columnIndex + 1 >= columnCount) {
        left = refScroll.current.scrollWidth;
      }

      refScroll.current.scrollTo(left, refScroll.current.scrollTop);

      focus($cell);
      return;
    }

    if (cellBoundClientRect.left < refContainerBoundClientRect.current.left) {
      const left = refScroll.current.scrollLeft - cellBoundClientRect.width;
      focus($cell);
      refScroll.current.scrollTo(left, refScroll.current.scrollTop);

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
        // adjust the next element to fit exactly inside of the container so the next element will scroll exactly the height
        // of the cell
        const bottomGap = cellBoundClientRect.bottom - refContainerBoundClientRect.current.bottom;
        if (bottomGap > 0) {
          refScroll.current.scrollTo(
            refScroll.current.scrollLeft,
            refScroll.current.scrollTop + bottomGap + scrollBarWidth
          );

          focus($cell);
          return;
        }

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

        refScroll.current.scrollTo(refScroll.current.scrollLeft, top);

        focus($cell);
        return;
      }

      if (cellBoundClientRect.top < refContainerBoundClientRect.current.top) {
        const topGap = refContainerBoundClientRect.current.top - cellBoundClientRect.top;
        if (topGap > 0) {
          refScroll.current.scrollTo(refScroll.current.scrollLeft, refScroll.current.scrollTop - topGap);

          focus($cell);
          return;
        }

        refScroll.current.scrollTo(
          refScroll.current.scrollLeft,
          refScroll.current.scrollTop - topGap - scrollbarThickness - cellBoundClientRect.height
        );

        focus($cell);
        return;
      }
    }

    focus($cell);
  }

  const toCellState = React.useCallback((column, row) => {
    const cell = {
      columnIndex: toInt(column),
      rowIndex: toInt(row),
    };

    return cell;
  }, []);

  const $getGrid = React.useCallback(() => {
    return refContainer.current && refContainer.current.querySelector(`.grid-${gridId} [role="row"]`).parentElement;
  }, [gridId, refContainer]);

  const $getStickyColumnGrid = React.useCallback(() => {
    return (
      refContainer.current && refContainer.current.querySelector(`.${gridId}-sticky-columns [role="row"]`).parentElement
    );
  }, [gridId, refContainer]);

  const $getGridBoundingRect = React.useCallback(() => {
    return refContainer.current && refContainer.current.querySelector(`.grid-${gridId}`).getBoundingClientRect();
  }, [gridId, refContainer]);

  const $getStickyColumnGridBoundingRect = React.useCallback(() => {
    return (
      refContainer.current && refContainer.current.querySelector(`.${gridId}-sticky-columns`).getBoundingClientRect()
    );
  }, [gridId, refContainer]);

  function $setRefs(columnIndex) {
    if (stickyColumnsIndexes.includes(columnIndex)) {
      refContainerBoundClientRect.current = $getStickyColumnGridBoundingRect();
      refScroll.current = $getStickyColumnGrid();
    } else {
      refContainerBoundClientRect.current = $getGridBoundingRect();
      refScroll.current = $getGrid();
    }
  }

  const keyboardDownKeys = {
    ArrowUp: () => {
      const columnIndex = cell.current.columnIndex;
      const rowIndex = cell.current.rowIndex;
      const nextRowIndex = toInt(rowIndex) - 1;
      if (nextRowIndex >= 0) {
        $setRefs(columnIndex);
        setRefPrevCell();
        cell.current = toCellState(columnIndex, nextRowIndex);
        scroll(columnIndex, nextRowIndex);
        setHighlight({ columnIndex, rowIndex: nextRowIndex });
      }
    },
    ArrowRight: () => {
      const columnIndex = cell.current.columnIndex;
      const rowIndex = cell.current.rowIndex;
      const nextColumnIndex = toInt(columnIndex) + 1;

      if (nextColumnIndex < columnCount) {
        setRefPrevCell();
        cell.current = toCellState(nextColumnIndex, rowIndex);
        $setRefs(columnIndex);
        scroll(nextColumnIndex, 0);
        setHighlight({ columnIndex: nextColumnIndex, rowIndex });
        if (nextColumnIndex === columnCount - 1) {
          scrollToTheRightEdge();
        }

        if (rowIndex + 1 === rowCount) {
          scrollToTheBottom();
        }
      }
    },
    ArrowDown: () => {
      if (cell === null) return;

      const columnIndex = cell.current.columnIndex;
      const rowIndex = cell.current.rowIndex;
      const nextRowIndex = toInt(rowIndex) + 1;
      if (nextRowIndex < rowCount) {
        setRefPrevCell();
        $setRefs(columnIndex);
        cell.current = toCellState(columnIndex, nextRowIndex);
        setHighlight({ columnIndex, rowIndex: nextRowIndex });
        scroll(columnIndex, nextRowIndex);
      }
    },
    ArrowLeft: () => {
      const columnIndex = cell.current.columnIndex;
      const rowIndex = cell.current.rowIndex;
      const nextColumnIndex = toInt(columnIndex) - 1;
      if (nextColumnIndex >= 0) {
        setRefPrevCell();
        cell.current = toCellState(nextColumnIndex, rowIndex);
        setHighlight({ columnIndex: nextColumnIndex, rowIndex });
        $setRefs(columnIndex);
        scroll(nextColumnIndex, 0);
        if (rowIndex + 1 === rowCount) {
          scrollToTheBottom();
        }
      }
    },
    // keydown will not trigger spacebar, keyup will, but we want to prevent scrolling.
    " ": () => {},
    // we move f (checked row) because this actions doesn't open a sidepanel and we want it
    // to fire it as soon as the user click the key to have a smoother experience
    f: ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex: toInt(rowIndex), columnIndex, event };
      return onRowChecked && onRowChecked(options);
    },
  };

  // This in charge of highlight the cell but will not scroll the table in case there is overflow
  const handleKeyDown = React.useCallback(
    ({ data, ColumnDefinitions }) => event => {
      onKeyDown(event);
      if (event.key in keyboardDownKeys) {
        document.body.style.pointerEvents = "none";
        event.preventDefault();
        if (!cell) {
          return;
        }

        keyboardDownKeys[event.key]({
          ColumnDefinitions,
          columnIndex: cell.current.columnIndex,
          data,
          event,
          rowIndex: cell.current.rowIndex,
        });
      }
    },
    [keyboardDownKeys, onKeyDown]
  );

  const keyboardUpKeys = {
    // space bar
    " ": ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex: toInt(rowIndex), columnIndex, event };
      if (column.onPressSpaceBar !== null) {
        column.onPressSpaceBar(options);
        return;
      }
      return onPressSpaceBar && onPressSpaceBar(options);
    },
    Enter: ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex: toInt(rowIndex), columnIndex, event };
      if (column.onPressEnter !== null) {
        column.onPressEnter(options);
        return;
      }
      return onPressEnter && onPressEnter(options);
    },
    "space+shift": ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex: toInt(rowIndex), columnIndex, event };
      if (column.onPressShiftSpaceBar !== null) {
        column.onPressShiftSpaceBar(options);
        return;
      }

      return onPressShiftSpaceBar && onPressShiftSpaceBar(options);
    },
  };

  const handleKeyUp = React.useCallback(
    ({ data, ColumnDefinitions }) => event => {
      if (event.key in keyboardUpKeys) {
        event.preventDefault();
        if (!cell) {
          return;
        }

        if (event.shiftKey && event.key === " ") {
          keyboardUpKeys["space+shift"]({
            ColumnDefinitions,
            columnIndex: cell.current.columnIndex,
            data,
            event,
            rowIndex: cell.current.rowIndex,
          });
          return;
        }

        keyboardUpKeys[event.key]({
          ColumnDefinitions,
          columnIndex: cell.current.columnIndex,
          data,
          event,
          rowIndex: cell.current.rowIndex,
        });
      }
    },
    [keyboardUpKeys]
  );

  const handleClick = React.useCallback(
    ({ data, ColumnDefinitions }) => event => {
      const dataCell = getDataCell(event);
      if (!dataCell) {
        console.warn("dataCell value not found on getDataCell(event)", event);
        return;
      }

      const [, columnIndex, rowIndex] = dataCell.split(".");

      cell.current = toCellState(columnIndex, rowIndex);
      setHighlight({ columnIndex, rowIndex });

      const $cell = event.target.hasAttribute("data-pka-cell-key") ? event.target : event.target.parentElement;
      focus($cell);

      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex: toInt(rowIndex), columnIndex, event };
      if (column.onClick !== null) {
        column.onClick(options);
      } else {
        onClick(options);
      }
    },
    [onClick, setHighlight, toCellState]
  );

  React.useEffect(() => {
    // this helps "enable" the mouse after being disable when using the keyboard
    // search for document.body.style.pointerEvents
    function handleMouseMove() {
      document.body.style.pointerEvents = "auto";
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    refContainerBoundClientRect.current = $getGridBoundingRect();
  }, [$getGridBoundingRect]);

  React.useEffect(() => {
    refScroll.current = $getGrid();
    if (!refScroll.current) return;
    refHasHorizontalScrollBar.current = refScroll.current.scrollWidth > refScroll.current.clientWidth;
  }, [$getGrid, refScroll]);

  const restoreHighlightFocus = React.useCallback(() => {
    if (cell.current && (cell.current.columnIndex !== null && cell.current.rowIndex !== null)) {
      window.requestAnimationFrame(() => {
        const $cell = $getCell();

        if (!$cell) return;
        setRefPrevCell();
        setHighlight({ columnIndex: cell.current.columnIndex, rowIndex: cell.current.rowIndex });
        focus($cell);
      });
    }
  }, [$getCell, setHighlight, setRefPrevCell]);

  return { cell, prevCell, handleKeyDown, handleKeyUp, gridId, restoreHighlightFocus, handleClick };
}

useGridEventHandler.displayName = "useGridEventHandler";
