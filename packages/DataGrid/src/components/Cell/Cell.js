import React from "react";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";
import * as styled from "../../DataGrid.styles";

const propTypes = {
  a11yText: PropTypes.string.isRequired,
  column: PropTypes.shape({ cellProps: PropTypes.func, cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]) })
    .isRequired,
  columnIndex: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  gridId: PropTypes.string.isRequired,
  rowIndex: PropTypes.number.isRequired,
  style: PropTypes.shape({}).isRequired,
};

const Cell = React.forwardRef((props, ref) => {
  const { style, gridId, columnIndex, rowIndex, column, data, a11yText } = props;
  const [isActiveCell, setIsActiveCell] = React.useState(false);
  const [isActiveRow, setIsRowActive] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    isActiveCell: isActive => {
      console.log(`>>>>> useImperativeHandle: isActiveCell(${isActive})`);
      setIsActiveCell(() => isActive);
    },
    highlightOnRow: _rowIndex => {
      setIsRowActive(() => {
        return Number.parseInt(_rowIndex, 10) === rowIndex;
      });
    },
    deemphasizeOnrow: _rowIndex => {
      setIsRowActive(() => {
        return !Number.parseInt(_rowIndex, 10) === rowIndex;
      });
    },
    getIndexes: () => {
      return { rowIndex, columnIndex };
    },
  }));

  const options = {
    row: data[rowIndex],
    rowIndex,
    columnIndex,
    isActiveCell,
    isActiveRow,
    attrs: {
      "data-row-index": rowIndex,
      "data-column-index": columnIndex,
    },
  };

  return (
    <styled.Cell
      ref={ref}
      tabIndex={-1}
      style={{ ...style, background: `${isActiveRow ? tokens.color.blackLighten80 : tokens.color.white}` }}
      data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
    >
      <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
      <styled.InnerCell
        {...column.cellProps(options)}
        aria-hidden="true"
        {...options.attrs}
        className={`${gridId}_cell`}
      >
        {typeof column.cell === "function" ? column.cell(options) : data[rowIndex][column.cell]}
      </styled.InnerCell>
    </styled.Cell>
  );
});

Cell.propTypes = propTypes;

export default Cell;
