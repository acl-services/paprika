import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const propTypes = {
  children: PropTypes.node,
  confirmId: PropTypes.string,
  icon: PropTypes.node,
  isConfirmOpen: PropTypes.bool,
  onOpenConfirm: PropTypes.func,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  children: null,
  confirmId: null,
  icon: null,
  isConfirmOpen: false,
  onOpenConfirm: () => {},
  triggerRef: null,
};

const TriggerButton = props => {
  const { icon, isConfirmOpen, children, onOpenConfirm, confirmId, triggerRef, ...moreProps } = props;

  const TriggerComponent = icon ? Button.Icon : Button;

  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={confirmId}
      aria-expanded={isConfirmOpen}
      aria-haspopup="true"
      isSquare
      isSemantic={false}
      onClick={onOpenConfirm}
      {...moreProps}
    >
      {icon || children}
    </TriggerComponent>
  );
};

TriggerButton.displayName = "Confirmation.TriggerButton";
TriggerButton.defaultProps = defaultProps;
TriggerButton.propTypes = propTypes;

export default TriggerButton;
