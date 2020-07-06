import styled, { css } from "styled-components";
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

export const RawButtonWrapper = styled.span`
  ${props => `
  cursor: pointer;
  display: inline-block;
  ${props.isActive ? stylers.focusRing(props.hasInsetFocusStyle) : focusStyles(props.hasInsetFocusStyle)};
  ${props.isDisabled && disabledStyles};
  `}
`;
