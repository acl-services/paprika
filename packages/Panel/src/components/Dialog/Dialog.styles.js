import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";
import * as types from "../../types";

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

function getSlideOutTransform(slideFrom) {
  switch (slideFrom) {
    case types.slideFroms.LEFT:
      return "translateX(-100%)";
    case types.slideFroms.RIGHT:
      return "translateX(100%)";
    case types.slideFroms.BOTTOM:
      return "translateY(100%)";
    default:
      return null;
  }
}

function getSlideInTransform(slideFrom) {
  switch (slideFrom) {
    case types.slideFroms.LEFT:
    case types.slideFroms.RIGHT:
      return "translateX(0)";
    case types.slideFroms.BOTTOM:
      return "translateY(0)";
    default:
      return null;
  }
}
function getWidth(width) {
  let result = "";
  if (Number.isNaN(Number(width))) {
    switch (width) {
      case types.widthTypes.SMALL:
        result = "350px";
        break;
      case types.widthTypes.MEDIUM:
        result = "420px";
        break;
      case types.widthTypes.LARGE:
        result = "640px";
        break;
      default:
        result = width;
        break;
    }
  } else {
    result = `${width}px`;
  }
  return result;
}

export const Dialog = styled.div(
  ({ hasPushedElement, height, isAnimating, isInline, isOpen, offset, slideFrom, width, zIndex }) => {
    const slideOutTransform = getSlideOutTransform(slideFrom);
    const slideInTransform = getSlideInTransform(slideFrom);

    let calculatedHeight = null;
    let calculatedWidth = null;
    let left = null;
    let right = null;
    let top = null;
    let bottom = null;
    const borderTop = null;

    switch (slideFrom) {
      case types.slideFroms.LEFT:
      case types.slideFroms.RIGHT:
        calculatedHeight = offset.top ? `calc(100% - ${offset.top}px);` : "100%";
        calculatedWidth = getWidth(width);
        left = slideFrom === types.slideFroms.LEFT ? 0 : null;
        right = slideFrom === types.slideFroms.RIGHT ? 0 : null;
        top = `${offset.top}px`;
        break;
      case types.slideFroms.BOTTOM:
        calculatedHeight = Number.isNaN(Number(height)) ? height : `${height}px`;
        calculatedWidth = `calc(100% - ${offset.left}px - ${offset.right}px)`;
        left = `${offset.left}px`;
        right = `${offset.right}px`;
        bottom = 0;
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
    const boxShadow = hasPushedElement ? "none" : "0 12px 24px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.16)";

    return css`
      ${animationStyle};
      background: ${tokens.color.white};
      border: 0;
      border-top: ${borderTop};
      bottom: ${bottom};
      box-shadow: ${boxShadow};
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      height: ${calculatedHeight};
      left: ${left};
      margin: 0;
      overflow: auto;
      padding: 0;
      ${isInline ? "position: relative;" : "position: fixed;"}
      right: ${right};
      top: ${top};
      width: ${calculatedWidth};
      z-index: ${zIndex};

      &:focus {
        outline: 0;
      }
    `;
  }
);

export const DialogContent = styled.div(
  ({ hasPushedElement, slideFrom }) => css`
    flex-grow: 1;
    margin: 0;
    padding: 0;

    &:focus {
      ${stylers.focusRing.subtle(true)};
    }

    ${hasPushedElement && slideFrom === types.slideFroms.LEFT ? `border-right: 1px solid ${tokens.border.color}` : ""}
    ${hasPushedElement && slideFrom === types.slideFroms.RIGHT ? `border-left: 1px solid ${tokens.border.color}` : ""}
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
