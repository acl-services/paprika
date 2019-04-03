/* eslint-disable react/button-has-type */

import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { ShirtSizes } from "../helpers/customPropTypes";
import ButtonStyles from "./Button.styles";

const propTypes = {
  a11yText: PropTypes.string,
  canPropagate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isSemantic: PropTypes.bool,
  isSubmit: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary", "secondary", "destructive", "flat", "minor", "link"]),
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  tabIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  canPropagate: true,
  isActive: false,
  isDisabled: false,
  isFullWidth: false,
  isSemantic: true,
  isSubmit: false,
  kind: "default",
  onClick: () => {},
  role: "button",
  size: "medium",
  tabIndex: 0,
};

const Button = React.forwardRef((props, ref) => {
  const { a11yText, canPropagate, children, isDisabled, isSemantic, isSubmit, onClick, tabIndex, ...moreProps } = props;
  if (a11yText) moreProps["aria-label"] = a11yText;

  const buttonRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      buttonRef.current.focus();
    },
  }));

  const handleClick = event => {
    if (!canPropagate) event.stopPropagation();
    if (!isDisabled) onClick(event);
  };

  const buttonProps = {
    isDisabled,
    onClick: handleClick,
    ref: buttonRef,
    tabIndex,
    ...moreProps,
  };

  if (isSemantic) {
    buttonProps.disabled = isDisabled;
    buttonProps.type = isSubmit ? "submit" : "button";
  } else {
    buttonProps.tabIndex = isDisabled ? -1 : tabIndex;
  }

  return isSemantic ? (
    <button css={ButtonStyles} {...buttonProps}>
      {children}
    </button>
  ) : (
    <RawButton css={ButtonStyles} {...buttonProps}>
      {children}
    </RawButton>
  );
});

Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
