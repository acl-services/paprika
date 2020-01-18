import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { css, keyframes } from "styled-components";

const childPanel = css`
  ${props => {
    const totalOffset = props.isCompact ? 48 : 64;
    const childBottomOffsetY = totalOffset + props.groupOffsetY + props.offsetY;
    return css`
      border-bottom-left-radius: ${tokens.spaceSm};
      border-top-left-radius: ${tokens.spaceSm};
      height: calc(100% - ${childBottomOffsetY}px);
      margin-top: ${props.isCompact ? `${stylers.spacer(3)}` : `${stylers.spacer(4)}`};
    `;
  }}
`;

function slideIn() {
  return keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
  `;
}

function slideOut() {
  return keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
  `;
}

const compactStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const dialogStyles = css`
  background: ${tokens.color.white};
  box-shadow: ${tokens.modal.shadow};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  top: 0;

  &:focus {
    outline: 0;
  }

  ${props => {
    const width = Number.isNaN(Number(props.width)) ? props.width : `${props.width}px`;
    const animation = props.isOpen ? slideIn() : slideOut();
    let childSidePanel = "";

    if (props.kind === "child") {
      childSidePanel = childPanel;
    }

    return css`
      animation: ${animation} 0.7s ease;
      right: 0;
      top: ${props.offsetY}px;
      width: ${width};
      z-index: ${props.zIndex};
      ${props => (props.offsetY ? `height: calc(100% - ${props.offsetY}px);` : "")}
      ${props.isInline ? "position: relative;" : "position: fixed;"}
      ${props.isOpen ? "opacity: 1" : "opacity: 0"};
      ${childSidePanel}
    `;
  }}
`;

export const dialogContentStyles = css`
  flex: 1;
  padding: ${stylers.spacer(3)};

  ${props => (props.isCompact || props.kind === "child" ? compactStyles : "")}
  ${props => {
    return props.isSticky ? `margin-bottom: ${props.footerHeight}px;` : "";
  }}
`;
