import React from "react";
import PropTypes from "prop-types";
import linkItemStyles from "../../Item.styles";

const { bool, node, string } = PropTypes;

const propTypes = {
  /** HTML for each LinkItem */
  children: node.isRequired,
  /** The url for the href */
  link: string.isRequired,
  /** Should the link open content in a new tab */
  isExternal: bool,
};

const defaultProps = {
  isExternal: false,
};

const LinkItem = props => {
  const { children, isExternal, link, ...moreProps } = props;

  const linkItemProps = {
    role: "menuitem",
    href: link,
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
