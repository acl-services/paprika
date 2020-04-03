import React from "react";
import PropTypes from "prop-types";

import * as sc from "./ButtonItem.styles";

const propTypes = {
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
  const { children, isActive, hasIcon, ...moreProps } = props;

  return (
    <sc.ButtonItem {...props} {...moreProps}>
      {hasIcon && <React.Fragment>{isActive ? <sc.CheckIcon /> : <sc.TimesIcon />}</React.Fragment>}
      {children}
    </sc.ButtonItem>
  );
};

ButtonItem.displayName = "ProgressAccordion.Item";
ButtonItem.propTypes = propTypes;
ButtonItem.defaultProps = defaultProps;

export default ButtonItem;
