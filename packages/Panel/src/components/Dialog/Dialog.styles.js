import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";
import * as types from "../../types";

const childPanelCss = ({ isCompact, groupOffsetY, offset }) => {
  const totalOffset = isCompact ? 48 : 64;
  const childBottomOffsetY = totalOffset + groupOffsetY + offset.top;
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

function getSlideOutTransform(slideFrom) {
  switch (slideFrom) {
    case types.slide.LEFT:
      return "translateX(-100%)";
    case types.slide.RIGHT:
      return "translateX(100%)";
    case types.slide.BOTTOM:
      return "translateY(100%)";
    default:
      return null;
  }
}

function getSlideInTransform(slideFrom) {
  switch (slideFrom) {
    case types.slide.LEFT:
    case types.slide.RIGHT:
      return "translateX(0)";
    case types.slide.BOTTOM:
      return "translateY(0)";
    default:
      return null;
  }
}

export const Dialog = styled.div(
  ({ hasPushedElement, height, isAnimating, isInline, isOpen, kind, offset, slideFrom, width, zIndex }) => {
    const slideOutTransform = getSlideOutTransform(slideFrom);
    const slideInTransform = getSlideInTransform(slideFrom);

    let _height = null;
    let _width = null;
    let left = null;
    let right = null;
    let top = null;
    let bottom = null;
    let borderTop = null;

    switch (slideFrom) {
      case types.slide.LEFT:
      case types.slide.RIGHT:
        _height = offset.top ? `calc(100% - ${offset.top}px);` : "100%";
        _width = Number.isNaN(Number(width)) ? width : `${width}px`;
        left = slideFrom === types.slide.LEFT ? 0 : null;
        right = slideFrom === types.slide.RIGHT ? 0 : null;
        top = `${offset.top}px`;
        break;
      case types.slide.BOTTOM:
        _height = Number.isNaN(Number(height)) ? height : `${height}px`;
        _width = `calc(100% - ${offset.left}px - ${offset.right}px)`;
        left = `${offset.left}px`;
        right = `${offset.right}px`;
        bottom = 0;
        borderTop = `1px solid ${tokens.border.color}`;
        break;
      default:
    }

    const animationStyle = isAnimating
      ? css`
          animation: ${isOpen
              ? slideIn(slideInTransform, slideOutTransform)
              : slideOut(slideInTransform, slideOutTransform)}
            0.4s forwards;
        `
      : "";

    const childPanel = kind === "child" ? childPanelCss : "";
    const boxShadow = hasPushedElement ? "none" : tokens.modal.shadow;

    return css`
      ${animationStyle};
      background: ${tokens.color.white};
      border: 0;
      border-top: ${borderTop};
      bottom: ${bottom};
      box-shadow: ${boxShadow};
      box-sizing: border-box;
      ${childPanel}
      display: flex;
      flex-direction: column;
      height: ${_height};
      left: ${left};
      margin: 0;
      overflow: auto;
      padding: 0;
      ${isInline ? "position: relative;" : "position: fixed;"}
      right: ${right};
      top: ${top};
      width: ${_width};
      z-index: ${zIndex};

      &:focus {
        outline: 0;
      }
    `;
  }
);

export const DialogContent = styled.div(
  ({ hasPushedElement, slideFrom, isCompact, kind }) => css`
  flex-grow: 1;
  margin: 0;
  padding: 0;

  &:focus {
    ${stylers.focusRing.subtle(true)};
  }

  ${hasPushedElement && slideFrom === types.slide.LEFT ? `border-right: 1px solid ${tokens.border.color}` : ""}
  ${hasPushedElement && slideFrom === types.slide.RIGHT ? `border-left: 1px solid ${tokens.border.color}` : ""}
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
