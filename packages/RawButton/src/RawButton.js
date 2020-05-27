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
  isDisabled: false,
  hasInsetFocusStyle: false,
  onClick: () => {},
  role: "button",
  tabIndex: null,
};

const RawButton = React.forwardRef((props, ref) => {
  const { a11yText, canPropagate, children, isDisabled, onClick, tabIndex, ...moreProps } = props;
  if (a11yText) moreProps["aria-label"] = a11yText;

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
    if ("onBlur" in moreProps) {
      moreProps.onBlur();
    }
    setHasForcedFocus(false);
  }

  const handleKeyDown = event => {
    if (
      // Prevent scrolling the page with a spacerbar keypress
      event.key === " " ||
      // Prevent submitting forms in IE/Edge with and enter keypress
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  const handleKeyUp = event => {
    const shouldHandle = canPropagate || event.target === rawButtonRef.current;
    const isTriggerKey = event.key === " " || event.key === "Enter";

    if (!isDisabled && shouldHandle && isTriggerKey) {
      onClick(event);
    }
  };

  const bestTabIndex = isDisabled && tabIndex === null ? -1 : tabIndex || 0;

  return (
    <span
      aria-disabled={isDisabled}
      css={rawButtonStyles}
      data-pka-anchor="raw-button"
      isDisabled={isDisabled}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={rawButtonRef}
      tabIndex={bestTabIndex}
      {...moreProps}
      data-has-forced-focus={hasForcedFocus || null}
    >
      {children}
    </span>
  );
});

RawButton.displayName = "RawButton";
RawButton.propTypes = propTypes;
RawButton.defaultProps = defaultProps;

export default RawButton;
