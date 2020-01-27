import React from "react";
import PropTypes from "prop-types";
import * as styled from "../../DataGrid.styles";

const propTypes = {
  style: PropTypes.shape({}).isRequired,
  gridId: PropTypes.string.isRequired,
  columnIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  column: PropTypes.shape({ cellProps: PropTypes.func, cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]) })
    .isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  a11yText: PropTypes.string.isRequired,
};

const Cell = React.forwardRef((props, ref) => {
  const { style, gridId, columnIndex, rowIndex, column, data, a11yText } = props;
  const [isActiveCell, setActiveCell] = React.useState(false);

  function handleIsActiveCell(value) {
    setActiveCell(() => value);
  }

  React.useImperativeHandle(ref, () => ({
    isActiveCell: cell => {
      handleIsActiveCell(cell);
    },
  }));

  return (
    <styled.Cell ref={ref} tabIndex={-1} style={style} data-cell={`${gridId}.${columnIndex}.${rowIndex}`}>
      <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
      <styled.InnerCell {...column.cellProps({ row: data[rowIndex], rowIndex, columnIndex })} aria-hidden="true">
        {typeof column.cell === "function"
          ? column.cell({ row: data[rowIndex], rowIndex, columnIndex, isActiveCell })
          : data[rowIndex][column.cell]}
      </styled.InnerCell>
    </styled.Cell>
  );
});

Cell.propTypes = propTypes;

export default Cell;
