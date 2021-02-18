import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const isInlineCSS = css`
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 0 0;
`;

export const Box = styled.div(
  ({ hasError, isInline, triggerWidth }) => css`
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: ${tokens.shadow};
    box-sizing: border-box;
    padding: 0;
    transition: border-color 0.2s;
    ${hasError && stylers.errorFormStyles}
    ${isInline && isInlineCSS}
    ${triggerWidth ? `width: ${triggerWidth}px;` : ""};
  `
);
