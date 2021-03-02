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

function Trigger(props) {
  const { children, isOpen, onClick, onOpenMenu, menuRefId, triggerRef, buttonType, ...otherProps } = props;
  const TriggerComponent = ButtonComponentMap[buttonType];

  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={menuRefId}
      aria-expanded={isOpen}
      aria-haspopup
      onClick={e => {
        onOpenMenu();
        onClick(e);
      }}
      isSemantic={false}
      {...otherProps}
    >
      {children}
    </TriggerComponent>
  );
}

Trigger.types = {
  button: types.buttonTypes,
};

const propTypes = {
  children: PropTypes.node,
  /** Determine the styling of the button */
  buttonType: PropTypes.oneOf([Trigger.types.button.ICON, Trigger.types.button.RAW, Trigger.types.button.SIMPLE]),
  isOpen: PropTypes.bool,
  menuRefId: PropTypes.string,
  onClick: PropTypes.func,
  onOpenMenu: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
};

const defaultProps = {
  buttonType: Trigger.types.button.SIMPLE,
  children: null,
  menuRefId: "",
  triggerRef: null,
  isOpen: false,
  onClick: () => {},
  onOpenMenu: () => {},
};

Trigger.displayName = "OverflowMenu.Trigger";
Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;

export default Trigger;
