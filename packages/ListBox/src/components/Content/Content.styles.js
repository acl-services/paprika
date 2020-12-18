import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const Content = styled.div(({ hasOptions }) => {
  return css`
    ${hasOptions ? "" : "display:none;"};
    :focus {
      outline: 2px ${tokens.color.blackLighten30} dotted;
      z-index: 1;
    }
  `;
});
