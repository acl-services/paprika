import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

const focusStyle = tokens.highlight.active.withBorder.boxShadow;
const insetFocusStyle = tokens.highlight.active.withBorder.insetBoxShadow;

const focusStyles = isInset => css`
  &:focus {
    box-shadow: ${isInset ? insetFocusStyle : focusStyle};
    outline: none;
  }

  [data-whatinput="mouse"] &:focus {
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
