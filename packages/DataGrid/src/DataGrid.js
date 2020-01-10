import React from "react";
import PropTypes from "prop-types";
import { FixedSizeGrid as Grid } from "react-window";
import styled from "styled-components";
import nanoid from "nanoid";

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  height: PropTypes.number,
  width: PropTypes.number,
  rowHeight: PropTypes.number,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  hasZebra: PropTypes.bool,
  hasVerticalBorder: PropTypes.bool,
  hasHorizontalBorder: PropTypes.bool,
  whileOnScrolling: PropTypes.func,
  hasAutoFit: PropTypes.bool,
};
const defaultProps = {
  data: [],
  height: 600,
  width: 720,
  rowHeight: 32,
  hasZebra: false,
  hasVerticalBorder: true,
  hasHorizontalBorder: true,
  whileOnScrolling: null,
  hasAutoFit: true,
  onClick: () => {},
  onKeyDown: () => {},
};

const Cell = styled.div`
  position: relative;
  .grid--is-active {
    border: 1px solid blue;
  }
`;

const GridCell = styled.div`
  height: 1px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  whitespace: nowrap;
  width: 1px;
`;

const outerElementType = React.forwardRef((props, ref) => <div role="rowgroup" ref={ref} {...props} />);

const innerElementType = React.forwardRef((props, ref) => <div role="row" ref={ref} {...props} />);

function useNextPrev({ refGrid, refContainer, gridId }) {
  const [cell, setCell] = React.useState(null);
  const [prevCell, setPrevCell] = React.useState(null);

  const handleKeyDown = React.useCallback(event => {
    // const keyboardKeys = {
    //   ArrowUp: () => {
    //     console.log("up");
    //   },
    //   ArrowRight: () => {
    //     console.log("right");
    //   },
    //   ArrowDown: () => {
    //     console.log("down");
    //   },
    //   ArrowLeft: () => {
    //     console.log("left");
    //   },
    // };
    //
    // if (event.key in keyboardKeys) {
    //   if (!cell) {
    //     setCell({ columnIndex: 0, rowIndex: 0 });
    //     return;
    //   }
    //   keyboardKeys[event.key]();
    // }
  }, []);

  const handleClick = React.useCallback(event => {
    const dataCell = event.target.dataset.cell;
    console.log(dataCell);
  }, []);

  function nextUp() {}

  function nextRight() {}

  function nextBottom() {}

  function nextLeft() {}

  React.useEffect(() => {
    if (cell && refGrid && refGrid.current) {
      refGrid.current.scrollToItem({ align: "smart", columnIndex: cell.columnIndex, rowIndex: cell.rowIndex });
      const $cell = refContainer.current.querySelector(`[cell='${gridId}.${cell.columnIndex}.${cell.rowIndex}']`);
      $cell.classList.toggle("grid--is-active");
    }
  }, [cell, gridId, refContainer, refGrid]);

  return { nextUp, nextRight, nextBottom, nextLeft, cell, prevCell, handleKeyDown, handleClick };
}

export default function DataGrid(props) {
  const {
    data,
    height,
    width,
    rowHeight,
    onClick,
    hasZebra,
    hasVerticalBorder,
    hasHorizontalBorder,
    whileOnScrolling,
    hasAutoFit,
    onKeyDown,
    ...moreProps
  } = props;

  const cellRef = React.useRef(null);
  const prevRef = React.useRef(null);
  const refContainer = React.useRef(null);
  const refGrid = React.useRef(null);
  const gridId = React.useState(() => `PKA${nanoid()}`);
  const { handleKeyDown, handleClick: handleClickNextPrev } = useNextPrev({ gridId, refGrid, refContainer });

  const rowCount = 1000;
  const columnCount = 20;
  const handleClick = React.useCallback(
    event => {
      if (prevRef.current) {
        prevRef.current.tabIndex = "-1";
      }

      const qs = "[role='gridcell']";
      const $gridcell = event.target.hasAttribute("aria-hidden")
        ? event.target.parentElement.querySelector(qs)
        : event.target.querySelector(qs);
      prevRef.current = $gridcell;
      $gridcell.tabIndex = 0;
      $gridcell.focus();
      handleClickNextPrev(event);
    },
    [handleClickNextPrev]
  );

  return (
    <div
      tabIndex={-1}
      ref={refContainer}
      aria-colcount={columnCount}
      role="grid"
      onKeyDown={handleKeyDown}
      {...moreProps}
    >
      <Grid
        columnCount={columnCount}
        columnWidth={80}
        rowCount={1}
        rowHeight={48}
        height={48}
        width={640}
        overscanColumnCount={20}
        outerElementType={outerElementType}
        innerElementType={innerElementType}
      >
        {({ columnIndex, style }) => {
          return (
            <Cell role="columnheader" style={style}>
              Column {columnIndex}
            </Cell>
          );
        }}
      </Grid>
      <Grid
        columnCount={columnCount}
        columnWidth={80}
        height={500}
        rowCount={rowCount}
        rowHeight={48}
        width={640}
        overscanColumnCount={20}
        overscanRowCount={20}
        outerElementType={outerElementType}
        innerElementType={innerElementType}
        ref={refGrid}
      >
        {({ columnIndex, rowIndex, style }) => {
          return (
            <Cell
              ref={cellRef}
              tabIndex={-1}
              onClick={handleClick}
              style={style}
              data-cell={`${columnIndex}_${rowIndex}`}
            >
              <div aria-hidden="true">
                {rowIndex}
                {columnIndex}
              </div>
              <GridCell role="gridcell">
                {`you are on row ${rowIndex}, column ${columnIndex}. cell value ${rowIndex}${columnIndex}`}
              </GridCell>
            </Cell>
          );
        }}
      </Grid>
    </div>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
