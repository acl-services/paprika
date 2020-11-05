import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import useI18n from "@paprika/l10n/lib/useI18n";
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
  const I18n = useI18n();

  const linkItemProps = {
    "data-pka-anchor": "dropdown.item",
    href: link,
    onKeyDown,
    role: "menuitem",
    ...moreProps,
  };

  let externalLinkIcon = null;
  if (isExternal) {
    linkItemProps["aria-label"] = I18n.t("dropdownMenu.isExternal", { link: children });
    linkItemProps.target = "_blank";
    linkItemProps.rel = "noopener noreferrer";
    externalLinkIcon = <NewTabIcon size="10px" />;
  }

  return (
    <a css={linkItemStyles} {...linkItemProps}>
      {children}
      {externalLinkIcon}
    </a>
  );
};

LinkItem.displayName = "DropdownMenu.LinkItem";
LinkItem.propTypes = propTypes;
LinkItem.defaultProps = defaultProps;

export default LinkItem;
