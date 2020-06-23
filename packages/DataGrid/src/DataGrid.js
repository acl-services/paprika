import React from "react";
import PropTypes from "prop-types";
import { VariableSizeGrid as Grid } from "react-window";
import useI18n from "@paprika/l10n/lib/useI18n";
import extractChildren from "@paprika/helpers/lib/extractChildren";

import useGridEventHandler from "./hooks/useGridEventHandler";
import ColumnDefinition from "./components/ColumnDefinition";
import * as sc from "./DataGrid.styles";
import Basement, { End } from "./components/Basement";
import InfiniteScroll from "./components/InfiniteScroll";
import { Row, HeaderRow, StickyRow, StickyHeaderRow, createItemData } from "./DataGrid.Rows";

const propTypes = {
  /** If the data cell should automatically get focus  */
  autofocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /** Add an alternate background on the DataGrid's rows */
  hasZebraStripes: PropTypes.bool,
  /** Array of data to be stored in the DataGrid */
  data: PropTypes.arrayOf(PropTypes.shape({})),
  /** Sets the height of the DataGrid */
  height: PropTypes.number,
  /** Callback onClick */
  onClick: PropTypes.func,
  /** Callback onKeyDown press */
  onKeyDown: PropTypes.func,
  /** Callback when Enter key is pressed */
  onPressEnter: PropTypes.func,
  /** Callback when Shift + Spacebar is pressed */
  onPressShiftSpaceBar: PropTypes.func,
  /** Callback when Spacebar is pressed */
  onPressSpaceBar: PropTypes.func,
  onRowChecked: PropTypes.func,
  /** Sets the row height */
  rowHeight: PropTypes.number,
  /** Sets the DataGrid width */
  width: PropTypes.number,
};

const defaultProps = {
  autofocus: true,
  data: [],
  hasZebraStripes: false,
  height: 600,
  onClick: null,
  onKeyDown: () => {},
  onPressEnter: null,
  onPressShiftSpaceBar: null,
  onPressSpaceBar: null,
  onRowChecked: () => {},
  rowHeight: 36,
  width: null,
};

const outerElementType = React.forwardRef((props, ref) => <div role="rowgroup" ref={ref} {...props} />);
const innerElementType = React.forwardRef((props, ref) => <sc.InnerElementType role="row" ref={ref} {...props} />);
const outerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <sc.OuterElementTypeMainGrid role="rowgroup" ref={ref} {...props} />
));

const innerElementTypeMainGrid = React.forwardRef((props, ref) => (
  <sc.InnerElementTypeMainGrid role="row" ref={ref} {...props} />
));

const DataGrid = React.forwardRef((props, ref) => {
  const {
    autofocus,
    children,
    data,
    hasZebraStripes,
    height,
    onClick,
    onKeyDown,
    onPressEnter,
    onPressShiftSpaceBar,
    onPressSpaceBar,
    onRowChecked,
    rowHeight,
    width,
    ...moreProps
  } = props;

  const refScrollHeader = React.useRef(null);
  const refContainer = React.useRef(null);
  const refGridColumns = React.useRef(null);
  const refGridStickyHeader = React.useRef(null);
  const refGridHeader = React.useRef(null);
  const refScrollStickyColumns = React.useRef(null);
  const refScrollGrid = React.useRef(null);
  const refScrollHappenedBy = React.useRef(null);
  const refEnd = React.useRef(null);
  const refPrevLastScrollHeight = React.useRef(null);
  const refCurrentPage = React.useRef(null);
  const refVisibleIndexes = React.useRef({
    start: null,
    stop: null,
  });
  const refTotalColumnWidth = React.useRef(0);
  const refRemainingSpace = React.useRef(0);
  const refTotalCanGrow = React.useRef(0);

  const [scrollBarWidth, setScrollBarWidth] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(null);
  const i18n = useI18n();
  // these two value are sensitive in Grids with lots of columns and can degradate performance alot.
  // be caution when using them.
  const overscanRowCount = 7;
  const overscanColumnCount = 5;

  const rowCount = data.length;

  const {
    "DataGrid.ColumnDefinition": extractedColumnDefinitions,
    "DataGrid.Basement": extractedBasement,
    "DataGrid.InfiniteScroll": extractedInfiniteScroll,
  } = extractChildren(children, ["DataGrid.ColumnDefinition", "DataGrid.Basement", "DataGrid.InfiniteScroll"]);

  let ColumnDefinitions = extractedColumnDefinitions;
  let columnCount = ColumnDefinitions && ColumnDefinitions.length;

  if (!Array.isArray(extractedColumnDefinitions)) {
    // when there is only one component extracted function return the element not an array of elements
    ColumnDefinitions = [extractedColumnDefinitions];
    columnCount = ColumnDefinitions.length;
  }

  const columnHeadersA11yText = React.useMemo(() => {
    return ColumnDefinitions.map(ColumnDefinition => {
      const { header, headerA11yText } = ColumnDefinition.props;
      return typeof header === "function" ? headerA11yText && headerA11yText() : header;
    });
  }, [ColumnDefinitions]);

  const calculatedTableHeight = React.useMemo(() => {
    return rowHeight * rowCount > height ? height : rowHeight * rowCount + scrollBarWidth;
  }, [height, rowCount, rowHeight, scrollBarWidth]);

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

  const stickyGridWidth = React.useMemo(() => {
    let width = 0;
    if (stickyColumnsIndexes.length) {
      stickyColumnsIndexes.forEach(index => {
        width += ColumnDefinitions[index].props.width;
      });
    }
    return width;
  }, [ColumnDefinitions, stickyColumnsIndexes]);

  const { handleKeyDown, handleKeyUp, handleClick, gridId, restoreHighlightFocus } = useGridEventHandler({
    columnCount,
    onClick,
    onPressEnter,
    onKeyDown,
    onRowChecked,
    onPressShiftSpaceBar,
    onPressSpaceBar,
    refContainer,
    refGrid: refGridColumns,
    rowCount,
    rowHeight,
    scrollBarWidth,
    stickyColumnsIndexes,
  });

  const a11yTextMessage = React.useCallback(
    (value, column, rowIndex) => {
      return i18n.t("dataGrid.a11yTextMessage", {
        value,
        rowIndex,
        columnIndex: column,
      });
    },
    [i18n]
  );

  const handleScroll = React.useCallback(
    parameters => {
      const { scrollLeft, scrollTop } = parameters;

      if (refScrollHeader.current && stickyColumnsIndexes.length) {
        refScrollHeader.current.scrollTo({ left: scrollLeft, top: 0 });
      }

      // prevent re-scrolling when this scrollbar gets sync with the one in the sticky column
      if (refScrollHappenedBy.current === null && stickyColumnsIndexes.length) {
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
    },
    [stickyColumnsIndexes.length]
  );

  const handleScrollStickyColumns = React.useCallback(
    parameters => {
      const { scrollTop } = parameters;

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
  }, [gridId]);

  const handleFocusGrid = React.useCallback(() => {
    const $isBlurred = refContainer.current.querySelector(".grid--is-blurred");
    if ($isBlurred) $isBlurred.classList.remove("grid--is-blurred");
  }, []);

  const itemData = createItemData(
    ColumnDefinitions,
    data,
    gridId,
    hasZebraStripes,
    stickyColumnsIndexes,
    columnHeadersA11yText,
    a11yTextMessage
  );

  React.useEffect(() => {
    if (data.length && pageSize === null) {
      setPageSize(() => data.length);
    }
  }, [data.length, pageSize]);

  React.useEffect(() => {
    refPrevLastScrollHeight.current = refScrollGrid.current && refScrollGrid.current.scrollHeight;
  }, []);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          restoreHighlightFocus();
        },
        getVisibleIndexes: () => {
          return refVisibleIndexes.current;
        },
        getVisibleRows: () => {
          const { start, stop } = refVisibleIndexes.current;
          return data.slice(start, stop);
        },
      };
    },
    [data, restoreHighlightFocus]
  );

  const handleBlurGrid = React.useCallback(() => {
    const $isActive = refContainer.current.querySelector(".grid--is-active");
    if ($isActive) $isActive.classList.toggle("grid--is-blurred");
  }, []);

  const handleMouseUpGrid = React.useCallback(
    event => {
      handleClick({ data, ColumnDefinitions })(event);
    },
    [ColumnDefinitions, data, handleClick]
  );

  const handleKeyDownGrid = React.useCallback(
    event => {
      handleKeyDown({ data, ColumnDefinitions })(event);
    },
    [ColumnDefinitions, data, handleKeyDown]
  );

  const handleKeyUpGrid = React.useCallback(
    event => {
      handleKeyUp({ data, ColumnDefinitions })(event);
    },
    [ColumnDefinitions, data, handleKeyUp]
  );

  const handleItemsRendered = React.useCallback(
    ({ visibleRowStartIndex, visibleRowStopIndex }) => {
      refVisibleIndexes.current = {
        start: visibleRowStartIndex,
        stop: visibleRowStopIndex,
      };

      if (refCurrentPage.current === null) {
        refCurrentPage.current = 0;
      }

      if (extractedInfiniteScroll) {
        const { rowsOffset, onReachedOffset } = extractedInfiniteScroll.props;
        if (visibleRowStopIndex + rowsOffset > rowCount) {
          const currentPage = Math.floor(visibleRowStopIndex / pageSize);
          const nextPage = currentPage + 1;
          onReachedOffset({ currentPage, nextPage });
        }
      }
    },
    [extractedInfiniteScroll, pageSize, rowCount]
  );

  React.useEffect(() => {
    // Using lazy import because in some cases document.body is null but mouse-wheel
    // depends on document.body being not null. Therefore we need to lazy import the mouse-wheel library.
    import("mouse-wheel").then(module => {
      if (Array.isArray(data) && data.length) {
        const { default: mouseWheel } = module;
        mouseWheel(refScrollGrid.current, (dx, dy, dz, event) => {
          event.preventDefault();
          refScrollGrid.current.scrollTo(refScrollGrid.current.scrollLeft + dx, refScrollGrid.current.scrollTop + dy);
        });

        mouseWheel(refScrollStickyColumns.current, (dx, dy, dz, event) => {
          event.preventDefault();
          refScrollStickyColumns.current.scrollTo(
            refScrollStickyColumns.current.scrollLeft + dx,
            refScrollStickyColumns.current.scrollTop + dy
          );
        });
      }
    });
  }, [gridId, data]);

  React.useEffect(() => {
    if (!refContainer.current) return;

    if (refGridColumns.current && refGridStickyHeader.current && refGridHeader.current) {
      refGridHeader.current.resetAfterColumnIndex(0);
      refGridStickyHeader.current.resetAfterColumnIndex(0);
      refGridColumns.current.resetAfterColumnIndex(0);
    }

    ColumnDefinitions.forEach(columnDefinition => {
      refTotalColumnWidth.current += columnDefinition.props.width;
      if (columnDefinition.props.canGrow) {
        refTotalCanGrow.current += 1;
      }
    });

    // TODO: Figure out how scrollbarwidth can be calculated initially so that its not always 0
    refRemainingSpace.current = refContainer.current.offsetWidth - refTotalColumnWidth.current - 15;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateColumnWidth = columnIndex => {
    if (stickyColumnsIndexes.includes(columnIndex)) {
      return 0;
    }

    if (
      ColumnDefinitions[columnIndex].props.canGrow &&
      refTotalCanGrow.current !== 0 &&
      refRemainingSpace.current > 0
    ) {
      return ColumnDefinitions[columnIndex].props.width + refRemainingSpace.current / refTotalCanGrow.current;
    }

    return ColumnDefinitions[columnIndex].props.width;
  };

  if (data.length === 0) return null;

  return (
    <>
      <sc.Grid
        aria-colcount={columnCount}
        gridId={gridId}
        onBlur={handleBlurGrid}
        onFocus={handleFocusGrid}
        onKeyDown={handleKeyDownGrid}
        onKeyUp={handleKeyUpGrid}
        onMouseUp={handleMouseUpGrid}
        ref={refContainer}
        role="grid"
        tabIndex={0}
        $width={gridWidth}
        {...moreProps}
      >
        <sc.Flex>
          {/** STICKY HEADER */}
          <Grid
            columnCount={stickyColumnsIndexes.length}
            columnWidth={columnIndex => {
              return ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props.width;
            }}
            itemData={itemData}
            height={rowHeight}
            ref={refGridStickyHeader}
            rowCount={1}
            rowHeight={() => rowHeight}
            width={stickyGridWidth}
            overscanColumnCount={overscanColumnCount}
            overscanRowCount={overscanRowCount}
          >
            {StickyHeaderRow}
          </Grid>

          {/** HEADER */}

          <Grid
            className={`${gridId}-header`}
            columnCount={columnCount}
            columnWidth={calculateColumnWidth}
            height={rowHeight}
            innerElementType={innerElementType}
            itemData={itemData}
            outerElementType={outerElementType}
            overscanColumnCount={overscanColumnCount}
            overscanRowCount={overscanRowCount}
            ref={refGridHeader}
            rowCount={1}
            rowHeight={() => rowHeight}
            width={gridWidth - stickyGridWidth - scrollBarWidth}
          >
            {HeaderRow}
          </Grid>
        </sc.Flex>
        {/** STICKY COLUMNS */}
        <sc.Flex>
          <Grid
            className={`${gridId}-sticky-columns`}
            columnCount={stickyColumnsIndexes.length}
            columnWidth={columnIndex => {
              return ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props.width;
            }}
            height={calculatedTableHeight - scrollBarWidth}
            innerElementType={innerElementType}
            itemData={itemData}
            onItemsRendered={handleItemsRendered}
            onScroll={handleScrollStickyColumns}
            outerElementType={outerElementType}
            overscanColumnCount={overscanColumnCount}
            overscanRowCount={overscanRowCount}
            rowCount={rowCount}
            rowHeight={() => rowHeight}
            width={stickyGridWidth}
          >
            {StickyRow}
          </Grid>

          {/** COLUMNS */}

          <Grid
            className={`grid-${gridId}`}
            columnCount={columnCount}
            columnWidth={calculateColumnWidth}
            height={calculatedTableHeight}
            innerElementType={innerElementTypeMainGrid}
            itemData={itemData}
            onItemsRendered={handleItemsRendered}
            onScroll={handleScroll}
            outerElementType={outerElementTypeMainGrid}
            overscanColumnCount={overscanColumnCount}
            overscanRowCount={overscanRowCount}
            ref={refGridColumns}
            rowCount={rowCount}
            rowHeight={() => rowHeight}
            width={gridWidth - stickyGridWidth}
          >
            {Row}
          </Grid>
        </sc.Flex>
        <sc.FillerTopRight rowHeight={rowHeight} scrollBarWidth={scrollBarWidth} />
        <sc.FillerBottomLeft stickyGridWidth={stickyGridWidth} scrollBarWidth={scrollBarWidth} />
      </sc.Grid>
      <sc.Footer $width={gridWidth}>
        <sc.RowCount>
          Rows:{rowCount} Columns:{columnCount}
        </sc.RowCount>
      </sc.Footer>
      {extractedBasement ? (
        <End width={gridWidth} ref={refEnd}>
          {extractedBasement}
        </End>
      ) : null}
    </>
  );
});

DataGrid.ColumnDefinition = ColumnDefinition;
DataGrid.defaultProps = defaultProps;
DataGrid.InfiniteScroll = InfiniteScroll;
DataGrid.propTypes = propTypes;
DataGrid.Basement = Basement;

export default DataGrid;
