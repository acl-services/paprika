import styled, { css } from "styled-components";

export const LeftCol = styled.div(
  ({ width }) => css`
    flex-shrink: 0;
    width: ${width};
  `
);
