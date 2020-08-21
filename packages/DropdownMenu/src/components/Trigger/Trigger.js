import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";
import * as types from "../../types";

const ButtonComponentMap = {
  icon: Button.Icon,
  raw: RawButton,
  simple: Button,
};

const propTypes = {
  children: PropTypes.node,
  /** Determine the styling of the button */
  buttonType: PropTypes.oneOf(types.ALL),
  isOpen: PropTypes.bool,
  menuRefId: PropTypes.string,
  onOpenMenu: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
};

const defaultProps = {
  buttonType: types.SIMPLE,
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
Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;
Trigger.types = types;

export default Trigger;
