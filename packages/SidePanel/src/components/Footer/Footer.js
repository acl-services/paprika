import React from "react";
import PropTypes from "prop-types";
import { footerCSS } from "./Footer.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSticky: PropTypes.bool,
};

const defaultProps = {
  height: 48,
  isSticky: false,
  width: "33%",
};

export default function Footer(props) {
  const {
    height,
    isSticky,
    width,
    children,
    refSidePanel, // eslint-disable-line
    ...moreProps
  } = props;

  return (
    <div css={footerCSS} {...{ isSticky, width }} {...moreProps}>
      {children}
    </div>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.componentType = "SidePanel.Footer";
