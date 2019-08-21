import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const handleKeyDown = e => {
  e.stopPropagation();
};

const propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
  menuRefId: PropTypes.string,
};

const defaultProps = {
  children: null,
  icon: null,
  triggerRef: null,
  menuRefId: "",
};

const Trigger = props => {
  const { icon, children, isOpen, handleOpenMenu, menuRefId, triggerRef, ...otherProps } = props;
  const TriggerComponent = icon ? Button.Icon : Button;
  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={menuRefId}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={handleOpenMenu}
      onKeyDown={handleKeyDown}
      isSquare
      isSemantic={false}
      {...otherProps}
    >
      {icon || children}
    </TriggerComponent>
  );
};

Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;
Trigger.displayName = "DropdownMenu.Trigger";
export default Trigger;
