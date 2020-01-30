import React from "react";
import PropTypes from "prop-types";
import { VariableSizeGrid as Grid } from "react-window";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import Spinner from "@paprika/spinner";
import Cell from "./components/Cell";
import useGridEventHandler from "./hooks/useGridEventHandler";
import ColumnDefinition from "./components/ColumnDefinition";
import * as styled from "./DataGrid.styles";
import WhenScrollBarReachedBottom, { End } from "./components/WhenScrollBarReachedBottom";

const propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  fillAvailableSpace: PropTypes.bool,
  height: PropTypes.number,
  isIdle: PropTypes.bool,
  onClick: PropTypes.func,
  onEnter: PropTypes.func,
  onKeyDown: PropTypes.func,
  onShiftSpaceBar: PropTypes.func,
  onSpaceBar: PropTypes.func,
  rowHeight: PropTypes.number,
  width: PropTypes.number,
};
const defaultProps = {
  data: [],
  fillAvailableSpace: false,
  height: 600,
  isIdle: false,
  onClick: null,
  onEnter: null,
  onKeyDown: () => {},
  onShiftSpaceBar: null,
  onSpaceBar: null,
  rowHeight: 36,
  width: null,
};

const outerElementType = React.forwardRef((props, ref) => <div role="rowgroup" ref={ref} {...props} />);
const innerElementType = React.forwardRef((props, ref) => <styled.InnerElementType role="row" ref={ref} {...props} />);
const outerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.OuterElementTypeMainGrid role="rowgroup" ref={ref} {...props} />
));

const innerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <styled.InnerElementTypeMainGrid className="inner-element-type-main-grid" role="row" ref={ref} {...props} />
));

const DataGrid = React.forwardRef((props, ref) => {
  const {
    children,
    data,
    fillAvailableSpace,
    height,
    isIdle,
    onClick,
    onEnter,
    onKeyDown,
    onShiftSpaceBar,
    onSpaceBar,
    rowHeight,
    width,
    ...moreProps
  } = props;

  const refsCell = React.useRef({});
  const refPrevActiveCell = React.useRef(null);
  const refScrollHeader = React.useRef(null);
  const refContainer = React.useRef(null);
  const refGrid = React.useRef(null);
  const refScrollStickyColumns = React.useRef(null);
  const refScrollGrid = React.useRef(null);
  const refScrollHappenedBy = React.useRef(null);
  const refEnd = React.useRef(null);
  const refPrevLastScrollHeight = React.useRef(null);

  const [scrollBarWidth, setScrollBarWidth] = React.useState(0);
  const [gridShouldHaveFocus, setGridShouldHaveFocus] = React.useState(true);

  // these two value are sensitive in Grids with lots of columns and can degradate performance alot.
  // be caution when using them.
  const overscanRowCount = 16;
  const overscanColumnCount = 2;

  const rowCount = React.useMemo(() => {
    return data.length;
  }, [data.length]);

  const { ColumnDefinitions, WhenScrollBarReachedBottom } = React.useMemo(() => {
    const {
      "DataGrid.ColumnDefinition": ColumnDefinitions,
      "DataGrid.WhenScrollBarReachedBottom": WhenScrollBarReachedBottom,
    } = extractChildren(children, ["DataGrid.ColumnDefinition", "DataGrid.WhenScrollBarReachedBottom"]);

    return { ColumnDefinitions, WhenScrollBarReachedBottom };
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

  function onChangeActiveCell({ columnIndex, rowIndex }) {
    const key = `${columnIndex}${rowIndex}`;

    if (refPrevActiveCell.current && refPrevActiveCell.current in refsCell.current) {
      const prevCell = refsCell.current[refPrevActiveCell.current];
      if (prevCell) {
        refsCell.current[refPrevActiveCell.current].isActiveCell(false);
      }
    }

    refPrevActiveCell.current = key;
    refsCell.current[key].isActiveCell(true);
  }

  const { handleKeyDown, handleKeyUp, handleClick, gridId, restoreHighlightFocus } = useGridEventHandler({
    columnCount,
    onChangeActiveCell,
    onClick,
    onEnter,
    onKeyDown,
    onShiftSpaceBar,
    onSpaceBar,
    refContainer,
    refGrid,
    rowCount,
    rowHeight,
    scrollBarWidth,
    stickyColumnsIndexes,
  });

  const a11yTextMessage = (value, column, rowIndex) => {
    return `${value}. You are on row ${rowIndex}, column ${column}. Disregard the following information:`;
  };

  const handleScroll = React.useCallback(parameters => {
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
      refEnd.current &&
      refScrollGrid.current.scrollTop + refScrollGrid.current.offsetHeight >= refScrollGrid.current.scrollHeight
    ) {
      refEnd.current.onScrollBarReachedBottom(true);
    } else if (refEnd.current) {
      refEnd.current.onScrollBarReachedBottom(false);
    }
  }, []);

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

  const refCellHandler = ({ columnIndex, rowIndex }) => ref => {
    refsCell.current[`${columnIndex}${rowIndex}`] = ref;
  };

  React.useLayoutEffect(() => {
    if (!refContainer.current) return;

    refScrollHeader.current = refContainer.current.querySelector(`.${gridId}-header`);
    refScrollStickyColumns.current = refContainer.current.querySelector(`.${gridId}-sticky-columns`);
    refScrollGrid.current = refContainer.current.querySelector(`.grid-${gridId}`);
  }, [gridId]);

  React.useEffect(() => {
    const scrollContainer =
      refContainer.current && refContainer.current.querySelector(`.grid-${gridId} [role="row"]`).parentElement;

    if (!scrollContainer) return;
    // https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
    // https://davidwalsh.name/detect-scrollbar-width
    setScrollBarWidth(() => scrollContainer.offsetWidth - scrollContainer.clientWidth);
  }, [gridId, isIdle]);

  function handleFocusGrid() {
    const $isBlur = refContainer.current.querySelector(".grid--is-blur");
    if ($isBlur) $isBlur.classList.remove("grid--is-blur");

    if (gridShouldHaveFocus) {
      setGridShouldHaveFocus(() => {
        return false;
      });
    }
  }

  React.useEffect(() => {
    // this is required to readjust the active highlight
    // after any rerender
    if (refPrevLastScrollHeight.current && refPrevLastScrollHeight.current < refScrollGrid.current.scrollHeight) {
      refScrollGrid.current.scrollTo(0, refScrollGrid.current.scrollTop + 1);
    }
    restoreHighlightFocus();
  });

  React.useEffect(() => {
    refPrevLastScrollHeight.current = refScrollGrid.current.scrollHeight;
  }, []);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          restoreHighlightFocus();
        },
      };
    },
    [restoreHighlightFocus]
  );

  function handleBlurGrid() {
    const $isActive = refContainer.current.querySelector(".grid--is-active");
    if ($isActive) $isActive.classList.toggle("grid--is-blur");
  }

  function handleMouseUpGrid(event) {
    handleClick({ data, ColumnDefinitions })(event);
  }

  function handleKeyDownGrid(event) {
    handleKeyDown({ data, ColumnDefinitions })(event);
  }

  function handleKeyUpGrid(event) {
    handleKeyUp({ data, ColumnDefinitions })(event);
  }

  return (
    <>
      {isIdle && (
        <styled.Idle gridId={gridId} $width={gridWidth} $height={height}>
          <styled.IdleBlocker $width={gridWidth} $height={height}>
            <Spinner />
          </styled.IdleBlocker>
        </styled.Idle>
      )}
      <styled.Grid
        aria-colcount={columnCount}
        gridId={gridId}
        onBlur={handleBlurGrid}
        onFocus={handleFocusGrid}
        onKeyDown={handleKeyDownGrid}
        onKeyUp={handleKeyUpGrid}
        onMouseUp={handleMouseUpGrid}
        ref={refContainer}
        role="grid"
        tabIndex={gridShouldHaveFocus ? 0 : -1}
        $width={gridWidth}
        isIdle={isIdle}
        {...moreProps}
      >
        <styled.Flex>
          {/** STICKY HEADER */}
          <Grid
            columnCount={stickyColumnsIndexes.length}
            columnWidth={columnIndex => {
              return ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props.width;
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
            width={gridWidth - stickyGridWidth - scrollBarWidth}
            overscanColumnCount={overscanColumnCount}
            overscanRowCount={overscanRowCount}
            outerElementType={outerElementType}
            innerElementType={innerElementType}
            className={`${gridId}-header`}
          >
            {({ columnIndex, style }) => {
              const { header } = ColumnDefinitions[columnIndex].props;

              if (stickyColumnsIndexes.includes(columnIndex)) return null;

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
              return ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props.width;
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
                <Cell
                  a11yText={a11yText}
                  column={column}
                  columnIndex={columnIndex}
                  data={data}
                  gridId={gridId}
                  ref={refCellHandler({ columnIndex, rowIndex })}
                  rowIndex={rowIndex}
                  style={style}
                />
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
            width={gridWidth - stickyGridWidth}
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
                  ? column.cellA11yText && column.cellA11yText({ row: data[rowIndex], rowIndex, columnIndex })
                  : data[rowIndex][column.cell];
              const headerA11yText = columnHeadersA11yText[columnIndex];
              const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

              if (stickyColumnsIndexes.includes(columnIndex)) {
                return null;
              }

              return (
                <Cell
                  a11yText={a11yText}
                  column={column}
                  columnIndex={columnIndex}
                  data={data}
                  gridId={gridId}
                  ref={refCellHandler({ columnIndex, rowIndex })}
                  rowIndex={rowIndex}
                  style={style}
                />
              );
            }}
          </Grid>
        </styled.Flex>
        <styled.FillerTopRigth rowHeight={rowHeight} scrollBarWidth={scrollBarWidth} />
        <styled.FillerBottomLeft stickyGridWidth={stickyGridWidth} scrollBarWidth={scrollBarWidth} />
      </styled.Grid>
      {!isIdle ? (
        <>
          <styled.Footer $width={gridWidth}>
            <styled.RowCount>Rows:{rowCount}</styled.RowCount>
          </styled.Footer>
          {WhenScrollBarReachedBottom ? (
            <End width={gridWidth} ref={refEnd}>
              {WhenScrollBarReachedBottom}
            </End>
          ) : null}
        </>
      ) : null}
    </>
  );
});

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.ColumnDefinition = ColumnDefinition;
DataGrid.WhenScrollBarReachedBottom = WhenScrollBarReachedBottom;

export default DataGrid;
