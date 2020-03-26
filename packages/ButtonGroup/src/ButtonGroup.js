import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import CheckIcon from "@paprika/icon/lib/Check";
import TimesIcon from "@paprika/icon/lib/Times";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import buttonGroupStyles from "./ButtonGroup.styles";

const propTypes = {
  /** The content of each of the toggle buttons in the group. */
  children: PropTypes.node,

  /** An icon to be included to the left of children content. */
  icon: PropTypes.node,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** If the width of the button should span it's parent container (100%). */
  isFullWidth: PropTypes.bool,

  /** If it will be rendered as a <button> element. If false, a <span> will be rendered via an accessible <RawButton>. */
  isSemantic: PropTypes.bool,

  /** Callback to be executed when the button is clicked to select the item or activated by keyboard. Typically required. */
  onClick: PropTypes.func,

  /** Size of the button (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),

  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  children: null,
  icon: null,
  isDisabled: false,
  isFullWidth: false,
  isSemantic: true,
  onClick: () => {},
  size: ShirtSizes.MEDIUM,
  tabIndex: null,
};

const ButtonGroup = React.forwardRef((props, ref) => {
  const { children, icon, isDisabled, isSemantic, onClick, tabIndex, size, ...moreProps } = props;

  const [isActive, setIsActive] = React.useState(false);

  const buttonRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      buttonRef.current.focus();
    },
  }));

  const isButtonDisabled = isDisabled;

  const handleClick = () => {
    if (!isButtonDisabled) setIsActive(!isActive);
  };

  const bestTabIndex = isButtonDisabled && tabIndex === null ? -1 : tabIndex || 0;

  const buttonProps = {
    isDisabled: isButtonDisabled,
    onClick: handleClick,
    ref: buttonRef,
    tabIndex,
    size,
    isSemantic,
    ...moreProps,
  };

  if (isSemantic) {
    buttonProps.disabled = isButtonDisabled;
  } else {
    buttonProps.tabIndex = bestTabIndex;
  }

  return (
    <Button css={buttonGroupStyles} data-pka-anchor="button" {...buttonProps} kind="flat">
      {isActive ? <CheckIcon /> : <TimesIcon />}
      {children}
    </Button>
  );
});

ButtonGroup.displayName = "ButtonGroup";
ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
