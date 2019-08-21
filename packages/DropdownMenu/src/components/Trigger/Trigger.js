import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  menuRefId: PropTypes.string,
  onOpenMenu: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Object) }) || null,
};

const defaultProps = {
  children: null,
  icon: null,
  menuRefId: "",
  triggerRef: null,
};

const Trigger = props => {
  const { icon, children, isOpen, onOpenMenu, menuRefId, triggerRef, ...otherProps } = props;
  const TriggerComponent = icon ? Button.Icon : Button;
  return (
    <TriggerComponent
      ref={triggerRef}
      aria-controls={menuRefId}
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={onOpenMenu}
      isSquare
      isSemantic={false}
      {...otherProps}
    >
      {icon || children}
    </TriggerComponent>
  );
};

Trigger.displayName = "DropdownMenu.Trigger";
Trigger.defaultProps = defaultProps;
Trigger.propTypes = propTypes;
export default Trigger;
