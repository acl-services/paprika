import stylers from "@paprika/stylers";
import { css, keyframes } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

const childPanel = css`
  border-bottom-left-radius: ${stylers.spaceSm};
  border-top-left-radius: ${stylers.spaceSm};
  height: calc(100% - ${stylers.spacer(8)});
  margin-top: ${stylers.spacer(4)};
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
  padding: ${stylers.spacer(3)};

  ${props => (props.isCompact || props.kind === "child" ? compactStyles : "")}
  ${props => {
    return props.isSticky ? `margin-bottom: ${props.footerHeight}px;` : "";
  }}
`;
