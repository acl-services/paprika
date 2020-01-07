import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Cell.styles";

const propTypes = {
  activeCellIndex: PropTypes.string,
  cellIndex: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setActiveCell: PropTypes.func.isRequired,
  style: PropTypes.shape({}).isRequired,
  rowIndex: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  refData: PropTypes.shape({ current: PropTypes.shape([]) }).isRequired,
  onClickCell: PropTypes.func,
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

    onClickCell(refData[rowIndex], rowIndex, columnIndex);
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
      <styled.InnerCell>{children}</styled.InnerCell>
    </styled.Cell>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;
