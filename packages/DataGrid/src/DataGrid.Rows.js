/* eslint-disable react/prop-types */
import React from "react";
import { areEqual } from "react-window";
import memoize from "memoize-one";
import Cell from "./components/Cell";
import { CellHeader } from "./DataGrid.styles";

export const createItemData = memoize(
  (
    ColumnDefinitions,
    data,
    gridId,
    hasZebraStripes,
    stickyColumnsIndexes,
    columnHeadersA11yText,
    a11yTextMessage,
    borderType
  ) => ({
    ColumnDefinitions,
    data,
    gridId,
    hasZebraStripes,
    stickyColumnsIndexes,
    columnHeadersA11yText,
    a11yTextMessage,
    borderType,
  })
);

export const Row = React.memo(({ data: RowData, rowIndex, columnIndex, style }) => {
  // Data passed to List as "itemData" is available as props.data : RowData
  const {
    ColumnDefinitions,
    data,
    stickyColumnsIndexes,
    gridId,
    hasZebraStripes,
    columnHeadersA11yText,
    a11yTextMessage,
    borderType,
  } = RowData;

  const column = ColumnDefinitions[columnIndex].props;
  const cellA11yText =
    typeof column.cell === "function"
      ? column.cellA11yText &&
        column.cellA11yText({
          row: data[rowIndex],
          rowIndex,
          columnIndex,
        })
      : data[rowIndex][column.cell];

  const headerA11yText = columnHeadersA11yText[columnIndex];
  const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

  if (stickyColumnsIndexes.includes(columnIndex)) {
    return null;
  }

  return (
    <Cell
      a11yText={a11yText}
      borderType={borderType}
      column={column}
      columnIndex={columnIndex}
      data={data}
      gridId={gridId}
      hasZebraStripes={hasZebraStripes}
      rowIndex={rowIndex}
      style={style}
    />
  );
}, areEqual);

export const StickyRow = React.memo(({ data: RowData, columnIndex, rowIndex, style }) => {
  const {
    ColumnDefinitions,
    data,
    stickyColumnsIndexes,
    gridId,
    hasZebraStripes,
    columnHeadersA11yText,
    a11yTextMessage,
    borderType,
  } = RowData;

  const column = ColumnDefinitions[stickyColumnsIndexes[columnIndex]].props;
  const cellA11yText =
    typeof column.cell === "function"
      ? column.cellA11yText &&
        typeof column.cellA11yText === "function" &&
        column.cellA11yText({ row: data[rowIndex], rowIndex, columnIndex })
      : data[rowIndex][column.cell];
  const headerA11yText = columnHeadersA11yText[columnIndex];
  const a11yText = a11yTextMessage(cellA11yText, headerA11yText, rowIndex);

  return (
    <Cell
      a11yText={a11yText}
      borderType={borderType}
      column={column}
      columnIndex={columnIndex}
      data={data}
      gridId={gridId}
      hasZebraStripes={hasZebraStripes}
      rowIndex={rowIndex}
      style={style}
    />
  );
}, areEqual);

export const HeaderRow = React.memo(({ data: RowData, columnIndex, style }) => {
  const { ColumnDefinitions, stickyColumnsIndexes, borderType } = RowData;
  const { header, headerProps } = ColumnDefinitions[columnIndex].props;

  if (stickyColumnsIndexes.includes(columnIndex)) return null;
  const { style: styleProps = {}, ...moreProps } = typeof headerProps === "function" ? headerProps({ header }) : {};

  return (
    <CellHeader role="columnheader" style={{ ...style, ...styleProps }} {...moreProps} borderType={borderType}>
      {typeof header === "function" ? header() : header}
    </CellHeader>
  );
}, areEqual);

export const StickyHeaderRow = React.memo(({ data: RowData, columnIndex, style }) => {
  const { ColumnDefinitions, borderType } = RowData;
  const { header, headerProps } = ColumnDefinitions[columnIndex].props;

  const { style: styleProps = {}, ...moreProps } = typeof headerProps === "function" ? headerProps({ header }) : {};

  return (
    <CellHeader role="columnheader" style={{ ...style, ...styleProps }} {...moreProps} borderType={borderType}>
      {typeof header === "function" ? header() : header}
    </CellHeader>
  );
}, areEqual);
