import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const handleKeyDown = e => {
  e.stopPropagation();
};

const propTypes = {
  isConfirmOpen: PropTypes.bool.isRequired,
  handleOpenConfirm: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
  confirmPanelRefId: PropTypes.string,
};

const defaultProps = { triggerRef: null, confirmPanelRefId: "" };

const Trigger = props => {
  const { isConfirmOpen, handleOpenConfirm, confirmPanelRefId, triggerRef, ...otherProps } = props;
  return (
    <Button
      ref={triggerRef}
      aria-controls={confirmPanelRefId}
      aria-expanded={isConfirmOpen}
      aria-haspopup="true"
      onClick={handleOpenConfirm}
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
