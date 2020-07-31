import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";

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

function slideIn(isSlideFromLeft) {
  return keyframes`
  from {
    transform: ${isSlideFromLeft ? "translateX(-100%)" : `translateX(100%)`};
  }
  to {
    transform: translateX(0);
  }
  `;
}

function slideOut(isSlideFromLeft) {
  return keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: ${isSlideFromLeft ? "translateX(-100%)" : `translateX(100%)`};
  }
  `;
}

const compactStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const Dialog = styled.div`
  background: ${tokens.color.white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow: auto;
  padding: 0;
  right: 0;
  top: 0;

  &:focus {
    outline: 0;
  }

  ${props => {
    const width = Number.isNaN(Number(props.width)) ? props.width : `${props.width}px`;
    const animation = props.isOpen ? slideIn(props.isSlideFromLeft) : slideOut(props.isSlideFromLeft);

    let childSidePanel = "";
    const boxShadow = props.hasPushedElement ? "none" : tokens.modal.shadow;

    if (props.kind === "child") {
      childSidePanel = childPanel;
    }

    return css`
      animation: ${animation} 0.4s forwards;
      border: 0;
      box-shadow: ${boxShadow};
      top: ${props.offsetY}px;
      width: ${width};
      z-index: ${props.zIndex};
      ${props => (props.isSlideFromLeft ? `left: 0;` : `right: 0;`)}
      ${props => (props.offsetY ? `height: calc(100% - ${props.offsetY}px);` : "")}
      ${props.isInline ? "position: relative;" : "position: fixed;"}
      ${childSidePanel}
      ${props =>
        props.isAnimating
          ? css`
              animation: none;
            `
          : ""}
    `;
  }}
`;

export const DialogContent = styled.div`
  flex-grow: 1;
  margin: 0;
  padding: 0;

  &:focus {
    ${stylers.focusRing.subtle(true)};
  }

  ${props => {
    const borderColor = `1px solid ${tokens.border.color}`;

    let borderLeft = "";
    let borderRight = "";

    if (props.hasPushedElement) {
      if (props.isSlideFromLeft) {
        borderRight = borderColor;
      } else {
        borderLeft = borderColor;
      }
    }

    return css`
      border-left: ${borderLeft};
      border-right: ${borderRight};
      ${props.isCompact || props.kind === "child" ? compactStyles : ""};
    `;
  }}
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
`;

export const DialogMain = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
