import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Segment.styles";

export default function Segment(props) {
  const { children, ...moreProps } = props;
  return <sc.Segment {...moreProps}>{children}</sc.Segment>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Segment.propTypes = propTypes;
Segment.defaultProps = defaultProps;
Segment.displayName = "CollapsibleCard.Segment";
