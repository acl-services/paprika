import { css, keyframes } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";

function slideIn() {
  return keyframes`
    0% { width: 100%; }
    100% { width: 100%; }
  `;
}

function slideOut(width) {
  return keyframes`
    0% { width: 100%; }
    99% { width: 100%; }
    100% { width: ${width}; }
  `;
}

const fixedFooterStyles = css`
  ${props => {
    const animation = props.isOpen ? slideIn() : slideOut(props.width);

    return css`
      animation: ${animation} 0.7s ease;
      position: fixed;
      width: ${props.width};
    `;
  }}
`;

const relativeFooterStyles = css`
  position: relative;
  width: 100%;
`;

const compactStyles = css`
  padding: ${stylers.spacer(2)};
`;

export const footerCSS = css`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  height: ${props => (props.height ? props.height : stylers.spacer(9))};
  padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
  right: 0;
  transition: opacity 0.3s ease-in;
  width: 100%;

  ${props => (props.isCompact ? compactStyles : "")}
  ${props => {
    return props.isSticky ? fixedFooterStyles : relativeFooterStyles;
  }}
`;
