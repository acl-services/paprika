import React from "react";
import PropTypes from "prop-types";
import { footerCSS } from "./Footer.styles";
import { useFooterOffset } from "../../hooks";

const propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
  isSticky: PropTypes.bool,
};

const defaultProps = {
  height: 48,
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

  const footerOffset = useFooterOffset(height, refSidePanel, isSticky);

  return (
    <div css={footerCSS} {...footerOffset} {...moreProps}>
      {children}
    </div>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.displayName = "SidePanel.Footer";
