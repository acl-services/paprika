import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import RefreshIcon from "@paprika/icon/lib/Refresh";
import DownIcon from "@paprika/icon/lib/CaretDown";
import { ShirtSizes } from "../../helpers/src/customPropTypes";
import buttonStyles, { iconStyles } from "./Button.styles";

const propTypes = {
  a11yText: PropTypes.string,
  canPropagate: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.node,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isPending: PropTypes.bool,
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
  children: null,
  icon: null,
  isActive: false,
  isDisabled: false,
  isDropdown: false,
  isFullWidth: false,
  isPending: false,
  isSemantic: true,
  isSubmit: false,
  kind: "default",
  onClick: () => {},
  role: "button",
  size: "medium",
  tabIndex: 0,
};

const buttonPropTypes = {
  children: PropTypes.node,
};

const buttonDefaultProps = {
  children: null,
};

const ButtonIcon = props =>
  props.children ? (
    <span css={iconStyles} {...props} className="button__icon">
      {props.children}
    </span>
  ) : null;

const Button = React.forwardRef((props, ref) => {
  const {
    a11yText,
    canPropagate,
    children,
    icon,
    isDisabled,
    isDropdown,
    isPending,
    isSemantic,
    isSubmit,
    kind,
    onClick,
    role,
    tabIndex,
    ...moreProps
  } = props;
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
    kind,
    onClick: handleClick,
    ref: buttonRef,
    tabIndex,
    ...moreProps,
  };
  if (isSemantic) {
    buttonProps.disabled = isDisabled;
    buttonProps.type = isSubmit ? "submit" : "button";
    if (role !== "button") buttonProps.role = role;
  } else {
    buttonProps.tabIndex = isDisabled ? -1 : tabIndex;
    buttonProps.role = role;
  }

  const iconProps = {
    isDisabled,
    kind,
  };

  return (
    <span css={buttonStyles} {...buttonProps} as={isSemantic ? "button" : RawButton}>
      <ButtonIcon {...iconProps} isPending={isPending}>
        {isPending ? <RefreshIcon /> : icon}
      </ButtonIcon>
      {children}
      <ButtonIcon {...iconProps} isDropdown>
        {isDropdown && <DownIcon />}
      </ButtonIcon>
    </span>
  );
});

ButtonIcon.propTypes = buttonPropTypes;
ButtonIcon.defaultProps = buttonDefaultProps;

Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
