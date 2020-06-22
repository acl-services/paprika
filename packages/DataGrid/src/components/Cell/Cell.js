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
  /** Define the look for borders in the table */
  borderType: PropTypes.oneOf(["grid", "empty", "horizontal", "vertical"]).isRequired,
};

export default function Cell(props) {
  const { style, gridId, columnIndex, rowIndex, column, data, a11yText, hasZebraStripes, borderType } = props;

  const rowIndexInt = Number.parseInt(rowIndex, 10);
  const columnIndexInt = Number.parseInt(columnIndex, 10);

  const options = {
    row: data[rowIndex],
    rowIndex: rowIndexInt,
    columnIndex: columnIndexInt,
    attrs: {
      "data-row-index": rowIndexInt,
      "data-column-index": columnIndexInt,
    },
  };

  const cellProps = typeof column.cellProps === "function" ? column.cellProps(options) : {};

  return (
    <sc.Cell
      borderType={borderType}
      data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
      hasZebraStripes={hasZebraStripes}
      rowIndex={rowIndex}
      style={style}
      tabIndex={-1}
    >
      <sc.GridCell role="gridcell">{a11yText}</sc.GridCell>
      <sc.InnerCell {...cellProps} aria-hidden="true" {...options.attrs}>
        {typeof column.cell === "function" ? column.cell(options) : data[rowIndex][column.cell]}
      </sc.InnerCell>
    </sc.Cell>
  );
}

Cell.propTypes = propTypes;
