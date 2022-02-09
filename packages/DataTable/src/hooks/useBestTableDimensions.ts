import React from "react";
import debounce from "lodash.debounce";
import convertSizeStringToNumber, { Direction } from "../helpers/convertSizeStringToNumber";

type Dimensions = {
  width: number;
  height: number;
  shouldHaveHorizontalScroll: boolean;
};

export default function useBestTableDimensions({
  tableRef,
  componentRef,
  height: maxHeight,
  width: maxWidth,
  shouldResizeWithViewport,
}: {
  tableRef: React.RefObject<HTMLDivElement>;
  componentRef: React.RefObject<unknown>;
  height: string;
  width: string;
  shouldResizeWithViewport: boolean;
}): Dimensions {
  const [dimensions, setDimensions] = React.useState<Dimensions>({
    width: convertSizeStringToNumber(maxWidth, Direction.width),
    height: convertSizeStringToNumber(maxHeight, Direction.height),
    shouldHaveHorizontalScroll: false,
  });

  const resetDimension = React.useCallback(() => {
    if (!tableRef.current) return;

    const theadEl = tableRef.current.querySelector('[data-pka-anchor="dataTable.thead"]');
    const tbodyEl = tableRef.current.querySelector('[data-pka-anchor="dataTable.tbody"]');

    if (!theadEl || !tbodyEl) {
      return;
    }

    setDimensions(() => {
      const realWidth = theadEl.clientWidth;
      const realHeight = theadEl.clientHeight + tbodyEl.clientHeight;
      const maxWidthInNumber = convertSizeStringToNumber(maxWidth, Direction.width);
      const maxHeightInNumber = convertSizeStringToNumber(maxHeight, Direction.height);

      return {
        width: Math.min(maxWidthInNumber, realWidth),
        height: Math.min(maxHeightInNumber, realHeight),
        shouldHaveHorizontalScroll: maxWidthInNumber < realWidth,
      };
    });
  }, [maxHeight, maxWidth, tableRef]);

  React.useLayoutEffect(() => {
    resetDimension();
    const debouncedReset = debounce(resetDimension, 300);

    if (shouldResizeWithViewport) {
      window.addEventListener("resize", debouncedReset);
    }

    return () => {
      if (shouldResizeWithViewport) {
        window.removeEventListener("resize", debouncedReset);
      }
    };
  }, [resetDimension, shouldResizeWithViewport]);

  React.useImperativeHandle(componentRef, () => ({
    resize: resetDimension,
  }));

  return dimensions;
}
