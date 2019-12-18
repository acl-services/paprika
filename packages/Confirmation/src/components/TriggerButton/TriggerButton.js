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

const propTypes = {
  children: PropTypes.node,
  confirmId: PropTypes.string,
  buttonType: PropTypes.oneOf(ButtonTypes.ALL),
  isConfirmOpen: PropTypes.bool.isRequired,
  onOpenConfirm: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  buttonType: ButtonTypes.SIMPLE,
  children: null,
  confirmId: null,
  triggerRef: null,
};

const TriggerButton = props => {
  const { isConfirmOpen, children, onOpenConfirm, confirmId, triggerRef, buttonType, ...moreProps } = props;

  const TriggerComponent = ButtonComponentMap[buttonType];

  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={confirmId}
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
