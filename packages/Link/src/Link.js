import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as sc from "./Link.styles";

function Link(props) {
  const {
    a11yText,
    children,
    isExternalLink,
    hasNoUnderline,
    isSubtle,
    isDark,
    isMenu,
    maxWidth,
    ...moreProps
  } = props;
  return (
    <sc.Link
      data-pka-anchor="link"
      isExternalLink={isExternalLink}
      hasNoUnderline={hasNoUnderline}
      isDark={isDark}
      isSubtle={isSubtle}
      isMenu={isMenu}
      target={isExternalLink ? "_blank" : ""}
      aria-label={a11yText || null}
      maxWidth={maxWidth}
      {...moreProps}
    >
      <sc.LinkContent>{children}</sc.LinkContent>
      {isExternalLink && <NewTabIcon css={sc.ExternalLinkIconStyles} style={{ minWidth: "20px" }} />}
    </sc.Link>
  );
}

const propTypes = {
  /** Text for aria-label. */
  a11yText: PropTypes.string,

  /** Open url in a new Tab, is indicated by a Tab icon after the link. */
  isExternalLink: PropTypes.bool,

  /** Remove the default underline */
  hasNoUnderline: PropTypes.bool,

  /** Change font-color according to background color */
  isDark: PropTypes.bool,

  /** Set font-color to black */
  isSubtle: PropTypes.bool,

  /** Icon + text format for Navigation/Menu */
  isMenu: PropTypes.bool,

  /** Content to be displayed: texts, icons, etc. */
  children: PropTypes.node,

  /** max-width to be truncated */
  maxWidth: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  isExternalLink: false,
  hasNoUnderline: false,
  isDark: false,
  isSubtle: false,
  isMenu: false,
  children: null,
  maxWidth: "100%",
};

Link.displayName = "Link";
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
