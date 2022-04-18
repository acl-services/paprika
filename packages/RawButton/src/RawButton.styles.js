import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const focusStyles = isInset => css`
  &:focus {
    ${stylers.focusRing(isInset)}

    &:not(:focus-visible) {
      box-shadow: none;
    }
  }
  &:focus-visible,
  &[data-has-forced-focus]:focus {
    ${stylers.focusRing(isInset)}
  }

  &[aria-disabled="true"]:focus {
    ${stylers.focusRing.subtle(isInset)}
    box-shadow: none;

    &:not(:focus-visible) {
      outline: none;
    }
  }
  &[aria-disabled="true"]:focus-visible {
    ${stylers.focusRing.subtle(isInset)}
    border-color: transparent;
    box-shadow: none;
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
