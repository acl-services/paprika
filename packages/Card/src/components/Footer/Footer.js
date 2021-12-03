import React from "react";
import PropTypes from "prop-types";
import Tag from "@paprika/tag";
import * as sc from "./Footer.styles";
import * as types from "./types";

const propTypes = {
  /** Body content of the footer */
  children: PropTypes.node,

  /** Content of the tag */
  tagContent: PropTypes.string,

  /** Themes of the tag */
  tagTheme: PropTypes.oneOf([
    types.themes.BLACK,
    types.themes.BLUE,
    types.themes.GREEN,
    types.themes.GREY,
    types.themes.LIGHT_BLUE,
    types.themes.LIGHT_ORANGE,
    types.themes.ORANGE,
    types.severityThemes.NO_RISK,
    types.severityThemes.LOW_RISK,
    types.severityThemes.MEDIUM_RISK,
    types.severityThemes.HIGH_RISK,
    types.severityThemes.ALERT,
  ]),
};

const defaultProps = {
  children: null,
  tagContent: null,
  tagTheme: types.themes.BLACK,
};

const Footer = props => {
  const { children, tagContent, tagTheme } = props;

  return (
    <sc.footerStyles data-pka-anchor="card.footer" {...props}>
      {children}
      {tagContent ? (
        <Tag theme={tagTheme} size={types.sizes.MEDIUM}>
          {tagContent}
        </Tag>
      ) : null}
    </sc.footerStyles>
  );
};

Footer.displayName = "Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
