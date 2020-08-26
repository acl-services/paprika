import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import RawButton from "@paprika/raw-button";
import * as types from "../../types";

const ButtonComponentMap = {
  icon: Button.Icon,
  raw: RawButton,
  simple: Button,
};

const propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.oneOf([types.buttonTypes.ICON, types.buttonTypes.RAW, types.buttonTypes.SIMPLE]),
  isConfirmOpen: PropTypes.bool,
  onOpenConfirm: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  buttonType: types.buttonTypes.SIMPLE,
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
TriggerButton.types = {
  button: types.buttonTypes,
};

export default TriggerButton;
