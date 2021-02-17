import styled, { css } from "styled-components";

export const CellOverflow = styled.div(({ status: on }) => {
  return css`
    height: 32px;
    ${on.IDLE ? "pointer-events: none;" : ""}
  `;
});

export const Edit = styled.div(({ rect }) => {
  return css`
    align-items: center;
    background: green;
    display: flex;
    height: ${rect.height}px;
    justify-content: center;
    width: ${rect.width}px;
    & > div {
      width: 100%;
    }
  `;
});
