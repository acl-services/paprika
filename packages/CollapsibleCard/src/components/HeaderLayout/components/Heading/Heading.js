import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Heading.styles";

export default function HeaderLayoutHeading(props) {
  return <sc.HeaderLayoutHeading level={4}>{props.children}</sc.HeaderLayoutHeading>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

HeaderLayoutHeading.propTypes = propTypes;
HeaderLayoutHeading.defaultProps = defaultProps;
HeaderLayoutHeading.displayName = "HeaderLayout.Heading";
