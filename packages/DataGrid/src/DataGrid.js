import React from "react";
import PropTypes from "prop-types";
import { VariableSizeGrid as Grid } from "react-window";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import Spinner from "@paprika/spinner";
import useGridEventHandler from "./hooks/useGridEventHandler";
import ColumnDefinition from "./components/ColumnDefinition";
import RowIndicator from "./components/RowIndicator";
import EndOFScrollingFooter from "./components/EndOFScrollingFooter";
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
  whileOnScrolling: PropTypes.bool,
  fillAvailableSpace: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isIdle: PropTypes.bool,
};
const defaultProps = {
  data: [],
  height: 600,
  width: null,
  rowHeight: 36,
  hasZebra: false,
  hasVerticalBorder: true,
  hasHorizontalBorder: true,
  whileOnScrolling: false,
  fillAvailableSpace: false,
  onClick: () => {},
  onKeyDown: () => {},
  isIdle: false,
};

const outerElementType = React.forwardRef((props, ref) => <div role="rowgroup" ref={ref} {...props} />);
const innerElementType = React.forwardRef((props, ref) => <styled.InnerElementType role="row" ref={ref} {...props} />);
const outerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.OuterElementTypeMainGrid role="rowgroup" ref={ref} {...props} />
));

const innerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.InnerElementTypeMainGrid className="inner-element-type-main-grid" role="row" ref={ref} {...props} />
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
    isIdle,
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
  const [gridShouldHaveFocus, setGridShouldHaveFocus] = React.useState(true);
  const [isEndOFScrollingFooterVisible, setIsEndOFScrollingFooterVisible] = React.useState(false);

  const overscanRowCount = 20;
  const overscanColumnCount = 20;

  const rowCount = React.useMemo(() => {
    return data.length;
  }, [data.length]);

  const { ColumnDefinitions, EndOFScrollingFooter } = React.useMemo(() => {
    const {
      "DataGrid.ColumnDefinition": ColumnDefinitions,
      "DataGrid.EndOFScrollingFooter": EndOFScrollingFooter,
    } = extractChildren(children, ["DataGrid.ColumnDefinition", "DataGrid.EndOFScrollingFooter"]);

    return { ColumnDefinitions, EndOFScrollingFooter };
  }, [children]);

  const columnCount = React.useMemo(() => {
    return ColumnDefinitions.length;
  }, [ColumnDefinitions]);

  const columnHeadersA11yText = React.useMemo(() => {
    return ColumnDefinitions.map(ColumnDefinition => {
      const { header, headerA11yText } = ColumnDefinition.props;
      return typeof header === "function" ? headerA11yText && headerA11yText() : header;
    });
  }, [ColumnDefinitions]);

  const calculatedTableWidth = React.useCallback(() => {
    let width = 0;
    ColumnDefinitions.forEach(ColumnDefinition => {
      if (!ColumnDefinition.props.isSticky) {
        width += Number.parseInt(ColumnDefinition.props.width, 10);
      }
    });

    return width + scrollBarWidth;
  }, [ColumnDefinitions, scrollBarWidth]);

  const gridWidth = width === null ? calculatedTableWidth() : width;

  const stickyColumnsIndexes = React.useMemo(
    () =>
      ColumnDefinitions.map((ColumnDefinition, index) => {
        return ColumnDefinition.props.isSticky ? index : null;
      }).filter(chunk => chunk !== null),
    [ColumnDefinitions]
  );

  const stickyGridWidth =
    (stickyColumnsIndexes.length &&
      stickyColumnsIndexes.reduce((accum, index) => {
        return accum + ColumnDefinitions[index].props.width;
      }, 0)) ||
    0;

  const { handleKeyDown, gridId, restoreHighlightFocus } = useGridEventHandler({
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

      if (
        refScrollGrid.current &&
        refScrollGrid.current.scrollTop + refScrollGrid.current.offsetHeight >= refScrollGrid.current.scrollHeight
      ) {
        setIsEndOFScrollingFooterVisible(() => true);
      } else {
        setIsEndOFScrollingFooterVisible(() => false);
      }
    },
    [refScrollHeader, refScrollStickyColumns]
  );

  const handleScrollStickyColumns = React.useCallback(
    parameters => {
      const { scrollTop /* scrollUpdateWasRequested */ } = parameters;

      // prevent rescrolling when this scrollbar gets sync with the one in the main grid
      if (refScrollHappenedBy.current === null) {
        refScrollHappenedBy.current = "handleScrollStickyColumns";
        if (refScrollGrid.current) {
          refScrollGrid.current.scrollTo({ left: 0, top: scrollTop });
        }
      } else {
        refScrollHappenedBy.current = null;
      }
    },
    [refScrollGrid]
  );

  React.useLayoutEffect(() => {
    if (!refContainer.current) return;

    refScrollHeader.current = refContainer.current.querySelector(`.${gridId}-header`);
    refScrollStickyColumns.current = refContainer.current.querySelector(`.${gridId}-sticky-columns`);
    refScrollGrid.current = refContainer.current.querySelector(`.grid-${gridId}`);
  }, [gridId]);

  React.useLayoutEffect(() => {
    const scrollContainer =
      refContainer.current && refContainer.current.querySelector(`.grid-${gridId} [role="row"]`).parentElement;

    if (!scrollContainer) return;
    // https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
    // https://davidwalsh.name/detect-scrollbar-width
    setScrollBarWidth(() => scrollContainer.offsetWidth - scrollContainer.clientWidth);
  }, [gridId, isIdle]);

  function handleFocusGrid() {
    if (gridShouldHaveFocus) {
      setGridShouldHaveFocus(() => {
        return false;
      });
      return;
    }

    const $isBlur = refContainer.current.querySelector(".grid--is-blur");
    if ($isBlur) $isBlur.classList.remove("grid--is-blur");
  }

  function handleBlurGrid() {
    const $isActive = refContainer.current.querySelector(".grid--is-active");
    if ($isActive) $isActive.classList.toggle("grid--is-blur");
  }

  React.useLayoutEffect(() => {
    restoreHighlightFocus(); // this doesn't need to be on the array dependencies
  }, [gridShouldHaveFocus, isEndOFScrollingFooterVisible]); // eslint-disable-line

  return (
    <>
      {isIdle && (
        <styled.Idle gridId={gridId} $width={gridWidth + stickyGridWidth} $height={height}>
          <styled.IdleBlocker $width={gridWidth + stickyGridWidth} $height={height}>
            <Spinner />
          </styled.IdleBlocker>
        </styled.Idle>
      )}
      <styled.Grid
        tabIndex={gridShouldHaveFocus ? 0 : -1}
        onFocus={handleFocusGrid}
        onBlur={handleBlurGrid}
        ref={refContainer}
        aria-colcount={columnCount}
        role="grid"
        onKeyDown={handleKeyDown}
        gridId={gridId}
        {...moreProps}
        isIdle={isIdle}
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
                  ? column.cellA11yText && column.cellA11yText({ row: data[rowIndex], rowIndex, columnIndex })
                  : data[rowIndex][column.cell];
              const headerA11yText = columnHeadersA11yText[columnIndex];
              const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

              return (
                <styled.Cell
                  ref={refCell}
                  tabIndex={-1}
                  style={{ ...style }}
                  data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
                >
                  <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
                  <styled.InnerCell
                    {...column.cellProps({ row: data[rowIndex], rowIndex, columnIndex })}
                    aria-hidden="true"
                  >
                    {typeof column.cell === "function"
                      ? column.cell({ row: data[rowIndex], rowIndex, columnIndex })
                      : data[rowIndex][column.cell]}
                  </styled.InnerCell>
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
            useIsScrolling={whileOnScrolling}
            className={`grid-${gridId}`}
            onScroll={handleScroll}
          >
            {({ columnIndex, rowIndex, style, isScrolling }) => {
              const column = ColumnDefinitions[columnIndex].props;
              const cellA11yText =
                typeof column.cell === "function"
                  ? column.cellA11yText && column.cellA11yText({ row: data[rowIndex], rowIndex, columnIndex })
                  : data[rowIndex][column.cell];
              const headerA11yText = columnHeadersA11yText[columnIndex];
              const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

              if (stickyColumnsIndexes.includes(columnIndex)) {
                return null;
              }

              if (whileOnScrolling && isScrolling) {
                return (
                  <styled.Cell
                    ref={refCell}
                    tabIndex={-1}
                    style={style}
                    data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
                  >
                    <styled.InnerCell aria-hidden="true">
                      <styled.WhileOnScrolling />
                    </styled.InnerCell>
                    <styled.GridCell role="gridcell">Loading</styled.GridCell>
                  </styled.Cell>
                );
              }

              return (
                <styled.Cell
                  ref={refCell}
                  tabIndex={-1}
                  style={style}
                  data-cell={`${gridId}.${columnIndex}.${rowIndex}`}
                >
                  <styled.GridCell role="gridcell">{a11yText}</styled.GridCell>
                  <styled.InnerCell
                    {...column.cellProps({ row: data[rowIndex], rowIndex, columnIndex })}
                    aria-hidden="true"
                  >
                    {typeof column.cell === "function"
                      ? column.cell({ row: data[rowIndex], rowIndex, columnIndex })
                      : data[rowIndex][column.cell]}
                  </styled.InnerCell>
                </styled.Cell>
              );
            }}
          </Grid>
        </styled.Flex>
        <styled.FillerTopRigth rowHeight={rowHeight} scrollBarWidth={scrollBarWidth} />
        <styled.FillerBottomLeft stickyGridWidth={stickyGridWidth} scrollBarWidth={scrollBarWidth} />
      </styled.Grid>
      {!isIdle ? (
        <styled.Footer $width={gridWidth + stickyGridWidth}>
          <styled.RowCount>Rows:{rowCount}</styled.RowCount>
        </styled.Footer>
      ) : null}
      {EndOFScrollingFooter && isEndOFScrollingFooterVisible ? (
        <styled.FooterLoadMore $width={gridWidth + stickyGridWidth}>{EndOFScrollingFooter}</styled.FooterLoadMore>
      ) : null}
    </>
  );
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.ColumnDefinition = ColumnDefinition;
DataGrid.RowIndicator = RowIndicator;
DataGrid.EndOFScrollingFooter = EndOFScrollingFooter;
