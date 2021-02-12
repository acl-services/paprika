import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Segment.styles";

export default function Segment(props) {
  const { children, width } = props;
  return <sc.Segment width={width}>{children}</sc.Segment>;
}

const propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
};

const defaultProps = {
  children: null,
  width: null,
};

Segment.propTypes = propTypes;
Segment.defaultProps = defaultProps;
Segment.displayName = "CollapsibleCard.Segment";
