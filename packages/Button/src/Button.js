import React from "react";
import PropTypes from "prop-types";
import "what-input";
import RawButton from "@paprika/raw-button";
import RefreshIcon from "@paprika/icon/lib/Refresh";
import DownIcon from "@paprika/icon/lib/CaretDown";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import "@paprika/helpers/lib/dom/closest"; // support for IE11
import buttonStyles, { iconStyles } from "./Button.styles";

import Kinds from "./ButtonKinds";

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
  kind: PropTypes.oneOf(Kinds.ALL),

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
  isActive: null,
  isDisabled: false,
  isDropdown: false,
  isFullWidth: false,
  isPending: false,
  isSemantic: true,
  isSubmit: false,
  kind: Kinds.DEFAULT,
  onClick: () => {},
  role: "button",
  size: ShirtSizes.MEDIUM,
  tabIndex: null,
};

const buttonPropTypes = {
  children: PropTypes.node,
};

const buttonDefaultProps = {
  children: null,
};

export const ButtonIcon = props =>
  props.children ? <span css={iconStyles} data-pka-anchor="button.icon" {...props} /> : null;

const Button = React.forwardRef((props, ref) => {
  const {
    a11yText,
    canPropagate,
    children,
    icon,
    isActive,
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
  const [hasForcedFocus, setHasForcedFocus] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      setHasForcedFocus(true);
      buttonRef.current.focus();
    },
  }));

  const isButtonDisabled = isDisabled || isPending;

  function handleSubmit(event) {
    const $form = event.target.closest("form");
    const button = $form.ownerDocument.createElement("input");
    button.style.display = "none";
    button.type = "submit";
    $form.appendChild(button).click();
    $form.removeChild(button);
  }

  const handleClick = event => {
    setHasForcedFocus(false);
    if (isSubmit && !isSemantic) {
      handleSubmit(event);
    }

    if (!canPropagate) event.stopPropagation();
    if (!isButtonDisabled) onClick(event);
  };

  const bestTabIndex = isButtonDisabled && tabIndex === null ? -1 : tabIndex || 0;

  function handleBlur() {
    if ("onBlur" in moreProps) {
      moreProps.onBlur();
    }
    setHasForcedFocus(false);
  }

  const buttonProps = {
    "aria-pressed": isActive,
    "data-pka-anchor": "button",
    tabIndex,
    ...moreProps,
    "data-has-forced-focus": hasForcedFocus || null,
    isActive,
    isDisabled: isButtonDisabled,
    kind,
    onBlur: handleBlur,
    onClick: handleClick,
    ref: buttonRef,
  };

  if (isSemantic) {
    buttonProps.disabled = isButtonDisabled;
    buttonProps.type = isSubmit ? "submit" : "button";
    if (role !== "button") buttonProps.role = role;
  } else {
    buttonProps.tabIndex = bestTabIndex;
    buttonProps.role = role;
  }

  const iconProps = {
    isDisabled: isButtonDisabled,
    kind,
  };

  return (
    <span css={buttonStyles} as={isSemantic ? "button" : RawButton} {...buttonProps}>
      <ButtonIcon {...iconProps} isPending={isPending}>
        {isPending ? <RefreshIcon /> : icon}
      </ButtonIcon>
      {children}
      <ButtonIcon {...iconProps} isSuffixIcon>
        {isDropdown && <DownIcon />}
      </ButtonIcon>
    </span>
  );
});

ButtonIcon.propTypes = buttonPropTypes;
ButtonIcon.defaultProps = buttonDefaultProps;

Button.Kinds = Kinds;
Button.displayName = "Button";
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
