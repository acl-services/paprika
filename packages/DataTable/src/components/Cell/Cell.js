import React from "react";
import PropTypes from "prop-types";
import * as styled from "../VirtualizedTable/VirtualizedTable.styles";

export default function Cell(props) {
  const {
    a11yProps,
    activeCellIndex,
    cellIndex,
    children,
    data,
    dataRow,
    height,
    rowIndex,
    setActiveCell,
    width,
  } = props;

  function handleClickCell() {
    if (activeCellIndex !== cellIndex) {
      setActiveCell({
        index: cellIndex,
        data,
        dataRow,
        rowIndex,
      });
    }
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
      {children}
    </styled.Cell>
  );
}

Cell.propTypes = {
  a11yProps: PropTypes.shape({}).isRequired,
  activeCellIndex: PropTypes.string.isRequired,
  cellIndex: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({}).isRequired,
  dataRow: PropTypes.shape({}).isRequired,
  height: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  setActiveCell: PropTypes.func.isRequired,
  width: PropTypes.string,
};

Cell.defaultProps = {
  width: null,
};
