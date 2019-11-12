import styled, { css } from "styled-components";

export const Row = styled.div`
  display: flex;
  width: 100%;
  ${({ height }) => {
    return css`
      height: ${height}px;
    `;
  }}
`;
