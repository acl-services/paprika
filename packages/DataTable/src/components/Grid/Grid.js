import React from "react";
import PropTypes from "prop-types";
import { VariableSizeGrid as GridReactWindow } from "react-window";
import Cell from "../Cell";

function getColumnPropsByCellIndex({ columnIndex, visibleColumnsInCorrectOrder, children }) {
  const value = visibleColumnsInCorrectOrder[columnIndex];
  const index = visibleColumnsInCorrectOrder.indexOf(visibleColumnsInCorrectOrder.find(item => item === value));

  return children[index].props;
}

const propTypes = {
  activeCell: PropTypes.shape({ index: PropTypes.number }).isRequired,
  columns: PropTypes.shape({}).isRequired,
  columnsDefinitionChildren: PropTypes.node.isRequired,
  dataForRendering: PropTypes.shape({}).isRequired,
  dataTableID: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  onClickCell: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  refData: PropTypes.shape({}).isRequired,
  refPageActiveIndex: PropTypes.shape({}).isRequired,
  rowHeightValue: PropTypes.number.isRequired,
  setActiveCell: PropTypes.func.isRequired,
  stickyColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalRows: PropTypes.number.isRequired,
  visibleColumns: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibleColumnsInCorrectOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  width: PropTypes.number.isRequired,
};

const Grid = React.forwardRef((props, ref) => {
  const {
    activeCell,
    columns,
    columnsDefinitionChildren,
    dataForRendering,
    dataTableID,
    height,
    onClickCell,
    onScroll,
    refData,
    refPageActiveIndex,
    rowHeightValue,
    setActiveCell,
    stickyColumns,
    totalRows,
    visibleColumns,
    visibleColumnsInCorrectOrder,
  } = props;
  return (
    <GridReactWindow
      onScroll={onScroll}
      columnCount={visibleColumns.length}
      columnWidth={columnIndex => {
        const column = getColumnPropsByCellIndex({
          columnIndex,
          visibleColumnsInCorrectOrder,
          columnsDefinitionChildren,
        });
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
      overscanRowCount={20}
      ref={ref}
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
    </GridReactWindow>
  );
});

Grid.propTypes = propTypes;

export default Grid;
