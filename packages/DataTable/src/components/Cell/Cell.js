import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Cell.styles";

const propTypes = {
  a11yProps: PropTypes.shape({}).isRequired,
  activeCellIndex: PropTypes.string,
  cellIndex: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setActiveCell: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  refData: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
  onClickCell: PropTypes.func,
  refActivePage: PropTypes.shape({ current: PropTypes.shape({}) }).isRequired,
};

const defaultProps = {
  activeCellIndex: null,
  onClickCell: () => {},
};

export default function Cell(props) {
  const {
    activeCellIndex,
    cellIndex,
    children,
    setActiveCell,
    onClickCell,
    style,
    rowIndex,
    columnIndex,
    refData,
    ...moreProps
  } = props;

  function handleClickCell() {
    if (activeCellIndex !== cellIndex) {
      setActiveCell({
        index: cellIndex,
      });
    }

    // removing header from rowIndex-1
    onClickCell(refData.current[rowIndex - 1], rowIndex);
  }

  return (
    <styled.Cell
      {...moreProps}
      id={`${cellIndex}`}
      cellIndex={cellIndex}
      activeCellIndex={activeCellIndex}
      onClick={handleClickCell}
      style={style}
    >
      {children}
    </styled.Cell>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;
