import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const isInlineCSS = css`
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 0 0;
`;

const errorStyles = css`
  ${stylers.errorFormStyles}
  border-top-color: ${tokens.border.color};
`;

export const Box = styled.div(
  ({ hasError, isInline, isReadOnly, triggerWidth }) => css`
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: ${tokens.shadow};
    box-sizing: border-box;
    padding: 0;
    transition: border-color 0.2s;
    ${hasError && isInline ? errorStyles : ""}
    ${isInline ? isInlineCSS : ""}
    ${triggerWidth ? `width: ${triggerWidth}px;` : ""};
    ${isReadOnly ? stylers.readOnlyFormStyles : ""}
  `
);
