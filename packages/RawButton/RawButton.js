/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from "react";
import PropTypes from "prop-types";
import RawButtonStyles from "./RawButton.styles";

const propTypes = {
  a11yText: PropTypes.string,
  canPropagate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasInsetFocusStyle: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  canPropagate: true,
  className: null,
  isDisabled: false,
  hasInsetFocusStyle: false,
  onClick: () => {},
  role: "button",
  tabIndex: 0,
};

const RawButton = React.forwardRef((props, ref) => {
  const { a11yText, canPropagate, children, isDisabled, onClick, tabIndex, ...moreProps } = props;
  if (a11yText) moreProps["aria-label"] = a11yText;

  const rawButtonRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      rawButtonRef.current.focus();
    },
  }));

  const handleClick = event => {
    if (!canPropagate) event.stopPropagation();
    if (!isDisabled) onClick(event);
  };

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

  return (
    <span
      aria-disabled={isDisabled}
      css={RawButtonStyles}
      isDisabled={isDisabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={rawButtonRef}
      tabIndex={isDisabled ? -1 : tabIndex}
      {...moreProps}
    >
      {children}
    </span>
  );
});

RawButton.displayName = "RawButton";
RawButton.propTypes = propTypes;
RawButton.defaultProps = defaultProps;

export default RawButton;
