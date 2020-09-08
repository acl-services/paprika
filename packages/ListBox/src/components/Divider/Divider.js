import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Divider.styles";

const propTypes = {
  /**  isDisable is use internally as a default prop
  the prop is read by the option/helpers/optionState.js which is assigned in the store
  it helps to ignore the divider while using the keyboard.
  see: options/helpers/options.js */
  isDisabled: PropTypes.bool, // eslint-disable-line
  children: PropTypes.node,
};

const defaultProps = {
  /** Disables the divider if true */
  isDisabled: true,
  /** Body content of the divider. */
  children: null,
};

export default function Divider(props) {
  return (
    <sc.Divider aria-hidden="true" data-pka-anchor="listbox.divider">
      {props.children}
    </sc.Divider>
  );
}

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider.displayName = "ListBox.Divider";
