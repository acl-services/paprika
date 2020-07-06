import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  isSticky: PropTypes.bool,
};

const defaultProps = {
  height: 72,
  isSticky: false,
};

export default function Footer(props) {
  const {
    height,
    isSticky,
    children,
    refSidePanel, // eslint-disable-line
    ...moreProps
  } = props;

  return (
    <sc.FooterWrapper data-pka-anchor="sidepanel.footer" isSticky={isSticky} {...moreProps}>
      {children}
    </sc.FooterWrapper>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.displayName = "SidePanel.Footer";
