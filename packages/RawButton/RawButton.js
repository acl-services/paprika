import React from "react";
import PropTypes from "prop-types";
import RawButtonStyled from "./RawButton.styles";

const propTypes = {
  ariaText: PropTypes.string,
  canPropagate: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  role: PropTypes.string,
};

const defaultProps = {
  ariaText: null,
  canPropagate: true,
  className: null,
  isDisabled: false,
  onClick: () => {},
  role: "button",
  tabIndex: 0,
};

const RawButton = React.forwardRef((props, ref) => {
  const { ariaText, canPropagate, children, isDisabled, onClick, tabIndex, ...moreProps } = props;
  if (ariaText) moreProps["aria-label"] = ariaText;

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
    <RawButtonStyled
      aria-disabled={isDisabled}
      isDisabled={isDisabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={rawButtonRef}
      tabIndex={isDisabled ? -1 : tabIndex}
      {...moreProps}
    >
      {children}
    </RawButtonStyled>
  );
});

RawButton.displayName = "RawButton";
RawButton.propTypes = propTypes;
RawButton.defaultProps = defaultProps;

export default RawButton;
