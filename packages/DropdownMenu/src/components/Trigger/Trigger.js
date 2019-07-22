import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const handleKeyDown = e => {
  e.stopPropagation();
};

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
  menuRefId: PropTypes.string,
};

const defaultProps = { triggerRef: null, menuRefId: "" };

const Trigger = props => {
  const { isOpen, handleOpenMenu, menuRefId, triggerRef, ...otherProps } = props;
  return (
    <Button
      ref={triggerRef}
      aria-controls={menuRefId}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={handleOpenMenu}
      onKeyDown={handleKeyDown}
      isSquare
      {...otherProps}
    />
  );
};

Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;
Trigger.displayName = "DropdownMenu.Trigger";
export default Trigger;
