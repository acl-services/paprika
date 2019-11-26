import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Cell.styles";

const propTypes = {
  a11yProps: PropTypes.shape({}).isRequired,
  activeCellIndex: PropTypes.string,
  cellIndex: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.number.isRequired,
  setActiveCell: PropTypes.func.isRequired,
  width: PropTypes.string,
};

const defaultProps = {
  width: null,
  activeCellIndex: null,
};

export default function Cell(props) {
  const { a11yProps, activeCellIndex, cellIndex, children, height, setActiveCell, width } = props;

  function handleClickCell() {
    if (activeCellIndex !== cellIndex) {
      setActiveCell({
        index: cellIndex,
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

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;
