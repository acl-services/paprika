import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Divider.styles";
import { PropsContext } from "../../store/PropsProvider";

export default function Divider(props) {
  const { children, ...moreProps } = props;
  const { isDisabled: isDisabledStyle } = React.useContext(PropsContext);

  return (
    <sc.Divider aria-hidden data-pka-anchor="list-box.divider" isDisabled={isDisabledStyle} {...moreProps}>
      {children}
    </sc.Divider>
  );
}

Divider.displayName = "ListBox.Divider";

Divider.propTypes = {
  /**  isDisable is use internally as a default prop
  the prop is read by the option/helpers/optionState.js which is assigned in the store
  it helps to ignore the divider while using the keyboard.
  see: options/helpers/options.js */
  isDisabled: PropTypes.bool, // eslint-disable-line

  children: PropTypes.node,
};

Divider.defaultProps = {
  /** Disables the divider if true */
  isDisabled: true,

  /** Body content of the divider. */
  children: null,
};
