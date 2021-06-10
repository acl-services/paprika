import React from "react";
import PropTypes from "prop-types";
import * as sc from "./NavItem.styles";

const propTypes = {
  /** Body of the nav item. */
  children: PropTypes.node,

  /** The title of the nav item. */
  label: PropTypes.node.isRequired,

  /** If the step is complete. */
  isComplete: PropTypes.bool,

  /** Function to call when click on an item. */
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
  isComplete: false,
  onClick: null,
};

const NavItem = props => {
  const { children, label, isComplete, onClick, ...moreProps } = props;

  return (
    <sc.NavItem
      iconAlign={null}
      iconCollapse={null}
      iconExpand={null}
      isClickable={onClick === null}
      isCollapsed={false}
      isComplete={isComplete}
      label={<sc.ItemLabel isClickable={onClick === null}>{label}</sc.ItemLabel>}
      onClick={onClick}
      {...moreProps}
    >
      {children}
    </sc.NavItem>
  );
};

NavItem.displayName = "ProgressAccordion.NavItem";
NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
