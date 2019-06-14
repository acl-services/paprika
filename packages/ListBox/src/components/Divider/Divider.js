import React from "react";
import PropTypes from "prop-types";
import { dividerCSS } from "./Divider.styles";

const propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isDisabled: true,
};

export default function Divider(props) {
  return <li css={dividerCSS}>{props.children}</li>;
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider.componentType = "ListBox.Divider";
