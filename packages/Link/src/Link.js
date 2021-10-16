import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as sc from "./Link.styles";

function Link(props) {
  const { a11yText, children, isExternalLink, hasNoUnderline, isDark, isSubtle, isNavigation, ...moreProps } = props;
  return (
    <sc.Link
      data-pka-anchor="link"
      isExternalLink={isExternalLink}
      hasNoUnderline={hasNoUnderline}
      isDark={isDark}
      isSubtle={isSubtle}
      isNavigation={isNavigation}
      target={isExternalLink ? "_blank" : ""}
      aria-label={a11yText || null}
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

  /** Icon + text format */
  isNavigation: PropTypes.bool,

  /** Content to be displayed: texts, icons, etc. */
  children: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  isExternalLink: false,
  hasNoUnderline: false,
  isDark: false,
  isSubtle: false,
  isNavigation: false,
  children: null,
};

Link.displayName = "Link";
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
