import React from "react";
import PropTypes from "prop-types";
import { VariableSizeGrid as Grid } from "react-window";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import useArrowKeys from "./hooks/useArrowKeys";
import ColumnDefinition from "./components/ColumnDefinition";
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
  fillAvailableSpace: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
const defaultProps = {
  data: [],
  height: 600,
  width: null,
  rowHeight: 40,
  hasZebra: false,
  hasVerticalBorder: true,
  hasHorizontalBorder: true,
  whileOnScrolling: null,
  fillAvailableSpace: false,
  onClick: () => {},
  onKeyDown: () => {},
};

const outerElementType = React.forwardRef((props, ref) => <div role="rowgroup" ref={ref} {...props} />);
const innerElementType = React.forwardRef((props, ref) => <div role="row" ref={ref} {...props} />);
const innerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.InnerElementTypeMainGrid role="row" ref={ref} {...props} />
));

const row = ({ ref, gridId }) => ({ columnIndex, rowIndex, style }) => {
  return (
    <styled.Cell
      onKeyDown={event => {
        event.preventDefault();
      }}
      ref={ref}
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
};

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
    fillAvailableSpace,
    onKeyDown,
    children,
    ...moreProps
  } = props;

  const refCell = React.useRef(null);
  const refScrollHeader = React.useRef(null);
  const refContainer = React.useRef(null);
  const refGrid = React.useRef(null);

  const rowCount = React.useMemo(() => {
    return data.length;
  }, [data.length]);

  const ColumnDefinitions = React.useMemo(() => {
    const { "DataGrid.ColumnDefinition": ColumnDefinitions } = extractChildren(children, ["DataGrid.ColumnDefinition"]);

    return ColumnDefinitions;
  }, [children]);

  const columnCount = React.useMemo(() => {
    return ColumnDefinitions.length;
  }, [ColumnDefinitions]);

  const calculatedTableWidth = React.useMemo(() => {
    let width = 0;
    ColumnDefinitions.forEach(columnDefinition => {
      width += Number.parseInt(columnDefinition.props.width, 10);
    });
    return width + width * 0.12;
  }, [ColumnDefinitions]);

  const tableWidth = width === null ? calculatedTableWidth : width;

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
      gridId={gridId}
      {...moreProps}
    >
      <Grid
        columnCount={columnCount}
        columnWidth={() => 80}
        rowCount={1}
        rowHeight={() => rowHeight}
        height={48}
        width={tableWidth}
        overscanColumnCount={20}
        overscanRowCount={20}
        outerElementType={outerElementType}
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
        columnWidth={() => 80}
        height={500}
        rowCount={rowCount}
        rowHeight={() => rowHeight}
        width={tableWidth}
        overscanColumnCount={20}
        overscanRowCount={20}
        outerElementType={outerElementType}
        innerElementType={innerElementTypeMainGrid}
        ref={refGrid}
        className={`grid-${gridId}`}
        onScroll={handleScroll}
      >
        {row({ refCell, gridId })}
      </Grid>
    </styled.Grid>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.ColumnDefinition = ColumnDefinition;
