import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Resizer.styles";

const propTypes = {
  children: PropTypes.node,
  initHeight: PropTypes.number,
  initWidth: PropTypes.number,
  onResizeStop: PropTypes.func,
};

const defaultProps = {
  children: null,
  initHeight: 360,
  initWidth: 480,
  onResizeStop: () => {},
};

const Resizer = props => {
  const { children, initWidth, initHeight, onResizeStop, ...moreProps } = props;

  return (
    <sc.Resizer {...moreProps} width={initWidth} height={initHeight} onResizeStop={onResizeStop}>
      {children}
    </sc.Resizer>
  );
};

Resizer.propTypes = propTypes;
Resizer.defaultProps = defaultProps;

export default Resizer;
