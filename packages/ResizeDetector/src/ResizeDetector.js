import React from "react";
import PropTypes from "prop-types";
import useResizeDetector from "use-resize-observer/polyfilled";
import debounce from "lodash.debounce";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./ResizeDetector.styles";

const propTypes = {
  /** The width at which the size will change from the default (medium) to large. 0 or null value will disable. */
  breakpointLarge: PropTypes.number,

  /** The width at which the size will change from small to the default (medium). 0 or null value will disable. */
  breakpointSmall: PropTypes.number,

  /** Content to be wrapped which will be provided with live dimensions and (tshirt) size values.  */
  children: PropTypes.node,

  /** The ms delay before firing resize events / making live updates. */
  debounceDelay: PropTypes.number,

  /** If the container will match its parent's width like a block level element (width: 100%). */
  isFullWidth: PropTypes.bool,

  /** If the container will match its parent's height (height: 100%). */
  isFullHeight: PropTypes.bool,

  /** Callback that fires when the size change crosses a breakpoint threshold (returns new size value).  */
  onBreak: PropTypes.func,

  /** Callback that fires when the size changes (returns new width + height values).  */
  onResize: PropTypes.func,
};

const defaultProps = {
  breakpointLarge: 768,
  breakpointSmall: 360,
  children: null,
  debounceDelay: 30,
  isFullWidth: true,
  isFullHeight: false,
  onBreak: () => {},
  onResize: () => {},
};

const MAX_WAIT = 1000;

const ResizeContext = React.createContext();

export function useDimensions() {
  const { width, height } = React.useContext(ResizeContext);
  return { width, height };
}

export function useBreakpoints() {
  const { size } = React.useContext(ResizeContext);
  return { size };
}

function getSize(width, breakpointSmall, breakpointLarge) {
  let size = ShirtSizes.MEDIUM;
  if (breakpointSmall && width < breakpointSmall) {
    size = ShirtSizes.SMALL;
  } else if (breakpointLarge && width >= breakpointLarge) {
    size = ShirtSizes.LARGE;
  }
  return size;
}

function ResizeDetector(props) {
  const { breakpointSmall, breakpointLarge, children, debounceDelay, onBreak, onResize, ...moreProps } = props;
  const refContainer = React.useRef(null);
  const [{ width, height }, setDimensions] = React.useState({});
  const [size, setSize] = React.useState(null);

  function handleResize({ width, height }) {
    setDimensions({ width, height });
    onResize({ width, height });

    const newSize = getSize(width, breakpointSmall, breakpointLarge);
    if (newSize !== size) {
      setSize(newSize);
      onBreak(newSize);
    }
  }

  useResizeDetector({
    ref: refContainer,
    onResize: debounce(handleResize, debounceDelay, { maxWait: MAX_WAIT }),
  });

  React.useLayoutEffect(() => {
    const { width, height } = refContainer.current.getBoundingClientRect();
    setDimensions({ width, height });
    setSize(getSize(width, breakpointSmall, breakpointLarge));
  }, [breakpointSmall, breakpointLarge]);

  return (
    <sc.ResizeDetector data-pka-anchor="resize-observer" {...moreProps} ref={refContainer}>
      <ResizeContext.Provider value={{ width, height, size }}>{children}</ResizeContext.Provider>
    </sc.ResizeDetector>
  );
}

ResizeDetector.displayName = "ResizeDetector";
ResizeDetector.propTypes = propTypes;
ResizeDetector.defaultProps = defaultProps;

export default ResizeDetector;
