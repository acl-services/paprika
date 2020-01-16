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
  rowHeight: 36,
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
const outerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.OuterElementTypeMainGrid role="row" ref={ref} {...props} />
));

const innerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.InnerElementTypeMainGrid role="row" ref={ref} {...props} />
));

export default function DataGrid(props) {
  const {
    children,
    data,
    fillAvailableSpace,
    hasHorizontalBorder,
    hasVerticalBorder,
    hasZebra,
    height,
    onClick,
    onKeyDown,
    rowHeight,
    whileOnScrolling,
    width,
    ...moreProps
  } = props;

  const refCell = React.useRef(null);
  const refScrollHeader = React.useRef(null);
  const refContainer = React.useRef(null);
  const refGrid = React.useRef(null);
  const [scrollBarWidth, setScrollBarWidth] = React.useState(0);

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

    return width + scrollBarWidth;
  }, [ColumnDefinitions, scrollBarWidth]);

  const tableWidth = width === null ? calculatedTableWidth : width;

  const { handleKeyDown, gridId } = useArrowKeys({
    refGrid,
    refContainer,
    columnCount,
    rowCount,
    rowHeight,
    scrollBarWidth,
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

  React.useEffect(() => {
    const scrollContainer = refContainer.current.querySelector(`.grid-${gridId} [role="row"]`).parentElement;
    // https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
    // https://davidwalsh.name/detect-scrollbar-width
    setScrollBarWidth(() => scrollContainer.offsetWidth - scrollContainer.clientWidth);
  }, []); // eslint-disable-line
  // ^ we want to run the effect only one time, the scrollbar width will not change

  return (
    <styled.Grid
      tabIndex={-1}
      ref={refContainer}
      aria-colcount={columnCount}
      role="grid"
      onKeyDown={handleKeyDown}
      gridId={gridId}
      {...moreProps}
      $width={tableWidth}
    >
      <Grid
        columnCount={columnCount}
        columnWidth={columnIndex => ColumnDefinitions[columnIndex].props.width}
        rowCount={1}
        rowHeight={() => rowHeight}
        height={rowHeight}
        width={tableWidth}
        overscanColumnCount={20}
        overscanRowCount={20}
        outerElementType={outerElementType}
        innerElementType={innerElementType}
        className={`${gridId}-header`}
      >
        {({ columnIndex, style }) => {
          const { header } = ColumnDefinitions[columnIndex].props;
          return (
            <styled.CellHeader role="columnheader" style={style}>
              {typeof header === "function" ? header() : header}
            </styled.CellHeader>
          );
        }}
      </Grid>
      <Grid
        columnCount={columnCount}
        columnWidth={columnIndex => ColumnDefinitions[columnIndex].props.width}
        height={500}
        rowCount={rowCount}
        rowHeight={() => rowHeight}
        width={tableWidth}
        overscanColumnCount={20}
        overscanRowCount={20}
        outerElementType={outerElementTypeMainGrid}
        innerElementType={innerElementTypeMainGrid}
        ref={refGrid}
        className={`grid-${gridId}`}
        onScroll={handleScroll}
      >
        {({ columnIndex, rowIndex, style }) => {
          const column = ColumnDefinitions[columnIndex].props;
          const cellA11yText =
            typeof column.cell === "function" ? column.cellA11yText(data[rowIndex]) : data[rowIndex][column.cell];
          const headerA11yText = columnHeadersA11yText[columnIndex];
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
              <styled.InnerCell aria-hidden="true">
                {typeof column.cell === "function" ? column.cell(data[rowIndex]) : data[rowIndex][column.cell]}
              </styled.InnerCell>
              <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
            </styled.Cell>
          );
        }}
      </Grid>
      <styled.Filler rowHeight={rowHeight} scrollBarWidth={scrollBarWidth} />
    </styled.Grid>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.ColumnDefinition = ColumnDefinition;
