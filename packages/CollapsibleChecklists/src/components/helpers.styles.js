import { css } from "styled-components";
import tokens from "@paprika/tokens";

export const disabledStyles = css`
  color: ${tokens.color.blackDisabled};
  font-style: italic;

  input[type="checkbox"] {
    cursor: not-allowed;
  }
`;
