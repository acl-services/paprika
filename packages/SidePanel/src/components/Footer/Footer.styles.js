import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

export const footerCSS = css`
  align-items: center;
  background: ${tokens.color.white};
  border-top: 1px solid ${tokens.border.color};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  padding: 0;
  right: 0;
  width: 100%;
  height: 48px;
  position: relative;
  transition: opacity 0.3s ease-in;
  ${props => {
    return props.isSticky ? "position: absolute;" : "";
  }}
`;
