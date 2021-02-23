import styled, { css } from "styled-components";

export const Segment = styled.div(
  ({ width }) => css`
    flex: 1 1 ${width}%;
  `
);
