/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import PropTypes from "prop-types";
import "what-input";
import rawButtonStyles from "./RawButton.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate: PropTypes.bool,

  /** Body content of the button. */
  children: PropTypes.node.isRequired,

  /** If the visual focus ring should be displayed with an inset style. */
  hasInsetFocusStyle: PropTypes.bool,

  /** If the button is in an "active" or "selected" state. */
  isActive: PropTypes.bool,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  onClick: PropTypes.func,

  /** Value for role attribute to override the default of "button". */
  role: PropTypes.string,

  /** Value for tabindex attribute to override the default of 0. */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  canPropagate: true,
  isActive: null,
  isDisabled: false,
  hasInsetFocusStyle: false,
  onClick: () => {},
  role: "button",
  tabIndex: null,
};

const isTriggerKey = key => [" ", "Enter"].includes(key);

const RawButton = React.forwardRef((props, ref) => {
  const { a11yText, canPropagate, children, isActive, isDisabled, onClick, tabIndex, ...moreProps } = props;

  const rawButtonRef = React.useRef(null);
  const [hasForcedFocus, setHasForcedFocus] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      setHasForcedFocus(true);
      rawButtonRef.current.focus();
    },
  }));

  const handleClick = event => {
    setHasForcedFocus(false);
    if (!canPropagate) event.stopPropagation();
    if (!isDisabled) onClick(event);
  };

  function handleBlur() {
    if (moreProps.onBlur) moreProps.onBlur();
    setHasForcedFocus(false);
  }

  const handleKeyDown = event => {
    // Prevent scrolling the page with a spacerbar keypress
    // Prevent submitting forms in IE/Edge with and enter keypress
    if (isTriggerKey(event.key)) event.preventDefault();
    const shouldHandle = canPropagate || event.target === rawButtonRef.current;
    if (shouldHandle && moreProps.onKeyDown) moreProps.onKeyDown(event);
  };

  const handleKeyUp = event => {
    const shouldHandle = canPropagate || event.target === rawButtonRef.current;
    if (!isDisabled && shouldHandle && isTriggerKey(event.key)) {
      onClick(event);
    }
    if (shouldHandle && moreProps.onKeyUp) moreProps.onKeyUp(event);
  };

  const bestTabIndex = isDisabled && tabIndex === null ? -1 : tabIndex || 0;

  return (
    <span
      aria-pressed={isActive}
      data-pka-anchor="raw-button"
      tabIndex={bestTabIndex}
      aria-label={a11yText}
      {...moreProps}
      aria-disabled={isDisabled}
      css={rawButtonStyles}
      data-has-forced-focus={hasForcedFocus || null}
      isActive={isActive}
      isDisabled={isDisabled}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={rawButtonRef}
    >
      {children}
    </span>
  );
});

RawButton.displayName = "RawButton";
RawButton.propTypes = propTypes;
RawButton.defaultProps = defaultProps;

export default RawButton;
