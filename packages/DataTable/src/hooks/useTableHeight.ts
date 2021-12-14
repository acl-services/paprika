import React from "react";

export default function useTableHeight(
  tableRef: React.RefObject<HTMLDivElement>,
  itemCount?: number
): { getTableHeight: (maxHeight: number) => number } {
  const tableHeightRef = React.useRef<number | undefined>();

  React.useLayoutEffect(() => {
    if (!tableRef.current) {
      return;
    }

    const tableEl = tableRef.current;

    const tbodyEl = tableEl.querySelector('[data-pka-anchor="dataTable.tbody"]');
    const theadEl = tableEl.querySelector('[data-pka-anchor="dataTable.thead"]');

    if (tbodyEl && theadEl) {
      const height = tbodyEl.getBoundingClientRect().height + theadEl.getBoundingClientRect().height;
      console.log("height", height);
      tableHeightRef.current = height;
    }
  }, [itemCount, tableRef]);

  function getTableHeight(maxHeight: number) {
    if (tableHeightRef.current === undefined) {
      return maxHeight;
    }

    return tableHeightRef.current < maxHeight ? tableHeightRef.current : maxHeight;
  }

  return {
    getTableHeight,
  };
}
