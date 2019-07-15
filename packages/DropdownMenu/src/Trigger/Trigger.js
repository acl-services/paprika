import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const handleKeyDown = e => {
  e.stopPropagation();
};

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  triggerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }) || null,
};

const defaultProps = { triggerRef: null };

const Trigger = props => {
  const { isOpen, handleOpenMenu, triggerRef, ...otherProps } = props;
  return (
    <Button
      ref={triggerRef}
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
