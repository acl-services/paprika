import React from "react";

type Dimensions = {
  width?: number;
  height?: number;
};
/**
 * @param tableRef
 * @param itemCount The number of data items
 * @param height If defined, it will override any calculated value
 * @param width If defined, it will override any calculated value
 */
export default function useTableDimensions(
  tableRef: React.RefObject<HTMLDivElement>,
  itemCount: number,
  height?: number,
  width?: number | string
): {
  getTableHeight: (maxHeight: number) => number;
  getTableWidth: (maxWidth: number) => number | string;
} {
  const [dimensions, setDimensions] = React.useState<Dimensions>({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    if (height !== undefined && width !== undefined) {
      return;
    }

    if (!tableRef.current) {
      return;
    }

    const tbodyEl = tableRef.current.querySelector('[data-pka-anchor="dataTable.tbody"]');
    const theadEl = tableRef.current.querySelector('[data-pka-anchor="dataTable.thead"]');

    if (!tbodyEl || !theadEl) {
      return;
    }

    setDimensions(prev => {
      const bodyRect = tbodyEl.getBoundingClientRect();
      const headRect = theadEl.getBoundingClientRect();

      return {
        width: headRect.width,
        height: prev.height !== undefined && itemCount > 100 ? prev.height : bodyRect.height + headRect.height,
      };
    });
  }, [height, itemCount, tableRef, width]);

  function getTableHeight(maxHeight: number) {
    if (height !== undefined) {
      return height;
    }

    if (dimensions.height === undefined) {
      return maxHeight;
    }

    return Math.min(dimensions.height, maxHeight);
  }

  function getTableWidth(maxWidth: number) {
    if (width !== undefined) {
      return width;
    }

    if (dimensions.width === undefined) {
      return maxWidth;
    }

    return Math.min(dimensions.width, maxWidth);
  }

  return {
    getTableHeight,
    getTableWidth,
  };
}
