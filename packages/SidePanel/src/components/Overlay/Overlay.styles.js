import tokens from "@paprika/tokens/lib/tokens";
import { css } from "styled-components";

export const overlayCSS = css`
  background-color: ${tokens.modal.backdrop.backgroundColor};
  box-sizing: content-box;
  display: block;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
`;
