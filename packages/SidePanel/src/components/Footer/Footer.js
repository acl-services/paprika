import React from "react";
import PropTypes from "prop-types";
import { footerCSS } from "./Footer.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isAnimationDone: PropTypes.bool,
  isSticky: PropTypes.bool,
};

const defaultProps = {
  height: 72,
  isAnimationDone: false,
  isSticky: false,
  width: "33%",
};

export default function Footer(props) {
  const {
    height,
    isAnimationDone,
    isSticky,
    width,
    children,
    refSidePanel, // eslint-disable-line
    ...moreProps
  } = props;

  const calculatedWidth = isSticky && !isAnimationDone ? "100%" : width;

  return (
    <div data-pka-anchor="sidepanel.footer" css={footerCSS} isSticky={isSticky} width={calculatedWidth} {...moreProps}>
      {children}
    </div>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.displayName = "SidePanel.Footer";
