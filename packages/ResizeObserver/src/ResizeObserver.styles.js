import styled, { css } from "styled-components";

export const ResizeObserver = styled.span`
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
