import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;
const insetFocusStyle = tokens.highlight.active.withBorder.insetBoxShadow;

const focusStyles = isInset => `
  &:focus {
    box-shadow: ${isInset ? insetFocusStyle : focusStyle};
    outline: none;
  }
`;

const disabledStyles = `
  cursor: not-allowed;

  &:focus {
    box-shadow: none;
  }
`;

const rawButtonStyles = css`
  ${stylers.inlineBlockStyle};
  cursor: pointer;
  ${({ hasInsetFocusStyle }) => focusStyles(hasInsetFocusStyle)};
  ${({ isDisabled }) => (isDisabled ? disabledStyles : null)};
`;

export default rawButtonStyles;
