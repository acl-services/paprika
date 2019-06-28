import React from "react";
import PropTypes from "prop-types";

const { alignTypes, oneOf, node, string, func } = PropTypes;

const propTypes = {
  /** Alignment of the dropdown menu */
  align: oneOf(alignTypes),

  /** Children should consist of <Dropdown.Item /> */
  children: node.isRequired,

  /** Optional custom classes */
  className: string,

  /** Render prop for rendering the trigger element that toggles the dropdown */
  renderTrigger: func.isRequired,
};

const defaultProps = {
  align: "bottomLeft",
  className: "",
};

const DropdownMenu = props => {
  return <div>Dropdown Menu</div>;
};

DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
