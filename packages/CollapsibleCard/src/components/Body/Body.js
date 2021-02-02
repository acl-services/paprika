import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Body.styles";

export default function Body(props) {
  const { children, ...moreProps } = props;
  return <sc.Body {...moreProps}>{children}</sc.Body>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;
Body.displayName = "CollapsibleCard.Body";
