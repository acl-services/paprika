export const getCellElement = ({ refTable, rowIndex, columnIndex }) => () => {
  return (
    refTable.current &&
    refTable.current.querySelector(`[data-row-index='${rowIndex}'][data-column-index='${columnIndex}']`)
  );
};

export const getBoundingClientRect = cellElement => () => {
  return cellElement().getBoundingClientRect();
};
