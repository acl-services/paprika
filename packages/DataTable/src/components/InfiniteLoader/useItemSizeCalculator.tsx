import React from "react";
import RowHeightHelper from "../../helpers/rowHeightHelper";
import { useReactTableContext } from "../ReactTableContext";
import { TableColumnsWidth, TableDataItemType } from "../../types";

const rowHeightHelper = new RowHeightHelper();

export default function useItemSizeCalculator(
  data: TableDataItemType[],
  getRowHeight: ((index: number) => number) | null
): { getItemSize: (index: number) => number; clearRowHeights: (indexes: number[]) => void } {
  const rowHeights = React.useRef<Record<number, number>>({});
  const { allColumns } = useReactTableContext();

  const columnsWidth = React.useMemo(
    () =>
      allColumns.reduce(
        (res, column) => {
          res[column.id] = column.totalWidth;
          return res;
        },
        {} as TableColumnsWidth
      ),
    [allColumns]
  );

  const clearRowHeights = React.useCallback(
    (indexes: number[]) => indexes.forEach(index => delete rowHeights.current[index]),
    []
  );

  function getItemSize(index: number): number {
    if (!rowHeights.current[index]) {
      const newRowHeight =
        getRowHeight && typeof getRowHeight === "function"
          ? getRowHeight(index)
          : rowHeightHelper.calculate({
              rowData: data[index],
              columnsWidth,
            });

      if (!data[index]) {
        return newRowHeight;
      }

      rowHeights.current[index] = newRowHeight;
    }

    return rowHeights.current[index];
  }

  return { getItemSize, clearRowHeights };
}
