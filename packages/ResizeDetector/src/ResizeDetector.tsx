/* eslint-disable react/require-default-props */
import React from "react";
import useResizeObserver from "use-resize-observer/polyfilled";
import { useCallbackDebouncer, ShirtSizes } from "@paprika/helpers";
import * as sc from "./ResizeDetector.styles";

// TODO: remove this hack after @paprika/helpers is migrated to TS
const ShirtSizes_: any = ShirtSizes;

export type Dimensions = { width: number; height: number };
export type ResizeDetectorContextValue = { width: number; height: number; breakpointSize: string };

interface ResizeDetectorProps {
  /** The width at which the size will change from the default (medium) to large. 0 or null value will disable. */
  breakpointLarge?: number;

  /** The width at which the size will change from small to the default (medium). 0 or null value will disable. */
  breakpointSmall?: number;

  /** Content to be wrapped which will be provided with live dimensions and (tshirt) size values.  */
  children?: React.ReactNode | ((context: ResizeDetectorContextValue) => React.ReactNode);

  /** The ms delay before firing resize events / making live updates. */
  debounceDelay?: number;

  /** If the container will match its parent's width like a block level element (width: 100%). */
  isFullWidth?: boolean;

  /** If the container will match its parent's height (height: 100%). */
  isFullHeight?: boolean;

  /** Callback that fires when the size change crosses a breakpoint threshold (returns new T-Shirt size value).  */
  onBreak?: (breakpointSize: string) => void;

  /** Callback that fires when the size changes (returns new width + height values).  */
  onResize?: (dimensions: Dimensions) => void;
}

const MAX_WAIT = 1000;

const ResizeContext = React.createContext({ width: 0, height: 0, breakpointSize: ShirtSizes_.MEDIUM });

export function useResizeDetector(): ResizeDetectorContextValue {
  return React.useContext(ResizeContext);
}

function getBreakpointSize(width: number, breakpointSmall: number, breakpointLarge: number): string {
  let size = ShirtSizes_.MEDIUM;
  if (breakpointSmall && width < breakpointSmall) {
    size = ShirtSizes_.SMALL;
  } else if (breakpointLarge && width >= breakpointLarge) {
    size = ShirtSizes_.LARGE;
  }
  return size;
}

const noop = () => null;

function ResizeDetector({
  breakpointSmall = 360,
  breakpointLarge = 768,
  children,
  debounceDelay = 30,
  onBreak = noop,
  onResize = noop,
  isFullWidth = true,
  isFullHeight = false,
  ...moreProps
}: ResizeDetectorProps): JSX.Element {
  const refContainer = React.useRef<HTMLSpanElement>(null);
  const debounceCallback = useCallbackDebouncer(debounceDelay);
  const [dimensions, setDimensions] = React.useState<Dimensions>({ width: 0, height: 0 });
  const breakpointSize = getBreakpointSize(dimensions.width, breakpointSmall, breakpointLarge);

  useResizeObserver({
    onResize: ({ width, height }) => {
      debounceCallback(() => handleResize({ width: width || 0, height: height || 0 }), { maxWait: MAX_WAIT });
    },
    ref: refContainer,
  });

  function handleResize({ width, height }: Dimensions) {
    setDimensions({ width, height });
    onResize({ width, height });

    const newSize = getBreakpointSize(width, breakpointSmall, breakpointLarge);
    if (newSize !== breakpointSize) {
      onBreak(newSize);
    }
  }

  React.useLayoutEffect(() => {
    if (!refContainer.current) {
      return;
    }

    const { width, height } = refContainer.current.getBoundingClientRect();
    setDimensions({ width, height });
  }, [breakpointSmall, breakpointLarge, refContainer]);

  const contextValue = React.useMemo(() => ({ ...dimensions, breakpointSize }), [dimensions, breakpointSize]);

  return (
    <sc.ResizeDetector
      data-pka-anchor="resizeDetector"
      isFullWidth={isFullWidth}
      isFullHeight={isFullHeight}
      {...moreProps}
      ref={refContainer}
    >
      <ResizeContext.Provider value={contextValue}>
        {typeof children === "function" ? children(contextValue) : children}
      </ResizeContext.Provider>
    </sc.ResizeDetector>
  );
}

ResizeDetector.displayName = "ResizeDetector";

export default ResizeDetector;
