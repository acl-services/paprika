import tokens from "@paprika/tokens/lib/tokens";
import { css } from "styled-components";

export const overlayCSS = css`
  background-color: ${tokens.modal.backdrop.backgroundColor};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  position: fixed;
  display: block;
  top: 0;
`;
