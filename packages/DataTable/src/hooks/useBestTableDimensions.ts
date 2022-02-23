import React from "react";
import debounce from "lodash.debounce";
import convertSizeStringToNumber, { Direction } from "../helpers/convertSizeStringToNumber";

const DEBOUNCE_DELAY = 300;

type Dimensions = {
  width: number;
  height: number;
  shouldHaveHorizontalScroll: boolean;
};

export default function useBestTableDimensions({
  tableRef,
  componentRef,
  maxHeight,
  maxWidth,
  shouldResizeWithViewport,
}: {
  tableRef: React.RefObject<HTMLDivElement>;
  componentRef: React.RefObject<unknown>;
  maxHeight: string;
  maxWidth: string;
  shouldResizeWithViewport: boolean;
}): { dimensions: Dimensions; resetDimension: () => void } {
  const maxWidthInNumber = React.useMemo(() => convertSizeStringToNumber(maxWidth, Direction.width), [maxWidth]);
  const maxHeightInNumber = React.useMemo(() => convertSizeStringToNumber(maxHeight, Direction.height), [maxHeight]);
  const [dimensions, setDimensions] = React.useState<Dimensions>(() => ({
    width: maxWidthInNumber,
    height: maxHeightInNumber,
    shouldHaveHorizontalScroll: false,
  }));

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

      return {
        width: Math.min(maxWidthInNumber, realWidth),
        height: Math.min(maxHeightInNumber, realHeight),
        shouldHaveHorizontalScroll: maxWidthInNumber < realWidth,
      };
    });
  }, [maxHeightInNumber, maxWidthInNumber, tableRef]);

  React.useLayoutEffect(() => {
    resetDimension();
    const debouncedReset = debounce(resetDimension, DEBOUNCE_DELAY);

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

  return { dimensions, resetDimension };
}
