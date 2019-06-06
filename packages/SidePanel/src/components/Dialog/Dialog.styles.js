import { css, keyframes } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

function slideIn(width) {
  return keyframes`
  from {
    opacity: 0;
    right: -${width};
    transform: trasnlateX(100%);
  }

  to {
    opacity: 1;
    right: 0;
    transform: trasnlateX(0);
  }
  `;
}

function slideOut(width) {
  return keyframes`
  from {
    opacity: 1;
    right: 0; // position fixed behaviour
    transform: trasnlateX(0); // inline position relative behaviour
  }

  to {
    opacity: 0;
    right: -${width}; // position fixed behaviour
    transform: translateX(100%); // inline position relative behaviour
  }
  `;
}

export const dialogStyles = css`
  background: #fff;
  box-shadow: ${tokens.modal.shadow};
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  top: 0;

  ${props => {
    const width = Number.isNaN(Number(props.width)) ? props.width : `${props.width}px`;
    const animation = props.isOpen ? slideIn(width) : slideOut(width);

    return css`
      top: ${props.offsetY}px;
      animation: ${animation} 0.7s ease;
      right: 0;
      width: ${width};
      z-index: ${props.zIndex};
      ${props.isInline ? "position:relative;" : "position: fixed;"}
      ${props.isOpen ? "opacity: 1" : "opacity: 0"};
    `;
  }}
`;
