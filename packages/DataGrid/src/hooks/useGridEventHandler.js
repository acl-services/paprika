import React from "react";
import nanoid from "nanoid";
import isDevEnv from "@paprika/helpers/lib/isDevEnv";
import "@paprika/helpers/lib/dom/closest";

const getDataCell = event => {
  const $cell = event.target.closest("[data-cell]");
  return $cell && $cell.dataset.cell;
};

export function timeDiff(t1, t2) {
  if (isDevEnv()) {
    console.log(`%c diff: ${t2 - t1}`, "color: yellow; background: #333;");
  }
}

export default function useGridEventHandler({
  columnCount,
  onChangeActiveCell,
  onEnter,
  onKeyDown,
  onSpaceBar,
  onShiftSpaceBar,
  onClick,
  refContainer,
  refGrid,
  rowCount,
  scrollBarWidth,
  stickyColumnsIndexes,
}) {
  const [gridId] = React.useState(() => `PKA${nanoid()}`);
  const refContainerBoundClientRect = React.useRef(null);
  const refScroll = React.useRef(null);
  const refPrevCell = React.useRef(null);
  const refHasHorizontalScrollBar = React.useRef(false);

  const cell = React.useRef(null);
  const prevCell = React.useRef(null);

  const $getCell = React.useCallback(() => {
    if (!refContainer.current && cell !== null) return;

    return refContainer.current.querySelector(
      `[data-cell='${gridId}.${cell.current.columnIndex}.${cell.current.rowIndex}']`
    );
  }, [gridId, refContainer]);

  function setRefPrevCell() {
    refPrevCell.current = $getCell();
  }

  const setHighlight = React.useCallback(() => {
    if (cell && cell.current && refGrid && refGrid.current) {
      const $cell = $getCell();

      if ($cell) {
        const classNameStr = "grid--is-active";

        const $withClassName = refContainer.current.querySelector(`.${classNameStr}`);
        if ($withClassName) {
          $withClassName.classList.toggle(classNameStr);
        }

        $cell.classList.toggle(classNameStr);
      }
    }
  }, [$getCell, refContainer, refGrid]);

  function focus($cell) {
    window.requestAnimationFrame(() => {
      const $prev = refPrevCell.current;
      if (!$cell) return;

      if ($prev) {
        $prev.querySelector("[role=gridcell]").tabIndex = "-1";
      }

      if ($cell.hasAttribute("data-cell")) {
        const $a11Txt = $cell.querySelector("[role=gridcell]");
        $a11Txt.tabIndex = 0;
        $a11Txt.focus();
        return;
      }

      const $gridCell = $cell.closest("[data-cell]");
      const $a11Txt = $gridCell.querySelector("[role=gridcell]");
      $a11Txt.tabIndex = 0;
      $a11Txt.focus();
    });
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
    const t1 = performance.now();
    const $cell = $getCell();

    if (!$cell) return;

    const cellBoundClientRect = $cell.getBoundingClientRect();
    const scrollbarThickness = refHasHorizontalScrollBar.current ? scrollBarWidth : 0;

    // left right
    if (cellBoundClientRect.right > refContainerBoundClientRect.current.right) {
      const left = refScroll.current.scrollLeft + cellBoundClientRect.width;

      refScroll.current.scrollTo(left, refScroll.current.scrollTop);

      focus($cell);
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
        // adjust the next element to fit exactly inside of the container so the next element will scroll exactly the height
        // of the cell
        const bottomGap = cellBoundClientRect.bottom - refContainerBoundClientRect.current.bottom;
        if (bottomGap > 0) {
          refScroll.current.scrollTo(
            refScroll.current.scrollLeft,
            refScroll.current.scrollTop + bottomGap + scrollBarWidth
          );

          focus($cell);
          timeDiff(t1, performance.now());
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

  function toCellState(column, row) {
    const cell = {
      columnIndex: Number.parseInt(column, 10),
      rowIndex: Number.parseInt(row, 10),
    };

    onChangeActiveCell(cell);
    return cell;
  }

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
      const nextRowIndex = Number.parseInt(rowIndex, 10) - 1;
      if (nextRowIndex >= 0) {
        $setRefs(columnIndex);
        setRefPrevCell();
        cell.current = toCellState(columnIndex, nextRowIndex);
        setHighlight();
        scroll(0, nextRowIndex);
      }
    },
    ArrowRight: () => {
      const columnIndex = cell.current.columnIndex;
      const rowIndex = cell.current.rowIndex;
      const nextColumnIndex = Number.parseInt(columnIndex, 10) + 1;

      if (nextColumnIndex < columnCount) {
        setRefPrevCell();
        cell.current = toCellState(nextColumnIndex, rowIndex);
        setHighlight();
        $setRefs(columnIndex);
        scroll(nextColumnIndex, 0);

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
      const nextRowIndex = Number.parseInt(rowIndex, 10) + 1;
      if (nextRowIndex < rowCount) {
        setRefPrevCell();
        $setRefs(columnIndex);
        cell.current = toCellState(columnIndex, nextRowIndex);
        setHighlight();
        scroll(0, nextRowIndex);
      }
    },
    ArrowLeft: () => {
      const columnIndex = cell.current.columnIndex;
      const rowIndex = cell.current.rowIndex;
      const nextColumnIndex = Number.parseInt(columnIndex, 10) - 1;
      if (nextColumnIndex >= 0) {
        setRefPrevCell();
        cell.current = toCellState(nextColumnIndex, rowIndex);
        setHighlight();
        $setRefs(columnIndex);
        scroll(nextColumnIndex, 0);
        if (rowIndex + 1 === rowCount) {
          scrollToTheBottom();
        }
      }
    },
    // keydown will not trigger spacebar, keyup will, but we want to prevent scrolling.
    " ": () => {},
  };

  // This in charge of highlight the cell but will not scroll the table in case there is overflow
  const handleKeyDown = ({ data, ColumnDefinitions }) => event => {
    onKeyDown(event);
    if (event.key in keyboardDownKeys) {
      event.preventDefault();
      if (!cell) {
        return;
      }

      keyboardDownKeys[event.key]({ data, ColumnDefinitions });
    }
  };

  const keyboardUpKeys = {
    // space bar
    " ": ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex, columnIndex, event };
      if (column.onSpaceBar !== null) {
        column.onSpaceBar(options);
        return;
      }
      return onSpaceBar && onSpaceBar(options);
    },
    Enter: ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex, columnIndex, event };
      if (column.onEnter !== null) {
        column.onEnter(options);
        return;
      }
      return onEnter && onEnter(options);
    },
    "space+shift": ({ data, ColumnDefinitions, columnIndex, rowIndex, event }) => {
      const column = ColumnDefinitions[columnIndex].props;
      const options = { row: data[rowIndex], column, rowIndex, columnIndex, event };
      if (column.onShiftSpaceBar !== null) {
        column.onShiftSpaceBar(options);
        return;
      }

      return onShiftSpaceBar && onShiftSpaceBar(options);
    },
  };

  const handleKeyUp = ({ data, ColumnDefinitions }) => event => {
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
  };

  const handleClick = ({ data, ColumnDefinitions }) => event => {
    const dataCell = getDataCell(event);

    const [, columnIndex, rowIndex] = dataCell.split(".");

    cell.current = toCellState(columnIndex, rowIndex);
    setHighlight();

    const $cell = event.target.hasAttribute("data-cell") ? event.target : event.target.parentElement;
    focus($cell);

    const column = ColumnDefinitions[columnIndex].props;
    const options = { row: data[rowIndex], column, rowIndex, columnIndex, event };
    if (column.onClick !== null) {
      column.onClick(options);
    } else {
      onClick(options);
    }
  };

  React.useLayoutEffect(() => {
    refContainerBoundClientRect.current = $getGridBoundingRect();
  }, [$getGridBoundingRect]);

  React.useLayoutEffect(() => {
    refScroll.current = $getGrid();
    if (!refScroll.current) return;
    refHasHorizontalScrollBar.current = refScroll.current.scrollWidth > refScroll.current.clientWidth;
  }, [$getGrid, refScroll]);

  function restoreHighlightFocus() {
    if (cell.current && (cell.current.columnIndex !== null && cell.current.rowIndex !== null)) {
      const $cell = $getCell();

      if (!$cell) return;
      setRefPrevCell();
      setHighlight();
      focus($cell);
    }
  }

  return { cell, prevCell, handleKeyDown, handleKeyUp, gridId, restoreHighlightFocus, handleClick };
}
