import styled, { css } from "styled-components";

export const ResizeDetector = styled.div<{
  isFullWidth: boolean;
  isFullHeight: boolean;
  [otherProps: string]: unknown;
}>(
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
