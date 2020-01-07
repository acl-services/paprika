import React from "react";
import PropTypes from "prop-types";
import { VariableSizeGrid as Grid } from "react-window";
import debounce from "lodash.debounce";
import handleArrowKeys, { arrowKeys } from "../../helpers/handleArrowKeys";
import "@paprika/helpers/lib/dom/elementScrollToPolyfill";
// import CheckBox from "../CheckBox";
import Cell from "../Cell";
import { CellHeader, InnerCell } from "../Cell/Cell.styles";
import Options from "../Options";
import { useDataTableState } from "../../context";
import useData from "../../hooks/useData";

const propTypes = {
  children: PropTypes.node.isRequired,
  dataTableID: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  // LoadMoreButton: PropTypes.node,
  onClickCell: PropTypes.func,
  // onExpandedRow: PropTypes.func,
  onKeyDownArrow: PropTypes.func,
  rowHeight: PropTypes.number.isRequired,
  width: PropTypes.number,
};

const defaultProps = {
  // LoadMoreButton: null,
  onClickCell: () => {},
  onKeyDownArrow: () => {},
  // onExpandedRow: () => {},
  width: 640,
};

function getColumnByColumnIndex({ columnIndex, visibleColumnsInCorrectOrder, children }) {
  const value = visibleColumnsInCorrectOrder[columnIndex];
  const index = visibleColumnsInCorrectOrder.indexOf(visibleColumnsInCorrectOrder.find(item => item === value));

  return children[index].props;
}

function getVisibleColumns(columns) {
  const visibleColumns = Object.keys(columns).filter(key => {
    return !columns[key].isHidden;
  });
  return visibleColumns;
}

export default function VirtualizedTable(props) {
  const { height, rowHeight, width, onKeyDownArrow, onClickCell, dataTableID, children } = props;
  const [activeCell, setActiveCell] = React.useState({ index: null });
  const refData = React.useRef(null);
  const refGrid = React.useRef(null);
  const refGridContainer = React.useRef(null);
  const refGridFixedColumns = React.useRef(null);
  const refGridHeader = React.useRef(null);
  const refPageActiveIndex = React.useRef({ start: null, end: null });

  const columnsHash = React.useMemo(() => {
    return React.Children.toArray(children).reduce((nextObj, column) => {
      nextObj[column.props.id] = column.props; // eslint-disable-line
      return nextObj;
    }, {});
  }, [children]);

  const stickyColumns = React.useMemo(() => {
    return React.Children.toArray(children)
      .map(column => {
        return column.props.isSticky ? column.props.id : null;
      })
      .filter(chunk => chunk);
  }, [children]);

  const stickyGridWidth = React.useMemo(() => {
    return stickyColumns.reduce((accum, current) => {
      const nextSum = (accum += columnsHash[current].width); //eslint-disable-line
      return nextSum;
    }, 0);
  }, [columnsHash, stickyColumns]);

  const { data, rowHeight: stateRowHeigth, columns, columnsOrder } = useDataTableState();

  refData.current = data;

  const dataForRendering = useData();
  const delayedKeyDown = React.useRef(debounce((...args) => handleArrowKeys(...args), 15)).current;

  const rowHeightValue = (stateRowHeigth && stateRowHeigth.value) || rowHeight;
  const visibleColumns = React.useMemo(() => {
    return getVisibleColumns(columns);
  }, [columns]);

  function handleKeyDown(event) {
    if (arrowKeys.includes(event.key)) {
      event.preventDefault();
      event.persist();
      delayedKeyDown({
        activeCell,
        columnsLength: visibleColumns.length,
        dataTableID,
        event,
        onKeyDownArrow,
        refData,
        rowHeight: rowHeightValue,
        setActiveCell,
      });
    }
  }

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex  */

  const totalRows = dataForRendering.length + 1;

  const visibleColumnsInCorrectOrder = React.useMemo(() => {
    return columnsOrder.reduce((accumulator, item) => {
      return visibleColumns.includes(item) ? [...accumulator, item] : accumulator;
    }, []);
  }, [columnsOrder, visibleColumns]);

  // we need a better way to do this line 143 is comments for now meanwhile we find a better way to do this.
  function updatePageActiveIndex() {
    if (refGridContainer.current) {
      const items = refGridContainer.current.querySelectorAll("[data-pka-cell-index]");
      if (items[0] && items[0].dataset) {
        // -1 is substracting the header row
        const start = Number.parseInt(items[0].dataset.pkaCellIndex.split("_")[0], 10);
        refPageActiveIndex.current.start = start >= 0 ? 0 : start - 1;
        refPageActiveIndex.current.end =
          Number.parseInt(items[items.length - 1].dataset.pkaCellIndex.split("_")[0], 10) - 1;
      }
    }
  }

  const handleScroll = React.useCallback(
    ({ scrollLeft, scrollTop, scrollUpdateWasRequested }) => {
      if (!scrollUpdateWasRequested) {
        refGridHeader.current.scrollTo({ scrollLeft, scrollTop: 0 });
        if (stickyColumns.length) {
          refGridFixedColumns.current.scrollTo({ scrollLeft: 0, scrollTop });
        }
      }

      updatePageActiveIndex();
    },
    [stickyColumns.length]
  );

  React.useEffect(() => {
    updatePageActiveIndex();
  }, [refGridContainer]);

  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" ref={refGridContainer}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {stickyColumns.length ? (
          <Grid
            columnCount={stickyColumns.length}
            columnWidth={columnIndex => {
              const column = columnsHash[stickyColumns[columnIndex]];
              return Number.parseInt(column && column.width, 10) || 160;
            }}
            ref={refGridHeader}
            height={rowHeight}
            rowCount={1}
            rowHeight={() => rowHeightValue}
            width={stickyGridWidth}
            className="virtualize-header-root"
            style={{ overflow: "hidden" }}
          >
            {propsReactWindow => {
              const { columnIndex, rowIndex, style } = propsReactWindow;
              const id = stickyColumns[columnIndex];
              const columnDefinition = columnsHash[id];

              const index = `${dataTableID}_header_fixed_${rowIndex}_${columnIndex}`;
              const header = columnDefinition.header;

              return (
                <CellHeader key={`cell_${index}`} style={style}>
                  <InnerCell>
                    {typeof header === "function" ? header(null, null, refPageActiveIndex, columns[id]) : header}
                    <Options columnId={id} />
                  </InnerCell>
                </CellHeader>
              );
            }}
          </Grid>
        ) : null}
        <Grid
          columnCount={visibleColumns.length}
          columnWidth={columnIndex => {
            const column = getColumnByColumnIndex({ columnIndex, visibleColumnsInCorrectOrder, children });
            if (stickyColumns.includes(column.id)) {
              return 0;
            }
            return Number.parseInt(column && column.width, 10) || 160;
          }}
          ref={refGridHeader}
          height={rowHeight}
          rowCount={1}
          rowHeight={() => rowHeightValue}
          width={width}
          className="virtualize-header-root"
          style={{ overflow: "hidden" }}
        >
          {propsReactWindow => {
            const { columnIndex, rowIndex, style } = propsReactWindow;
            const column = columns[visibleColumnsInCorrectOrder[columnIndex]];
            const { id, isHidden } = column;
            if (stickyColumns.includes(id)) {
              return null;
            }

            const columnDefinition = columnsHash[id];
            const index = `${dataTableID}_header_${rowIndex}_${columnIndex}`;
            const header = columnDefinition.header;
            if (isHidden) return null;

            return (
              <CellHeader key={`cell_${index}`} style={style}>
                <InnerCell>
                  {typeof header === "function" ? header(null, null, refPageActiveIndex, column) : header}
                  <Options columnId={id} />
                </InnerCell>
              </CellHeader>
            );
          }}
        </Grid>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {stickyColumns.length ? (
          <Grid
            columnCount={stickyColumns.length}
            columnWidth={columnIndex => {
              const column = columnsHash[stickyColumns[columnIndex]];
              return Number.parseInt(column && column.width, 10) || 160;
            }}
            ref={refGridFixedColumns}
            height={height}
            rowCount={totalRows}
            rowHeight={rowIndex => {
              if (rowIndex === 0) return 0;
              return rowHeightValue;
            }}
            width={stickyGridWidth}
            style={{ overflow: "hidden" }}
          >
            {propsReactWindow => {
              const { columnIndex, rowIndex, style } = propsReactWindow;
              const columnDefinition = columnsHash[stickyColumns[columnIndex]];

              const index = `${dataTableID}_fixed_${rowIndex}_${columnIndex}`;
              const cell = columnDefinition.cell;
              if (rowIndex === 0) {
                return null;
              }

              // dataForRendering[rowIndex - 1] we need to remove 1 because we added the header
              return (
                <Cell
                  key={`cell_${index}`}
                  cellIndex={index}
                  activeCellIndex={activeCell.index}
                  setActiveCell={setActiveCell}
                  onClickCell={onClickCell}
                  columnIndex={columnIndex}
                  rowIndex={rowIndex}
                  style={style}
                  refData={refData}
                  data-pka-cell-index={`${rowIndex - 1}_${columnIndex}`}
                >
                  {typeof cell === "function"
                    ? cell(dataForRendering[rowIndex - 1], rowIndex - 1, refPageActiveIndex)
                    : dataForRendering[rowIndex - 1][cell]}
                </Cell>
              );
            }}
          </Grid>
        ) : null}
        <Grid
          onScroll={handleScroll}
          columnCount={visibleColumns.length}
          columnWidth={columnIndex => {
            const column = getColumnByColumnIndex({ columnIndex, visibleColumnsInCorrectOrder, children });
            if (stickyColumns.includes(column.id)) {
              return 0;
            }

            return Number.parseInt(column && column.width, 10) || 160;
          }}
          height={height}
          rowCount={totalRows}
          rowHeight={rowIndex => {
            if (rowIndex === 0) return 0;
            return rowHeightValue;
          }}
          width={width}
          className="virtualize-rows-root"
          overscanCount={40}
          ref={refGrid}
        >
          {propsReactWindow => {
            const { columnIndex, rowIndex, style } = propsReactWindow;
            const column = columns[visibleColumnsInCorrectOrder[columnIndex]];
            const { id, isHidden } = column;

            const columnDefinition = columnsHash[id];

            const index = `${dataTableID}${rowIndex}_${columnIndex}`;
            const cell = columnDefinition.cell;
            if (isHidden) return null;

            if (stickyColumns.includes(column.id)) {
              return null;
            }

            if (rowIndex === 0) {
              return null;
            }

            // dataForRendering[rowIndex - 1] we need to remove 1 because we added the header

            return (
              <Cell
                key={`cell_${index}`}
                cellIndex={index}
                activeCellIndex={activeCell.index}
                setActiveCell={setActiveCell}
                onClickCell={onClickCell}
                columnIndex={columnIndex}
                rowIndex={rowIndex}
                style={style}
                refData={refData}
                data-pka-cell-index={`${rowIndex - 1}_${columnIndex}`}
              >
                {typeof cell === "function"
                  ? cell(dataForRendering[rowIndex - 1], rowIndex - 1, refPageActiveIndex)
                  : dataForRendering[rowIndex - 1][cell]}
              </Cell>
            );
          }}
        </Grid>
      </div>
    </div>
  );
}
/* eslint-enable react/no-array-index-key */

VirtualizedTable.propTypes = propTypes;
VirtualizedTable.defaultProps = defaultProps;
