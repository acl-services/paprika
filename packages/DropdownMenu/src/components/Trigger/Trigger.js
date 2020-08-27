import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
import * as types from "../../types";

Trigger.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
Trigger.propTypes = propTypes; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Trigger.types = {
  button: types.buttonTypes,
};

const ButtonComponentMap = {
  icon: Button.Icon,
  raw: RawButton,
  simple: Button,
};

const propTypes = {
  children: PropTypes.node,
  /** Determine the styling of the button */
  buttonType: PropTypes.oneOf([Trigger.types.button.ICON, Trigger.types.button.RAW, Trigger.types.button.SIMPLE]), // eslint-disable-line no-use-before-define
  isOpen: PropTypes.bool,
  menuRefId: PropTypes.string,
  onOpenMenu: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
};

const defaultProps = {
  buttonType: Trigger.types.button.SIMPLE, // eslint-disable-line no-use-before-define
  children: null,
  menuRefId: "",
  triggerRef: null,
  isOpen: false,
  onOpenMenu: () => {},
};

const Trigger = props => {
  const { children, isOpen, onOpenMenu, menuRefId, triggerRef, buttonType, ...otherProps } = props;
  const TriggerComponent = ButtonComponentMap[buttonType];

  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={menuRefId}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={onOpenMenu}
      isSemantic={false}
      {...otherProps}
    >
      {children}
    </TriggerComponent>
  );
};

Trigger.displayName = "DropdownMenu.Trigger";

export default Trigger;
