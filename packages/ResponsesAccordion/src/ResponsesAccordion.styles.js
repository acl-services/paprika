import { css } from "styled-components";
import tokens from "@paprika/tokens";

export const accordionStyles = css`
  &,
  * {
    box-sizing: border-box;
  }
`;

export const itemStyles = css`
  align-items: top;
  display: flex;

  [data-pka-anchor="indicator"] {
    margin: ${tokens.space} ${tokens.spaceLg} 0 0;
  }
`;
