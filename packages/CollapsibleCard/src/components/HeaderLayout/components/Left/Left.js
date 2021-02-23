import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Left.styles";

export default function Left(props) {
  const { children } = props;
  return <sc.Left>{children}</sc.Left>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Left.propTypes = propTypes;
Left.defaultProps = defaultProps;
Left.displayName = "HeaderLayout.Left";
