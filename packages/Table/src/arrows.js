/* eslint-disable no-param-reassign */
import { removeHighlightFocus, addHighlightFocus } from "./cellHighlight";

const arrows = ({ refFocus, tableId, columnsLength, rowsLength, onFocus }) => ({
  ArrowUp() {
    if (refFocus.current !== null) {
      const { rowIndex, columnIndex } = refFocus.current;
      const nextRowIndex = rowIndex - 1;
      if (nextRowIndex >= 0 && nextRowIndex !== rowIndex) {
        removeHighlightFocus({ rowIndex, columnIndex }, tableId, onFocus);
        addHighlightFocus({ rowIndex: nextRowIndex, columnIndex }, tableId, onFocus);
        refFocus.current = { rowIndex: nextRowIndex, columnIndex };
      }
    }
  },
  ArrowDown() {
    if (refFocus.current !== null && rowsLength) {
      const { rowIndex, columnIndex } = refFocus.current;
      const nextRowIndex = rowIndex + 1;
      if (nextRowIndex <= rowsLength - 1 && nextRowIndex !== rowIndex) {
        removeHighlightFocus({ rowIndex, columnIndex }, tableId, onFocus);
        addHighlightFocus({ rowIndex: nextRowIndex, columnIndex }, tableId, onFocus);
        refFocus.current = { rowIndex: nextRowIndex, columnIndex };
      }
    }
  },
  ArrowLeft() {
    if (refFocus.current !== null) {
      const { rowIndex, columnIndex } = refFocus.current;
      const nextColumnIndex = columnIndex - 1;
      if (nextColumnIndex >= 0 && nextColumnIndex !== columnIndex) {
        removeHighlightFocus({ rowIndex, columnIndex }, tableId, onFocus);
        addHighlightFocus({ rowIndex, columnIndex: nextColumnIndex }, tableId, onFocus);
        refFocus.current = { rowIndex, columnIndex: nextColumnIndex };
      }
    }
  },
  ArrowRight() {
    if (refFocus.current !== null && columnsLength) {
      const { rowIndex, columnIndex } = refFocus.current;
      const nextColumnIndex = columnIndex + 1;
      if (nextColumnIndex <= columnsLength - 1 && nextColumnIndex !== columnIndex) {
        removeHighlightFocus({ rowIndex, columnIndex }, tableId, onFocus);
        addHighlightFocus({ rowIndex, columnIndex: columnIndex + 1 }, tableId, onFocus);
        refFocus.current = { rowIndex, columnIndex: nextColumnIndex };
      }
    }
  },
});

export default arrows;
