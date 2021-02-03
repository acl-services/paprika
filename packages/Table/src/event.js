/* eslint-disable no-param-reassign */
import {
  addHighlightFocus,
  addHighlightIdleClass,
  removeHighlightFocus,
  removeHighlightIdleClass,
} from "./cellHighlight";

import arrows from "./arrows";

export const handleKeyDown = ({ refFocus, tableId, columnsLength, rowsLength, onFocus }) => event => {
  const arrowsFns = arrows({ refFocus, tableId, columnsLength, rowsLength, onFocus });
  if (event.key in arrowsFns) {
    event.preventDefault(); // we don't want to scroll the page on using the keys
    arrowsFns[event.key]();
  }
};

export const handleBlur = ({ refFocus, tableId, onBlur }) => () => {
  const { rowIndex, columnIndex } = refFocus.current;
  if (refFocus.current) {
    addHighlightIdleClass({ rowIndex, columnIndex }, tableId);
  }
  onBlur({ rowIndex, columnIndex, tableId });
};

export const handleFocus = ({ refFocus, tableId, onFocus }) => () => {
  removeHighlightIdleClass(tableId);

  if (refFocus.current === null) {
    addHighlightFocus({ rowIndex: 0, columnIndex: 0 }, tableId, onFocus);
    refFocus.current = { rowIndex: 0, columnIndex: 0 };
  }
};

export const handleClick = ({ refFocus, tableId, onFocus }) => event => {
  if (event.target) {
    const target = event.target;
    const { rowIndex, columnIndex } = target.dataset;

    if (rowIndex && columnIndex && refFocus.current) {
      const rowIndexInt = Number.parseInt(rowIndex, 10);
      const columnIndexInt = Number.parseInt(columnIndex, 10);

      if (rowIndexInt === refFocus.current.rowIndex && columnIndexInt === refFocus.current.columnIndex) {
        return;
      }

      addHighlightFocus({ rowIndex: rowIndexInt, columnIndex: columnIndexInt }, tableId, onFocus);

      removeHighlightFocus(
        {
          rowIndex: refFocus.current.rowIndex,
          columnIndex: refFocus.current.columnIndex,
        },
        tableId
      );

      refFocus.current = {
        rowIndex: Number.parseInt(rowIndex, 10),
        columnIndex: Number.parseInt(columnIndex, 10),
      };
    }
  }
};
