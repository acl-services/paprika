import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  const { children } = props;

  return <ul>{children}</ul>;
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
