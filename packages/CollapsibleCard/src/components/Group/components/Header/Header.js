import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Header.styles";

export default function Header(props) {
  const { children } = props;

  return <sc.Header>{children}</sc.Header>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
