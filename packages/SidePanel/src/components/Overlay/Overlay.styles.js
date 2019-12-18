import tokens from "@paprika/tokens/lib/tokens";
import { css } from "styled-components";

export const overlayCSS = css`
  background-color: ${tokens.overlay.backdrop.backgroundColor};
  box-sizing: content-box;
  display: block;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${props => props.zIndex};
`;
