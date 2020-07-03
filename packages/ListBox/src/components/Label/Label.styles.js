import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

const placeholderStyles = css`
  ${stylers.placeholder};
`;

export const labelStyles = `
  display: inline-block;
  overflow: hidden;
  padding-right: 48px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const Label = styled.span`
  ${props => (props.isPlaceholder && !props.hasImplicitAll ? placeholderStyles : "")}
`;
