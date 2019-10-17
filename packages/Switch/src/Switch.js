import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import RawButton from "@paprika/raw-button";

import switchStyles, { KnobStyled, UnderlayStyled } from "./Switch.styles";

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
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  canPropagate: true,
  isChecked: false,
  isDisabled: false,
  onChange: () => {},
  size: ShirtSizes.MEDIUM,
};

function Switch(props) {
  const { a11yText, canPropagate, isChecked, isDisabled, size, onChange, ...moreProps } = props;

  return (
    <RawButton
      css={switchStyles}
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
Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
