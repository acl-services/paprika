import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as constants from "@paprika/constants/lib/Constants";
import * as sc from "./Link.styles";

function Link(props) {
  const { a11yText, children, isExternalLink, hasNoUnderline, isBlack, isNavigation, href, size, ...moreProps } = props;
  return (
    <sc.Link
      data-pka-anchor="link"
      size={size}
      isExternalLink={isExternalLink}
      hasNoUnderline={hasNoUnderline}
      isBlack={isBlack}
      isNavigation={isNavigation}
      href={href}
      target={isExternalLink ? "_blank" : ""}
      aria-label={a11yText || null}
      {...moreProps}
    >
      <sc.LinkContent>{children}</sc.LinkContent>
      {isExternalLink && <NewTabIcon css={sc.ExternalLinkIconStyles} size={`${size}px`} />}
    </sc.Link>
  );
}

Link.types = {
  size: constants.limitedSize,
};

const propTypes = {
  /** Text for aria-label. */
  a11yText: PropTypes.string,

  /** Open url in a new Tab, is indicated by a Tab icon after the link. */
  isExternalLink: PropTypes.bool,

  /** Remove the default underline */
  hasNoUnderline: PropTypes.bool,

  /** Set font-color to black */
  isBlack: PropTypes.bool,

  /** Icon + text format */
  isNavigation: PropTypes.bool,

  /** Size for Font (and Icon) */
  size: PropTypes.oneOf([Link.types.size.SMALL, Link.types.size.MEDIUM]),

  /** Content to be displayed: texts, icons, etc. */
  children: PropTypes.node,

  /** URL for the Link. */
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  a11yText: null,
  isExternalLink: false,
  hasNoUnderline: false,
  isBlack: false,
  isNavigation: false,
  size: Link.types.size.MEDIUM,
  children: null,
};

Link.displayName = "Link";
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
