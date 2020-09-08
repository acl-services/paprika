import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";

const childPanel = ({ isCompact, groupOffsetY, offsetY }) => {
  const totalOffset = isCompact ? 48 : 64;
  const childBottomOffsetY = totalOffset + groupOffsetY + offsetY;
  return css`
    border-bottom-left-radius: ${tokens.spaceSm};
    border-top-left-radius: ${tokens.spaceSm};
    height: calc(100% - ${childBottomOffsetY}px);
    margin-top: ${isCompact ? `${stylers.spacer(3)}` : `${stylers.spacer(4)}`};
  `;
};

function slideIn(slideInTransform, slideOutTransform) {
  return keyframes`
      from {
        transform: ${slideOutTransform};
      }
      to {
        transform: ${slideInTransform};
      }
      `;
}

function slideOut(slideInTransform, slideOutTransform) {
  return keyframes`
      from {
        transform: ${slideInTransform};
      }
      to {
        transform: ${slideOutTransform};
      }
      `;
}

const compactStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const Dialog = styled.div(
  ({ width, isAnimating, isSlideFromLeft, isOpen, hasPushedElement, kind, offsetY, zIndex, isInline }) => {
    const widthAsPx = Number.isNaN(Number(width)) ? width : `${width}px`;
    const slideOutTransform = isSlideFromLeft ? "translateX(-100%)" : `translateX(100%)`;
    const slideInTransform = "translateX(0)";

    const animationStyle = isAnimating
      ? css`
          animation: ${isOpen
              ? slideIn(slideInTransform, slideOutTransform)
              : slideOut(slideInTransform, slideOutTransform)}
            0.4s forwards;
        `
      : "";

    let childSidePanel = "";
    const boxShadow = hasPushedElement ? "none" : tokens.modal.shadow;

    if (kind === "child") {
      childSidePanel = childPanel;
    }
    return css`
      ${animationStyle};
      background: ${tokens.color.white};
      border: 0;
      box-shadow: ${boxShadow};
      box-sizing: border-box;
      ${childSidePanel}
      display: flex;
      flex-direction: column;
      height: 100%;
      ${offsetY ? `height: calc(100% - ${offsetY}px);` : ""}
      ${isSlideFromLeft ? `left: 0;` : `right: 0;`}
      margin: 0;
      overflow: auto;
      padding: 0;
      ${isInline ? "position: relative;" : "position: fixed;"}
      right: 0;
      top: 0;
      top: ${offsetY}px;
      width: ${widthAsPx};
      z-index: ${zIndex};

      &:focus {
        outline: 0;
      }
    `;
  }
);

export const DialogContent = styled.div(
  ({ hasPushedElement, isSlideFromLeft, isCompact, kind }) => css`
  flex-grow: 1;
  margin: 0;
  padding: 0;

  &:focus {
    ${stylers.focusRing.subtle(true)};
  }

  ${hasPushedElement && isSlideFromLeft ? `border-right: 1px solid ${tokens.border.color}` : ""}
  ${hasPushedElement && !isSlideFromLeft ? `border-left: 1px solid ${tokens.border.color}` : ""}
  ${isCompact || kind === "child" ? compactStyles : ""};
`
);

export const Main = styled.div`
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
