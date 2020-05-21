import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import RawButton from "@paprika/raw-button";

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
  isConfirmOpen: PropTypes.bool,
  onOpenConfirm: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  buttonType: ButtonTypes.SIMPLE,
  children: null,
  isConfirmOpen: false,
  onOpenConfirm: () => {},
  triggerRef: null,
};

const TriggerButton = props => {
  const { isConfirmOpen, children, onOpenConfirm, triggerRef, buttonType, ...moreProps } = props;

  const TriggerComponent = ButtonComponentMap[buttonType];

  return (
    <TriggerComponent
      data-pka-anchor="button"
      ref={triggerRef}
      aria-expanded={isConfirmOpen}
      aria-haspopup="true"
      isSemantic={false}
      onClick={onOpenConfirm}
      {...moreProps}
    >
      {children}
    </TriggerComponent>
  );
};

TriggerButton.displayName = "Confirmation.TriggerButton";
TriggerButton.defaultProps = defaultProps;
TriggerButton.propTypes = propTypes;

export default TriggerButton;
