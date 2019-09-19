import { css } from "styled-components";
import tokens from "@paprika/tokens";

export const containerStyles = css`
  display: inline-block;
  position: relative;
`;

export const labelStyles = css`
  cursor: pointer;
  display: inline-block;
  height: 100%;
  position: absolute;
  width: 100%;
`;

export const inputFileStyles = css`
  border: 0;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
  &:focus + label {
    box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
  }
`;
