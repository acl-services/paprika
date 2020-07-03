import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;
const insetFocusStyle = tokens.highlight.active.withBorder.insetBoxShadow;

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

const commonStyles = styled.span`
  cursor: pointer;
  display: inline-block;
`;

export const rawButtonStyles = styled(commonStyles)`
  ${props => {
    const hasInsetFocusStyle = focusStyles(props.hasInsetFocusStyle);
    const isDisabled = props.isDisabled ? disabledStyles : null;

    return `
    ${hasInsetFocusStyle};
    ${isDisabled};
  `;
  }}
`;
