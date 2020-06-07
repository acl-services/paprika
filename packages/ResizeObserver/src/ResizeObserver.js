import React from "react";
import PropTypes from "prop-types";
import useResizeObserver from "use-resize-observer/polyfilled";
import debounce from "lodash.debounce";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import * as sc from "./ResizeObserver.styles";

const propTypes = {
  breakpointLarge: PropTypes.number,
  breakpointSmall: PropTypes.number,
  children: PropTypes.node,
  debounceDelay: PropTypes.number,
  isFullWidth: PropTypes.bool,
  isFullHeight: PropTypes.bool,
  onBreak: PropTypes.func,
  onResize: PropTypes.func,
};

const defaultProps = {
  breakpointLarge: 768,
  breakpointSmall: 360,
  children: null,
  debounceDelay: 200,
  isFullWidth: true,
  isFullHeight: false,
  onBreak: () => {},
  onResize: () => {},
};

const MAX_WAIT = 1000;

const ResizeContext = React.createContext();

export function useObservedDimensions() {
  const { width, height } = React.useContext(ResizeContext);
  return { width, height };
}

export function useBreakpoints() {
  const { size } = React.useContext(ResizeContext);
  return { size };
}

function getSize(width, breakpointSmall, breakpointLarge) {
  let size = ShirtSizes.MEDIUM;
  if (breakpointSmall && width <= breakpointSmall) {
    size = ShirtSizes.SMALL;
  } else if (breakpointLarge && width >= breakpointLarge) {
    size = ShirtSizes.LARGE;
  }
  return size;
}

function ResizeObserver(props) {
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

  useResizeObserver({
    ref: refContainer,
    onResize: debounce(handleResize, debounceDelay, { maxWait: MAX_WAIT }),
  });

  React.useLayoutEffect(() => {
    const { width, height } = refContainer.current.getBoundingClientRect();
    setDimensions({ width, height });
    setSize(getSize(width, breakpointSmall, breakpointLarge));
  }, [children, breakpointSmall, breakpointLarge]);

  return (
    <sc.ResizeObserver data-pka-anchor="resize-observer" {...moreProps} ref={refContainer}>
      <ResizeContext.Provider value={{ width, height, size, breakpointSmall, breakpointLarge }}>
        {children}
      </ResizeContext.Provider>
    </sc.ResizeObserver>
  );
}

ResizeObserver.displayName = "ResizeObserver";
ResizeObserver.propTypes = propTypes;
ResizeObserver.defaultProps = defaultProps;

export default ResizeObserver;
