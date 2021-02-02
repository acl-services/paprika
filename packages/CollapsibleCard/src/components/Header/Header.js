import React from "react";
import PropTypes from "prop-types";
// import tokens from "@paprika/tokens";

import * as sc from "./Header.styles";

export default function Header(props) {
  const { children, ...moreProps } = props;
  return <sc.Header {...moreProps}>{children}</sc.Header>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "CollapsibleCard.Header";
