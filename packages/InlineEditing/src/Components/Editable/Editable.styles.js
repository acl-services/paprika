import styled, { css } from "styled-components";

export const CellOverflow = styled.div(({ status: on }) => {
  return css`
    height: 32px;
    ${on.IDLE ? "pointer-events: none;" : ""}
  `;
});
