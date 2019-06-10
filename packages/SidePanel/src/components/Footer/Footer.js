import React from "react";
import PropTypes from "prop-types";
import { footerCSS } from "./Footer.styles";
import useOffsetScrollFooter from "../../hooks/useOffsetScrollFooter";

const propTypes = {
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
    refSidePanel, // eslint-disable-line
    ...moreProps
  } = props;

  const { offsetY, opacity } = useOffsetScrollFooter(height, refSidePanel);

  let style = {};
  if (isSticky) {
    style = { bottom: `${offsetY}px`, opacity };
  }
  return (
    <div css={footerCSS} style={style} isSticky={isSticky} {...moreProps}>
      Footer
    </div>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
Footer.componentType = "SidePanel.Footer";
