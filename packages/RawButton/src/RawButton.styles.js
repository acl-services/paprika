import { css } from "styled-components";
import stylers from "@paprika/stylers";

const focusStyles = isInset => css`
  &:focus {
    ${stylers.focusRing(isInset)}
  }

  [data-whatinput="mouse"] &:not([data-has-forced-focus="true"]):focus {
    box-shadow: none;
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
  ${({ hasInsetFocusStyle, isActive }) =>
    isActive ? stylers.focusRing(hasInsetFocusStyle) : focusStyles(hasInsetFocusStyle)};
  ${({ isDisabled }) => isDisabled && disabledStyles};
`;

export default rawButtonStyles;
