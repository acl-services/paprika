import React from "react";
import PropTypes from "prop-types";
import LinkItemStyles from "../Item.styles";

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
  const { children, isExternal, link, ...remainingProps } = props;

  const linkItemProps = {
    role: "menuitem",
    ...remainingProps,
  };

  if (isExternal) {
    linkItemProps.target = "_blank";
  }

  return (
    <a css={LinkItemStyles} {...linkItemProps} href={link}>
      {children}
    </a>
  );
};

LinkItem.displayName = "DropdownMenu.LinkItem";
LinkItem.propTypes = propTypes;
LinkItem.defaultProps = defaultProps;

export default LinkItem;
