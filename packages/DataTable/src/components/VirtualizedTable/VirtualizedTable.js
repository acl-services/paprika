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

function getColumnPropsByCellIndex({ columnIndex, visibleColumnsInCorrectOrder, children }) {
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
  const {
    height,
    rowHeight,
    width,
    /* onExpandedRow, */
    onKeyDownArrow,
    onClickCell,
    /* LoadMoreButton, */
    dataTableID,
    children,
  } = props;
  const [activeCell, setActiveCell] = React.useState({ index: null });
  const refData = React.useRef(null);
  const refGrid = React.useRef(null);
  const refGridContainer = React.useRef(null);
  const refPageActiveIndex = React.useRef({ start: null, end: null });

  const { data, rowHeight: stateRowHeigth, columns, columnsOrder } = useDataTableState();
  refData.current = data;

  const delayedKeyDown = React.useRef(debounce((...args) => handleArrowKeys(...args), 15)).current;
  const dataForRendering = useData();
  const rowHeightValue = (stateRowHeigth && stateRowHeigth.value) || rowHeight;
  const visibleColumns = getVisibleColumns(columns);

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

  // const handleRowExpand = row => () => {
  //   onExpandedRow(row);
  // };

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex  */

  const totalRows = dataForRendering.length + 1;

  const visibleColumnsInCorrectOrder = React.useMemo(() => {
    return columnsOrder.reduce((accumulator, item) => {
      return visibleColumns.includes(item) ? [...accumulator, item] : accumulator;
    }, []);
  }, [columnsOrder, visibleColumns]);

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

  function handleScroll() {
    updatePageActiveIndex();
  }

  React.useEffect(() => {
    updatePageActiveIndex();
  }, [refGridContainer]);

  return (
    <div onKeyDown={handleKeyDown} tabIndex="0" ref={refGridContainer}>
      <Grid
        onScroll={handleScroll}
        columnCount={visibleColumns.length}
        columnWidth={columnIndex => {
          const column = getColumnPropsByCellIndex({ columnIndex, visibleColumnsInCorrectOrder, children });
          return Number.parseInt(column && column.width, 10) || 160;
        }}
        height={height}
        rowCount={totalRows}
        rowHeight={() => rowHeightValue}
        width={width}
        className="virtualize-rows-root"
        overscanRowCount={20}
        ref={refGrid}
      >
        {propsReactWindow => {
          const { columnIndex, rowIndex, style } = propsReactWindow;
          const column = columns[visibleColumnsInCorrectOrder[columnIndex]];
          const { id, isHidden } = column;
          const columnDefinition = React.Children.toArray(children).find(child => child.props.id === id);
          const index = `${dataTableID}${rowIndex}_${columnIndex}`;
          const cell = columnDefinition.props.cell;
          const header = columnDefinition.props.header;
          if (isHidden) return null;
          if (rowIndex === 0) {
            return (
              <CellHeader key={`cell_${index}`} style={style}>
                <InnerCell>
                  {typeof header === "function" ? header(null, null, refPageActiveIndex, column) : header}
                  <Options columnId={id} />
                </InnerCell>
              </CellHeader>
            );
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
  );
}
/* eslint-enable react/no-array-index-key */

VirtualizedTable.propTypes = propTypes;
VirtualizedTable.defaultProps = defaultProps;
