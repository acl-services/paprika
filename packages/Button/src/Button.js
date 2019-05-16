import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import RefreshIcon from "@paprika/icon/lib/Refresh";
import DownIcon from "@paprika/icon/lib/CaretDown";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import buttonStyles, { iconStyles } from "./Button.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate: PropTypes.bool,

  /** Body content of the button. */
  children: PropTypes.node,

  /** An icon to be included to the left of children content. */
  icon: PropTypes.node,

  /** If the button is in an "active" or "selected" state. */
  isActive: PropTypes.bool,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** If the button includes a down arrow to the right of children content. */
  isDropdown: PropTypes.bool,

  /** If the width of the button should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If the button should render in a pending state (with a spinner icon). */
  isPending: PropTypes.bool,

  /** If it will be rendered as a <button> element. If false, a <span> will be rendered via an accessible <RawButton>. */
  isSemantic: PropTypes.bool,

  /** If the type attribute should "submit", instead of the default "button". */
  isSubmit: PropTypes.bool,

  /** The visual style of the button. */
  kind: PropTypes.oneOf(["default", "primary", "secondary", "destructive", "flat", "minor", "link"]),

  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  onClick: PropTypes.func,

  /** Value for role attribute to override the default of "button". */
  role: PropTypes.string,

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** Value for tabindex attribute to override the default of 0. */
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
