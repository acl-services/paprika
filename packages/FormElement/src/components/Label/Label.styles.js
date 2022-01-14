import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Requirement = styled.div`
  color: ${tokens.textColor.subtle};
  display: inline-block;
  font-weight: normal;
`;

export const Label = styled.div(
  ({ isVisuallyHidden, isDisabledStyle }) => css`
    align-items: center;
    color: ${tokens.textColor.default};
    display: flex;
    font-size: inherit;
    font-weight: bold;
    margin: 0 ${tokens.space} ${tokens.spaceSm} 0;
    padding: 0;
    position: relative;
    ${isVisuallyHidden && stylers.visuallyHidden}
    ${isDisabledStyle && `opacity: 0.5;`}
  `
);
