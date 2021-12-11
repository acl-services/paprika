import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  isSticky: PropTypes.bool,
};

const defaultProps = {
  isSticky: false,
};

export default function Footer(props) {
  const { children, ...moreProps } = props;

  return (
    <sc.Footer data-pka-anchor="panel.footer" {...moreProps}>
      {children}
    </sc.Footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.displayName = "Panel.Footer";
