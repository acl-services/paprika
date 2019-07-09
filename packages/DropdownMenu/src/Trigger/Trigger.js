import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const { bool, func } = PropTypes;

const handleKeyDown = e => {
  e.stopPropagation();
};

const propTypes = {
  isOpen: bool.isRequired,
  handleOpenMenu: func.isRequired,
};

const Trigger = ({ isOpen, handleOpenMenu, ...props }) => (
  <Button
    aria-expanded={isOpen}
    aria-haspopup="true"
    onClick={handleOpenMenu}
    onKeyDown={handleKeyDown}
    isSquare
    {...props}
  />
);

Trigger.propTypes = propTypes;
Trigger.componentName = "DropDownMenu.Trigger";
export default Trigger;
