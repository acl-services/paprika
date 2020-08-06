import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import * as sc from "./ExternalLink.styles";

const propTypes = {
  /** Text for aria-label. */
  ariaText: PropTypes.string,

  /** Link text for showing. */
  children: PropTypes.string.isRequired,

  /** It should not show the underline on text content */
  hasNoUnderline: PropTypes.bool,

  /** Link url for the target. */
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  ariaText: null,
  hasNoUnderline: false,
};

function ExternalLink(props) {
  const iconFontSize = 11;
  const { ariaText, children, hasNoUnderline, ...moreProps } = props;

  const handleSwallowClick = e => {
    e.stopPropagation();
  };

  return (
    <sc.ExternalLink
      aria-label={ariaText || null}
      onClick={handleSwallowClick}
      rel="noopener noreferrer"
      target="_blank"
      iconFontSize={iconFontSize}
      {...moreProps}
    >
      <sc.ExternalLinkContent hasNoUnderline={hasNoUnderline}>{children}</sc.ExternalLinkContent>
      <NewTabIcon css={sc.ExternalLinkIconStyles} size={`${iconFontSize}px`} />
    </sc.ExternalLink>
  );
}

ExternalLink.propTypes = propTypes;
ExternalLink.defaultProps = defaultProps;
export default ExternalLink;
