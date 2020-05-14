import React from "react";
import PropTypes from "prop-types";
import footerStyles from "./Footer.styles";

const propTypes = {
  /** Body content of the button (an icon). */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Footer = props => {
  const { children } = props;

  return (
    <div css={footerStyles} {...props}>
      {children}
    </div>
  );
};

Footer.displayName = "Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
