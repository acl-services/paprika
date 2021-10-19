import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as sc from "./ExternalLink.styles";

const propTypes = {
  /** Text for aria-label. */
  a11yText: PropTypes.string,

  /** Link text for showing. */
  children: PropTypes.string.isRequired,

  /** It should not show the underline on text content */
  hasNoUnderline: PropTypes.bool,

  /** Link url for the target. */
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  a11yText: null,
  hasNoUnderline: false,
};

function ExternalLink(props) {
  const iconFontSize = 20;
  const { a11yText, children, hasNoUnderline, ...moreProps } = props;

  const handleSwallowClick = e => {
    e.stopPropagation();
  };

  return (
    <sc.ExternalLink
      data-pka-anchor="externalLink"
      aria-label={a11yText || null}
      onClick={handleSwallowClick}
      rel="noopener noreferrer"
      target="_blank"
      iconFontSize={iconFontSize}
      {...moreProps}
    >
      <sc.ExternalLinkContent data-pka-anchor="externalLink.content" hasNoUnderline={hasNoUnderline}>
        {children}
      </sc.ExternalLinkContent>
      <NewTabIcon css={sc.ExternalLinkIconStyles} size={`${iconFontSize}px`} />
    </sc.ExternalLink>
  );
}

ExternalLink.propTypes = propTypes;
ExternalLink.defaultProps = defaultProps;
export default ExternalLink;
