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

TriggerButton.types = {
  button: types.buttonTypes,
};

const propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.oneOf([
    TriggerButton.types.button.ICON,
    TriggerButton.types.button.RAW,
    TriggerButton.types.button.SIMPLE,
  ]),
  isConfirmOpen: PropTypes.bool,
  onOpenConfirm: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  buttonType: TriggerButton.types.button.SIMPLE,
  children: null,
  isConfirmOpen: false,
  onOpenConfirm: () => {},
  triggerRef: null,
};

TriggerButton.displayName = "Confirmation.TriggerButton";
TriggerButton.propTypes = propTypes;
TriggerButton.defaultProps = defaultProps;

export default TriggerButton;
