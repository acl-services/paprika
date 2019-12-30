import React from "react";
import PropTypes from "prop-types";
import { dividerCSS } from "./Divider.styles";

const propTypes = {
  // isDisable is use internally as a default prop
  // the prop is read by the option/helpers/optionState.js which is assigned in the store
  // it helps to ignore the divider while using the keyboard.
  // see: options/helpers/options.js
  isDisabled: PropTypes.bool, // eslint-disable-line
  children: PropTypes.node,
};

const defaultProps = {
  isDisabled: true,
  children: null,
};

export default function Divider(props) {
  return (
    <li data-pka-anchor="listbox.divider" css={dividerCSS} hasChildren={!!props.children}>
      {props.children}
    </li>
  );
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider.displayName = "ListBox.Divider";
