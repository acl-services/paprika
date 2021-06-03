import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const placeholderStyles = ({ isDisabled }) => css`
  ${stylers.placeholder};
  ${isDisabled && `color: ${tokens.color.blackLighten60}`}
`;

export const labelStyles = css`
  display: inline-block;
  overflow: hidden;
  padding-right: 48px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const Label = styled.span(
  ({ isPlaceholder, hasImplicitAll }) => css`
    ${isPlaceholder && !hasImplicitAll ? placeholderStyles : ""}
  `
);
