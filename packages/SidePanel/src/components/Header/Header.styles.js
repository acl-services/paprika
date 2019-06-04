import tokens from "@paprika/tokens/lib/tokens";
import { css } from "styled-components";

const space = Number.parseInt(tokens.space, 10);
export const headerCSS = css`
  align-item: center;
  background: ${tokens.color.purple};
  border: 1px solid transparent;
  box-sizing: border-box;
  color: ${tokens.color.white};
  display: flex;
  justify-content: space-between;
  padding-left: ${space}px;
  padding-right: ${space}px;
  width: 100%;

  .close-button-container {
    align-self: center;
  }
`;
