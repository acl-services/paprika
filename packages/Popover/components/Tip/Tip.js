import React from "react";
import ReactDOM from "react-dom";
import { number } from "prop-types";
import tokens from "@paprika/tokens";
import { TipStyled } from "./Tip.styles";
import { PopoverContext } from "../../Popover";

const Tip = props => (
  <PopoverContext.Consumer>
    {({ tip, refTip, isDark, isOpen, portalElement }) => {
      const borderColor = isDark ? tokens.color.black : tokens.border.color;
      const backgroundColor = isDark ? tokens.color.black : tokens.color.white;

      return ReactDOM.createPortal(
        <TipStyled
          innerRef={refTip}
          isOpen={isOpen}
          rotate={tip.rotate}
          style={{ left: tip.x, top: tip.y }}
          zIndex={props.zIndex}
        >
          <svg height="100%" width="100%" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0 12 12 12 6 6" fill={borderColor} />
            <polygon points="1 12 11 12 6 7" fill={backgroundColor} />
          </svg>
        </TipStyled>,
        portalElement
      );
    }}
  </PopoverContext.Consumer>
);

Tip.displayName = "Popover.Tip";

Tip.propTypes = {
  zIndex: number,
};

Tip.defaultProps = {
  zIndex: 2,
};

export default Tip;
