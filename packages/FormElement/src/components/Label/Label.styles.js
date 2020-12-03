import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Requirement = styled.div`
  color: ${tokens.textColor.subtle};
  font-weight: normal;
`;

export const Label = styled.div(
  ({ isVisuallyHidden }) => css`
    color: ${tokens.textColor.default};
    display: inline-block;
    font-size: inherit;
    font-weight: bold;
    margin: 0 ${tokens.space} ${tokens.spaceSm} 0;
    padding: 0;
    position: relative;
    ${stylers.lineHeight(-1)}
    ${isVisuallyHidden && stylers.visuallyHidden}
  `
);
