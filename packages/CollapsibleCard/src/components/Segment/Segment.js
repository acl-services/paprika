import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Segment.styles";

export default function Segment(props) {
  const { children, width, ...moreProps } = props;
  return (
    <sc.Segment width={width} {...moreProps}>
      {children}
    </sc.Segment>
  );
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
