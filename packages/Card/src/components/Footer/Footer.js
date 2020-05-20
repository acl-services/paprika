import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

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
    <sc.footerStyles data-pka-anchor="card.footer" {...props}>
      {children}
    </sc.footerStyles>
  );
};

Footer.displayName = "Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
