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

  const columnHeadersA11yText = React.useMemo(() => {
    return ColumnDefinitions.map(ColumnDefinition => {
      const { header, headerA11yText } = ColumnDefinition.props;
      return typeof header === "function" ? headerA11yText() : header;
    });
  }, [ColumnDefinitions]);

  const calculatedTableWidth = React.useMemo(() => {
    let width = 0;
    ColumnDefinitions.forEach(ColumnDefinition => {
      width += Number.parseInt(ColumnDefinition.props.width, 10);
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

  const a11yTextMessage = (value, column, rowIndex) => {
    return `${value}. You are on row ${rowIndex}, column ${column}. Disregard the following information:`;
  };

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
              {columnHeadersA11yText[columnIndex]}
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
        {({ columnIndex, rowIndex, style }) => {
          const column = ColumnDefinitions[columnIndex].props;
          const cellA11yText =
            typeof column.cell === "function" ? column.cellA11yText(data[rowIndex]) : data[rowIndex][column.cell];
          const headerA11yText = typeof column.header === "function" ? column.headerA11yText() : column.header;
          const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

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
                {typeof column.cell === "function" ? column.cell(data[rowIndex]) : data[rowIndex][column.cell]}
              </div>
              <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
            </styled.Cell>
          );
        }}
      </Grid>
    </styled.Grid>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.ColumnDefinition = ColumnDefinition;
