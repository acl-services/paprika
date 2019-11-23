import React from "react";
import PropTypes from "prop-types";

import * as styled from "../VirtualizedTable/VirtualizedTable.styles";
import moment from "moment";
import Date from "./Date";

export default function Cell(props) {
  const {
    a11yProps,
    activeCellIndex,
    cellIndex,
    children,
    dataRow,
    height,
    onClick,
    row,
    rowIndex,
    type,
    width,
    cell,
    columnId,
  } = props;
  function renderCellContent(text) {
    switch (type) {
      case "DATE":
        return <Date text={text} format={row.format} />;
      default:
        return text;
    }
  }
  const cellContent = typeof cell === "function" ? cell(row[columnId]) : renderCellContent(row[cell]);

  // console.log(props);

  function handleClickCell() {
    onClick({ index: cellIndex, data: row, dataRow, rowIndex });
  }

  return (
    <styled.Cell
      {...a11yProps}
      $width={width}
      $height={height}
      data-pka-cell-index={cellIndex}
      cellIndex={cellIndex}
      activeCellIndex={activeCellIndex}
      onClick={handleClickCell}
    >
      {cellContent}
    </styled.Cell>
  );
}

Cell.propTypes = {
  a11yProps: PropTypes.shape({}).isRequired,
  activeCellIndex: PropTypes.string.isRequired,
  cellIndex: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dataRow: PropTypes.shape({}).isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  row: PropTypes.shape({}).isRequired,
  rowIndex: PropTypes.number.isRequired,
  width: PropTypes.string,
};

Cell.defaultProps = {
  width: null,
};
