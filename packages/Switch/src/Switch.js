import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import RawButton from "@paprika/raw-button";

import switchStyles, { KnobStyled, UnderlayStyled } from "./Switch.styles";

Switch.propTypes = propTypes; // eslint-disable-line no-use-before-define
Switch.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Switch.types = {
  size: constants.defaultSize,
};

const propTypes = {
  /** Descriptive a11y text for assistive technologies. Typically required. */
  a11yText: PropTypes.string,

  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate: PropTypes.bool,

  /** If the switch is on. */
  isChecked: PropTypes.bool,

  /** If the switch is disabled. */
  isDisabled: PropTypes.bool,

  /** Callback to be executed when the switch is toggled on or off. Typically required. */
  onChange: PropTypes.func,

  /** Size of the switch. */
  size: PropTypes.oneOf([Switch.types.size.SMALL, Switch.types.size.MEDIUM, Switch.types.size.LARGE]), // eslint-disable-line no-use-before-define
};

const defaultProps = {
  a11yText: null,
  canPropagate: true,
  isChecked: false,
  isDisabled: false,
  onChange: () => {},
  size: Switch.types.size.MEDIUM, // eslint-disable-line no-use-before-define
};

function Switch(props) {
  const { a11yText, canPropagate, isChecked, isDisabled, size, onChange, ...moreProps } = props;

  return (
    <RawButton
      css={switchStyles}
      data-pka-anchor="switch"
      role="switch"
      a11yText={a11yText}
      aria-checked={isChecked}
      canPropagate={canPropagate}
      isDisabled={isDisabled}
      onClick={onChange}
      size={size}
      {...moreProps}
    >
      <UnderlayStyled>
        <KnobStyled />
      </UnderlayStyled>
    </RawButton>
  );
}

Switch.displayName = "Switch";

export default Switch;
