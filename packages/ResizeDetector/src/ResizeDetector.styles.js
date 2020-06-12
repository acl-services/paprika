import styled, { css } from "styled-components";

export const ResizeDetector = styled.span`
  display: inline-block;

  ${({ isFullWidth }) =>
    isFullWidth &&
    css`
      width: 100%;
    `}

  ${({ isFullHeight }) =>
    isFullHeight &&
    css`
      height: 100%;
    `}
`;
