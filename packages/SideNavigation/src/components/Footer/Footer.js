import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

function Footer(props) {
  const { children } = props;

  return <sc.Footer>{children}</sc.Footer>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Footer.displayName = "SideNavigation.Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
