import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const propTypes = {
  children: PropTypes.node,
  confirmId: PropTypes.string,
  icon: PropTypes.node,
  isConfirmOpen: PropTypes.bool.isRequired,
  onHandleOpenConfirm: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }),
};

const defaultProps = {
  children: null,
  confirmId: null,
  icon: null,
  triggerRef: null,
};

const Trigger = props => {
  const { icon, isConfirmOpen, children, onHandleOpenConfirm, confirmId, triggerRef, ...moreProps } = props;

  const TriggerComponent = icon ? Button.Icon : Button;

  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={confirmId}
      aria-expanded={isConfirmOpen}
      aria-haspopup="true"
      isSquare
      isSemantic={false}
      onClick={onHandleOpenConfirm}
      {...moreProps}
    >
      {icon || children}
    </TriggerComponent>
  );
};

Trigger.displayName = "Confirmation.Trigger";
Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;

export default Trigger;
