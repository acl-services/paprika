import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import RawButton from "@paprika/raw-button";
import * as types from "../../types";

TriggerButton.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
TriggerButton.propTypes = propTypes; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
TriggerButton.types = {
  button: types.buttonTypes,
};

const ButtonComponentMap = {
  icon: Button.Icon,
  raw: RawButton,
  simple: Button,
};

const propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.oneOf([
    TriggerButton.types.button.ICON, // eslint-disable-line no-use-before-define
    TriggerButton.types.button.RAW, // eslint-disable-line no-use-before-define
    TriggerButton.types.button.SIMPLE, // eslint-disable-line no-use-before-define
  ]),
  isConfirmOpen: PropTypes.bool,
  onOpenConfirm: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  buttonType: TriggerButton.types.button.SIMPLE, // eslint-disable-line no-use-before-define
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

export default TriggerButton;
