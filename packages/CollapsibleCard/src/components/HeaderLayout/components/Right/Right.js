import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Right.styles";

export default function Right(props) {
  const { children } = props;
  return <sc.Right>{children}</sc.Right>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Right.propTypes = propTypes;
Right.defaultProps = defaultProps;
