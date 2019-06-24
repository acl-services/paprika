import React from "react";
import PropTypes from "prop-types";
import { dividerCSS } from "./Divider.styles";

const propTypes = {
  // isDisable is use internally as a default prop
  // the prop is read by the option/helpers/optionState.js which assigned in the store
  // later can be ignore by the keyup keydown event seens is consider disable see options/helpers/options.js
  // function getNextOptionActiveIndex
  isDisabled: PropTypes.bool, // eslint-disable-line
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
