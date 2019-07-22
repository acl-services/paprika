import { css } from "styled-components";
import tokens from "@paprika/tokens";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;
const insetFocusStyle = tokens.highlight.active.withBorder.insetBoxShadow;

const focusStyles = isInset => css`
  &:focus {
    box-shadow: ${isInset ? insetFocusStyle : focusStyle};
    outline: none;
  }
`;

const disabledStyles = css`
  cursor: not-allowed;

  &:focus {
    box-shadow: none;
  }
`;

const rawButtonStyles = css`
  cursor: pointer;
  display: inline-block;
  ${({ hasInsetFocusStyle }) => focusStyles(hasInsetFocusStyle)};
  ${({ isDisabled }) => (isDisabled ? disabledStyles : null)};
`;

export default rawButtonStyles;
