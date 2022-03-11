import React from "react";
import debounce from "lodash.debounce";
import convertSizeStringToNumber, { Direction } from "../helpers/convertSizeStringToNumber";

const DEBOUNCE_DELAY = 300;

type Dimensions = {
  width: number;
  height: number;
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
  const [dimensions, setDimensions] = React.useState<Dimensions>(() => ({
    width: convertSizeStringToNumber(maxWidth, Direction.width),
    height: convertSizeStringToNumber(maxHeight, Direction.height),
  }));

  const resetDimension = React.useCallback(() => {
    if (!tableRef.current) return;

    const theadEl = tableRef.current.querySelector('[data-pka-anchor="dataTable.thead"]');
    const tbodyEl = tableRef.current.querySelector('[data-pka-anchor="dataTable.tbody"]');
    const variableList = tableRef.current.getElementsByClassName("variable-size-list")!;

    if (!theadEl || !tbodyEl) {
      return;
    }

    setDimensions(() => {
      const realWidth = theadEl.clientWidth;
      const realHeight = theadEl.clientHeight + tbodyEl.clientHeight;
      const maxWidthInNumber = convertSizeStringToNumber(maxWidth, Direction.width);
      const maxHeightInNumber = convertSizeStringToNumber(maxHeight, Direction.height);
      const scrollbarWidth = variableList[0].offsetWidth - variableList[0].clientWidth + 2;
      const realWidthPlusScrollbarWidth = realWidth + scrollbarWidth;

      return {
        width: Math.min(maxWidthInNumber, realWidthPlusScrollbarWidth),
        height: Math.min(maxHeightInNumber, realHeight),
      };
    });
  }, [maxHeight, maxWidth, tableRef]);

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
