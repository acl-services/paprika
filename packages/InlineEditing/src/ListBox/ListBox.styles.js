import styled, { css } from "styled-components";

export const ValueContainer = styled.div(() => {
  return css`
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  `;
});

export const ValueContainerChild = styled.div(() => {
  return css`
    flex-basis: 100%;
    padding: 4px;
  `;
});
