import React from "react";
import PropTypes from "prop-types";
import * as sc from "../../DataGrid.styles";
import { getGridRefId } from "../../hooks/useGridEventHandler";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string.isRequired,
  /**  */
  column: PropTypes.shape({
    cellProps: PropTypes.func,
    cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    cellPropsResetCSS: PropTypes.bool,
  }).isRequired,
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
  borderType: PropTypes.string.isRequired,
};

export default function Cell(props) {
  const [isHighlighted, setIsHighlighted] = React.useState(false);
  const { a11yText, borderType, column, columnIndex, data, gridId, hasZebraStripes, rowIndex, style } = props;

  const rowIndexInt = Number.parseInt(rowIndex, 10);
  const columnIndexInt = Number.parseInt(columnIndex, 10);

  const options = {
    row: data[rowIndex],
    rowIndex: rowIndexInt,
    columnIndex: columnIndexInt,
    isHighlighted,
    defaultCssCellStyle: sc.defaultCssCellStyle,
    attrs: {
      "data-row-index": rowIndexInt,
      "data-column-index": columnIndexInt,
    },
  };

  const cellProps = typeof column.cellProps === "function" ? column.cellProps(options) : {};

  function setHighlight(value = false) {
    setIsHighlighted(value);
  }

  React.useEffect(() => {
    const key = getGridRefId({ gridId, rowIndex, columnIndex });
    window.paprika.dataGridRef[key] = {
      setHighlight,
    };

    return () => {
      console.log("before:", Object.keys(window.paprika.dataGridRef).length);
      delete window.paprika.dataGridRef[key];
      console.log("after:", Object.keys(window.paprika.dataGridRef).length);
    };
  }, []); // eslint-disable-line

  const isColumnCellAFunction = typeof column.cell === "function";
  return (
    <sc.Cell
      borderType={borderType}
      data-pka-cell-key-column-index={columnIndex}
      data-pka-cell-key-row-index={rowIndex}
      data-pka-cell-key={`${gridId}.${columnIndex}.${rowIndex}`}
      data-pka="cell-container"
      hasZebraStripes={hasZebraStripes}
      rowIndex={rowIndex}
      style={style}
      tabIndex={-1}
    >
      <sc.GridCell data-pka="cell-a11y" role="gridcell">
        {a11yText}
      </sc.GridCell>
      <sc.InnerCell
        resetCSS={column.cellPropsResetCSS}
        data-pka="cell"
        {...cellProps}
        aria-hidden="true"
        {...options.attrs}
      >
        {isColumnCellAFunction ? column.cell({ ...options }) : data[rowIndex][column.cell]}
      </sc.InnerCell>
    </sc.Cell>
  );
}

Cell.propTypes = propTypes;
