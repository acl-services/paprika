import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

const fixedFooterStyles = css`
  position: fixed;
  width: ${props => props.width};
`;

const relativeFooterStyles = css`
  position: relative;
  width: 100%;
`;

export const footerCSS = css`
  align-items: center;
  background: ${tokens.color.white};
  border-top: 1px solid ${tokens.border.color};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  height: 48px;
  padding: 0;
  right: 0;
  transition: opacity 0.3s ease-in;
  width: 100%;

  ${props => {
    return props.isSticky ? fixedFooterStyles : relativeFooterStyles;
  }}
`;
