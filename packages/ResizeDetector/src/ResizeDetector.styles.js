import styled, { css } from "styled-components";

export const ResizeDetector = styled.span(
  ({ isFullWidth, isFullHeight }) => css`
    display: inline-block;

    ${isFullWidth &&
      css`
        width: 100%;
      `}

    ${isFullHeight &&
      css`
        height: 100%;
      `}
  `
);
