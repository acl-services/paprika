import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const handleKeyDown = e => {
  e.stopPropagation();
};

const propTypes = {
  isConfirmOpen: PropTypes.bool.isRequired,
  onHandleOpenConfirm: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
  confirmId: PropTypes.string,
};

const defaultProps = { triggerRef: null, confirmId: "" };

const Trigger = props => {
  const { isConfirmOpen, onHandleOpenConfirm, confirmId, triggerRef, ...otherProps } = props;
  return (
    <Button
      ref={triggerRef}
      aria-controls={confirmId}
      aria-expanded={isConfirmOpen}
      aria-haspopup="true"
      onClick={onHandleOpenConfirm}
      onKeyDown={handleKeyDown}
      isSquare
      isSemantic={false}
      {...otherProps}
    />
  );
};

Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;
Trigger.displayName = "Confirmation.Trigger";
export default Trigger;
