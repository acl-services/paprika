import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Footer.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isOpen: PropTypes.bool,
  isSticky: PropTypes.bool,
};

const defaultProps = {
  height: 72,
  isOpen: false,
  isSticky: false,
  width: "33%",
};

export default function Footer(props) {
  const {
    height,
    isOpen,
    isSticky,
    width,
    children,
    refSidePanel, // eslint-disable-line
    ...moreProps
  } = props;

  return (
    <sc.Footer data-pka-anchor="sidepanel.footer" isOpen={isOpen} isSticky={isSticky} width={width} {...moreProps}>
      {children}
    </sc.Footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.displayName = "SidePanel.Footer";
