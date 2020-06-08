import React from "react";
import PropTypes from "prop-types";
import * as sc from "../../DataGrid.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string.isRequired,
  /**  */
  column: PropTypes.shape({ cellProps: PropTypes.func, cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]) })
    .isRequired,
  /** Position of a column in the DataGrid */
  columnIndex: PropTypes.number.isRequired,
  /** Array of data to be stored */
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  gridId: PropTypes.string.isRequired,
  /** Position of a row in the DataGrid */
  rowIndex: PropTypes.number.isRequired,
  /** Visual style of the data cell */
  style: PropTypes.shape({}).isRequired,
  /** Add an alternate background on the DataGrid's rows */
  hasZebraStripes: PropTypes.bool.isRequired,
};

const Cell = React.forwardRef((props, ref) => {
  const { style, gridId, columnIndex, rowIndex, column, data, a11yText, hasZebraStripes } = props;
  const [isActiveRow, setIsRowActive] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    highlightRow: _rowIndex => {
      setIsRowActive(() => {
        return Number.parseInt(_rowIndex, 10) === rowIndex;
      });
    },
    deemphasizeRow: _rowIndex => {
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
    isActiveRow,
    attrs: {
      "data-row-index": rowIndex,
      "data-column-index": columnIndex,
    },
  };

  const cellProps = typeof column.cellProps === "function" ? column.cellProps(options) : {};

  return (
    <sc.Cell
      tabIndex={-1}
      style={style}
      data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
      rowIndex={rowIndex}
      hasZebraStripes={hasZebraStripes}
    >
      <sc.GridCell role="gridcell">{a11yText}</sc.GridCell>
      <sc.InnerCell hasActiveRowShadow={isActiveRow} {...cellProps} aria-hidden="true" {...options.attrs}>
        {typeof column.cell === "function" ? column.cell(options) : data[rowIndex][column.cell]}
      </sc.InnerCell>
    </sc.Cell>
  );
});

Cell.propTypes = propTypes;

export default Cell;
