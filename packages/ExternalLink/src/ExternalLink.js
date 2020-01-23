import React from "react";
import PropTypes from "prop-types";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./ExternalLink.styles";

const propTypes = {
  /** Text for aria-label. */
  ariaText: PropTypes.string,

  /** Link text for showing. */
  children: PropTypes.string,

  /** Should have an underline, by default it's true */
  hasUnderline: PropTypes.bool,

  /** Link url for the target. */
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  ariaText: null,
  children: null,
  hasUnderline: true,
};

function ExternalLink(props) {
  const iconFontSize = 11;
  const I18n = useI18n();
  const { ariaText, children, hasUnderline, ...moreProps } = props;

  const getContentText = () => {
    return children || I18n.t("externalLink.view");
  };

  const handleSwallowClick = e => {
    e.stopPropagation();
  };

  return (
    <sc.ExternalLink
      aria-label={ariaText || getContentText()}
      onClick={handleSwallowClick}
      rel="noopener noreferrer"
      target="_blank"
      iconFontSize={iconFontSize}
      {...moreProps}
    >
      <sc.ExternalLinkContent hasUnderline={hasUnderline}>{getContentText()}</sc.ExternalLinkContent>
      <NewTabIcon css={sc.ExternalLinkIconStyles} size={`${iconFontSize}px`} />
    </sc.ExternalLink>
  );
}

ExternalLink.propTypes = propTypes;
ExternalLink.defaultProps = defaultProps;
export default ExternalLink;
