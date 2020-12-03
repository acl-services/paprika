import styled, { css } from "styled-components";

export const LeftCol = styled.div(
  ({ width }) => css`
    flex-shrink: 0;
    width: ${typeof width === "number" ? `${width}px` : width};
  `
);
