import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const focusStyles = isInset => css`
  &:focus {
    ${stylers.focusRing(isInset)}
  }

  [data-whatinput="mouse"] &:not([data-has-forced-focus="true"]):focus {
    box-shadow: none;
    outline: none;
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
