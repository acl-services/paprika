import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";
import PopoverContext, { ThemeContext } from "../../PopoverContext";
import { TipStyled } from "./Tip.styles";

const propTypes = {
  /** Number setting the z-index */
  zIndex: PropTypes.number,
};

const defaultProps = {
  zIndex: null,
};

function Tip(props) {
  const { zIndex, ...moreProps } = props;

  const isDark = React.useContext(ThemeContext);
  const { content, tip, refTip, isOpen, isPortal, portalElement } = React.useContext(PopoverContext);
  const borderColor = isDark ? tokens.color.black : tokens.border.color;
  const backgroundColor = isDark ? tokens.color.black : tokens.color.white;

  const TipStyledComponent = (
    <TipStyled
      isOpen={isOpen}
      data-pka-anchor="popover.tip"
      ref={refTip}
      rotate={tip.rotate}
      style={{ left: tip.x, top: tip.y }}
      zIndex={zIndex || content.zIndex}
      {...moreProps}
    >
      <svg height="100%" width="100%" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0 12 12 12 6 6" fill={borderColor} />
        <polygon points="1 12 11 12 6 7" fill={backgroundColor} />
      </svg>
    </TipStyled>
  );

  if (isPortal) {
    return ReactDOM.createPortal(TipStyledComponent, portalElement);
  }

  return TipStyledComponent;
}

Tip.displayName = "Popover.Tip";

Tip.propTypes = propTypes;
Tip.defaultProps = defaultProps;

export default Tip;
