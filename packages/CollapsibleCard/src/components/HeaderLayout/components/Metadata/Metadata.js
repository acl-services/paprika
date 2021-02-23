import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Metadata.styles";

export default function Metadata(props) {
  const { children } = props;
  return <sc.Metadata>{children}</sc.Metadata>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Metadata.propTypes = propTypes;
Metadata.defaultProps = defaultProps;
Metadata.displayName = "HeaderLayout.Metadata";
