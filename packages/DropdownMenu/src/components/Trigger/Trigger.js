import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import Button from "@paprika/button";

export const ButtonTypes = {
  ICON: "icon",
  RAW: "raw",
  SIMPLE: "simple",
};

const ButtonComponentMap = {
  icon: Button.Icon,
  raw: RawButton,
  simple: Button,
};

ButtonTypes.ALL = Object.values(ButtonTypes);

const propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.oneOf(ButtonTypes.ALL),
  isOpen: PropTypes.bool,
  menuRefId: PropTypes.string,
  onOpenMenu: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
};

const defaultProps = {
  buttonType: ButtonTypes.SIMPLE,
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
export default Trigger;
