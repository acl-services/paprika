import React from "react";
import PropTypes from "prop-types";

import * as sc from "./ButtonItem.styles";

const propTypes = {
  /** Unique key to represent the selected value. */
  value: PropTypes.string.isRequired,

  /** Content label of the button to be displayed. */
  children: PropTypes.node,

  /** If the button shows or hides the icon */
  hasIcon: PropTypes.bool,

  /** If the item is active or on selected state */
  isActive: PropTypes.bool,
};

const defaultProps = {
  children: null,
  hasIcon: false,
  isActive: false,
};

const ButtonItem = props => {
  const { children, isActive, hasIcon } = props;

  return (
    <sc.Item {...props}>
      {hasIcon && <React.Fragment>{isActive ? <sc.SelectedIcon /> : <sc.UnselectedIcon />}</React.Fragment>}
      {children}
    </sc.Item>
  );
};

ButtonItem.displayName = "ButtonGroup.Item";
ButtonItem.propTypes = propTypes;
ButtonItem.defaultProps = defaultProps;

export default ButtonItem;
