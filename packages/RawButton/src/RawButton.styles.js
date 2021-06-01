import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const focusStyles = isInset => css`
  &:focus {
    outline: none;
  }

  html:not([data-whatinput="mouse"]) &:focus,
  &[data-has-forced-focus]:focus {
    ${stylers.focusRing(isInset)}
  }
`;

const disabledStyles = css`
  cursor: not-allowed;

  &:focus {
    box-shadow: none;
  }
`;

export const RawButton = styled.span(
  ({ hasInsetFocusStyle, isActive, isDisabled }) => css`
    cursor: pointer;
    display: inline-block;
    ${isActive ? stylers.focusRing(hasInsetFocusStyle) : focusStyles(hasInsetFocusStyle)};
    ${isDisabled && disabledStyles};
  `
);
