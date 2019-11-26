import React from "react";
import PropTypes from "prop-types";
import linkItemStyles from "../../Item.styles";

const { bool, node, string, func } = PropTypes;

const propTypes = {
  /** HTML for each LinkItem */
  children: node.isRequired,
  /** The url for the href */
  link: string.isRequired,
  /** Callback to be executed when key is pressed */
  onKeyDown: func,
  /** Should the link open content in a new tab */
  isExternal: bool,
};

const defaultProps = {
  isExternal: false,
  onKeyDown: () => {},
};

const LinkItem = props => {
  const { children, onKeyDown, isExternal, link, ...moreProps } = props;

  const linkItemProps = {
    role: "menuitem",
    className: "dropdown-item",
    href: link,
    onKeyDown,
    ...moreProps,
  };

  if (isExternal) {
    linkItemProps.target = "_blank";
    linkItemProps.rel = "noopener noreferrer";
  }

  return (
    <a css={linkItemStyles} {...linkItemProps}>
      {children}
    </a>
  );
};

LinkItem.displayName = "DropdownMenu.LinkItem";
LinkItem.propTypes = propTypes;
LinkItem.defaultProps = defaultProps;

export default LinkItem;
