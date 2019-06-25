import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import SwitchStyled, { KnobStyled, UnderlayStyled } from "./Switch.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate: PropTypes.bool,

  /** If the button is disabled. */
  isDisabled: PropTypes.bool,

  /** Callback to be executed when the switch is toggled on or off. Typically required. */
  onChange: PropTypes.func,

  /** Size of the switch. */
  size: ShirtSizes,

  /** Status of switch. */
  value: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  canPropagate: true,
  isDisabled: false,
  onChange: () => {},
  size: "medium",
  value: true,
};

function Switch(props) {
  const { a11yText, canPropagate, isDisabled, size, onChange, value, ...moreProps } = props;

  return (
    <SwitchStyled
      role="switch"
      a11yText={a11yText}
      aria-checked={value}
      canPropagate={canPropagate}
      isDisabled={isDisabled}
      isSwitchedOn={value}
      onClick={onChange}
      size={size}
      {...moreProps}
    >
      <UnderlayStyled isSwitchedOn={value} isDisabled={isDisabled} size={size}>
        <KnobStyled isDisabled={isDisabled} size={size} />
      </UnderlayStyled>
    </SwitchStyled>
  );
}

Switch.displayName = "Switch";
Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
