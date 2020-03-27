import React from "react";
import PropTypes from "prop-types";

import * as sc from "./ButtonItem.styles";

const propTypes = {
  /** Content label of the button to be displayed. */
  children: PropTypes.node,

  /** The button label of the item to be used as a key in the group. */
  label: PropTypes.node.isRequired,

  /** If the item is active or on selected state */
  isActive: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isActive: false,
};

const ButtonItem = props => {
  const { children, label, isActive } = props;

  return (
    <sc.ButtonItem key={label} data-pka-anchor="button" {...props} kind="flat">
      {isActive ? <sc.CheckIcon /> : <sc.TimesIcon />}
      {children}
    </sc.ButtonItem>
  );
};

ButtonItem.displayName = "ProgressAccordion.Item";
ButtonItem.propTypes = propTypes;
ButtonItem.defaultProps = defaultProps;

export default ButtonItem;
