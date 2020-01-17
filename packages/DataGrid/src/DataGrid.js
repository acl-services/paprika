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
  <styled.OuterElementTypeMainGrid role="rowgroup" ref={ref} {...props} />
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
  const refScrollStickyColumns = React.useRef(null);
  const refScrollGrid = React.useRef(null);
  const refScrollHappenedBy = React.useRef(null);

  const [scrollBarWidth, setScrollBarWidth] = React.useState(0);

  const overscanRowCount = 20;
  const overscanColumnCount = 20;

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
      if (!ColumnDefinition.props.isSticky) {
        width += Number.parseInt(ColumnDefinition.props.width, 10);
      }
    });

    return width + scrollBarWidth;
  }, [ColumnDefinitions, scrollBarWidth]);

  const gridWidth = width === null ? calculatedTableWidth : width;

  const stickyColumnsIndexes = ColumnDefinitions.map((ColumnDefinition, index) => {
    return ColumnDefinition.props.isSticky ? index : null;
  }).filter(chunk => chunk !== null);

  const stickyGridWidth =
    (stickyColumnsIndexes.length &&
      stickyColumnsIndexes.reduce((accum, index) => {
        return accum + ColumnDefinitions[index].props.width;
      }, 0)) ||
    0;

  const { handleKeyDown, gridId } = useArrowKeys({
    refGrid,
    refContainer,
    columnCount,
    rowCount,
    rowHeight,
    scrollBarWidth,
    stickyColumnsIndexes,
  });

  const a11yTextMessage = (value, column, rowIndex) => {
    return `${value}. You are on row ${rowIndex}, column ${column}. Disregard the following information:`;
  };

  const handleScroll = React.useCallback(
    parameters => {
      const { scrollLeft, scrollTop /* scrollUpdateWasRequested */ } = parameters;

      if (refScrollHeader.current) {
        refScrollHeader.current.scrollTo({ left: scrollLeft, top: 0 });
      }

      // prevent rescrolling when this scrollbar gets sync with the one in the sticky column
      if (refScrollHappenedBy.current === null) {
        refScrollHappenedBy.current = "handleScroll";
        if (refScrollStickyColumns.current) {
          refScrollStickyColumns.current.scrollTo({ left: 0, top: scrollTop });
        }
      } else {
        refScrollHappenedBy.current = null;
      }
    },
    [refScrollHeader, refScrollStickyColumns]
  );

  const handleScrollStickyColumns = React.useCallback(
    parameters => {
      const { scrollTop /* scrollUpdateWasRequested */ } = parameters;
      if (refScrollHappenedBy.current === null) {
        refScrollHappenedBy.current = "handleScrollStickyColumns";
        console.log(refScrollHappenedBy.current);
        if (refScrollGrid.current) {
          refScrollGrid.current.scrollTo({ left: 0, top: scrollTop });
        }
      } else {
        refScrollHappenedBy.current = null;
      }
    },
    [refScrollGrid]
  );

  React.useEffect(() => {
    refScrollHeader.current = refContainer.current.querySelector(`.${gridId}-header`);
    refScrollStickyColumns.current = refContainer.current.querySelector(`.${gridId}-sticky-columns`);
    refScrollGrid.current = refContainer.current.querySelector(`.grid-${gridId}`);
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
      $width={gridWidth + stickyGridWidth}
    >
      <styled.Flex>
        {/** STICKY HEADER */}
        <Grid
          columnCount={stickyColumnsIndexes.length}
          columnWidth={columnIndex => {
            return ColumnDefinitions[columnIndex].props.width;
          }}
          height={rowHeight}
          rowCount={1}
          rowHeight={() => rowHeight}
          width={stickyGridWidth}
          overscanColumnCount={overscanColumnCount}
          overscanRowCount={overscanRowCount}
        >
          {({ columnIndex, style }) => {
            const { header } = ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props;
            return (
              <styled.CellHeader role="columnheader" style={style}>
                {typeof header === "function" ? header() : header}
              </styled.CellHeader>
            );
          }}
        </Grid>

        {/** HEADER */}

        <Grid
          columnCount={columnCount}
          columnWidth={columnIndex => {
            if (stickyColumnsIndexes.includes(columnIndex)) return 0;
            return ColumnDefinitions[columnIndex].props.width;
          }}
          rowCount={1}
          rowHeight={() => rowHeight}
          height={rowHeight}
          width={gridWidth - scrollBarWidth}
          overscanColumnCount={overscanColumnCount}
          overscanRowCount={overscanRowCount}
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
      </styled.Flex>
      {/** STICKY COLUMNS */}
      <styled.Flex>
        <Grid
          columnCount={stickyColumnsIndexes.length}
          columnWidth={columnIndex => {
            return ColumnDefinitions[columnIndex].props.width;
          }}
          height={height - scrollBarWidth}
          rowCount={rowCount}
          rowHeight={() => rowHeight}
          width={stickyGridWidth}
          overscanColumnCount={overscanColumnCount}
          overscanRowCount={overscanRowCount}
          outerElementType={outerElementType}
          innerElementType={innerElementType}
          className={`${gridId}-sticky-columns`}
          onScroll={handleScrollStickyColumns}
        >
          {({ columnIndex, rowIndex, style }) => {
            const column = ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props;
            const cellA11yText =
              typeof column.cell === "function"
                ? column.cellA11yText && column.cellA11yText(data[rowIndex])
                : data[rowIndex][column.cell];
            const headerA11yText = columnHeadersA11yText[columnIndex];
            const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

            return (
              <styled.Cell ref={refCell} tabIndex={-1} style={style} data-cell={`${gridId}.${columnIndex}.${rowIndex}`}>
                <styled.InnerCell aria-hidden="true">
                  {typeof column.cell === "function" ? column.cell(data[rowIndex]) : data[rowIndex][column.cell]}
                </styled.InnerCell>
                <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
              </styled.Cell>
            );
          }}
        </Grid>

        {/** COLUMS */}

        <Grid
          columnCount={columnCount}
          columnWidth={columnIndex => {
            if (stickyColumnsIndexes.includes(columnIndex)) return 0;
            return ColumnDefinitions[columnIndex].props.width;
          }}
          height={height}
          rowCount={rowCount}
          rowHeight={() => rowHeight}
          width={gridWidth}
          overscanColumnCount={overscanColumnCount}
          overscanRowCount={overscanRowCount}
          outerElementType={outerElementTypeMainGrid}
          innerElementType={innerElementTypeMainGrid}
          ref={refGrid}
          className={`grid-${gridId}`}
          onScroll={handleScroll}
        >
          {({ columnIndex, rowIndex, style }) => {
            const column = ColumnDefinitions[columnIndex].props;
            const cellA11yText =
              typeof column.cell === "function"
                ? column.cellA11yText && column.cellA11yText(data[rowIndex])
                : data[rowIndex][column.cell];
            const headerA11yText = columnHeadersA11yText[columnIndex];
            const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

            if (stickyColumnsIndexes.includes(columnIndex)) {
              return null;
            }

            return (
              <styled.Cell ref={refCell} tabIndex={-1} style={style} data-cell={`${gridId}.${columnIndex}.${rowIndex}`}>
                <styled.InnerCell aria-hidden="true">
                  {typeof column.cell === "function" ? column.cell(data[rowIndex]) : data[rowIndex][column.cell]}
                </styled.InnerCell>
                <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
              </styled.Cell>
            );
          }}
        </Grid>
      </styled.Flex>
      <styled.Filler rowHeight={rowHeight} scrollBarWidth={scrollBarWidth} />
    </styled.Grid>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.ColumnDefinition = ColumnDefinition;
