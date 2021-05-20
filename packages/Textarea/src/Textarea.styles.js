import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import * as types from "./types";

const sizeStyles = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)}
  `,
  [types.LARGE]: css`
    ${stylers.fontSize()}
  `,
};

export const Textarea = styled.textarea(
  ({ hasError, isDisabled, isReadOnly, size }) => css`
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    margin: 0;
    min-height: 80px;
    outline: none;
    padding: ${tokens.space};
    resize: none;
    width: 100%;
    ${stylers.placeholders};
    ${sizeStyles[size]}
    ${hasError && stylers.errorFormStyles}
    ${isDisabled && stylers.disabledFormStyles}
    ${isReadOnly && stylers.readOnlyFormStyles}

    &:focus {
      ${isReadOnly ? stylers.focusRing.subtle() : stylers.focusRing.bordered()}
    }
`
);
