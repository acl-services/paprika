import styled, { css } from "styled-components";

export const Segment = styled.div(
  ({ width }) => css`
    border: 1px dashed red;
    flex: 1 1 ${width}%;
  `
);
