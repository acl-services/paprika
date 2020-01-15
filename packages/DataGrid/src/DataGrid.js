import React from "react";
import PropTypes from "prop-types";
import { FixedSizeGrid as Grid } from "react-window";
import useArrowKeys from "./hooks/useArrowKeys";
import * as styled from "./DataGrid.styles";

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

const outerElementType = React.forwardRef((props, ref) => <div role="rowgroup" ref={ref} {...props} />);

const innerElementType = React.forwardRef((props, ref) => <div role="row" ref={ref} {...props} />);

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

  const rowCount = 1000; // this should be props
  const columnCount = 20; // this should be props
  const refCell = React.useRef(null);
  const refScrollHeader = React.useRef(null);
  const refContainer = React.useRef(null);
  const refGrid = React.useRef(null);
  const { handleKeyDown, gridId } = useArrowKeys({
    refGrid,
    refContainer,
    columnCount,
    rowCount,
    rowHeight,
  });

  const handleScroll = React.useCallback(
    parameters => {
      const { scrollLeft /* scrollUpdateWasRequested */ } = parameters;
      if (refScrollHeader.current) {
        refScrollHeader.current.scrollTo({ left: scrollLeft, top: 0 });
      }
    },
    [refScrollHeader]
  );

  React.useEffect(() => {
    refScrollHeader.current = refContainer.current.querySelector(`.${gridId}-header`);
  }, [gridId]);

  return (
    <styled.Grid
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
        overscanRowCount={20}
        innerElementType={innerElementType}
        className={`${gridId}-header`}
      >
        {({ columnIndex, style }) => {
          return (
            <styled.Cell role="columnheader" style={style}>
              Column {columnIndex}
            </styled.Cell>
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
        className={`grid-${gridId}`}
        onScroll={handleScroll}
      >
        {({ columnIndex, rowIndex, style }) => {
          return (
            <styled.Cell
              onKeyDown={event => {
                event.preventDefault();
              }}
              ref={refCell}
              tabIndex={-1}
              style={style}
              data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
            >
              <div aria-hidden="true">
                {rowIndex}
                {columnIndex}
              </div>
              <styled.GridCell role="gridcell">
                {`${rowIndex}${columnIndex}. You are on row ${rowIndex}, column ${columnIndex}. Disregard the following information:`}
              </styled.GridCell>
            </styled.Cell>
          );
        }}
      </Grid>
    </styled.Grid>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
