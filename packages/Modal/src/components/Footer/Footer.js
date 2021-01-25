import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Footer = props => {
  const { children, ...moreProps } = props;

  return <sc.Footer {...moreProps}>{children}</sc.Footer>;
};

Footer.displayName = "Modal.Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
