import styled, { css } from "styled-components";

export const ValueContainer = styled.div(() => css`
    align-items: center;
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
  `);

export const ValueContainerChild = styled.div(() => css`
    flex-basis: 100%;
    padding: 4px;
  `);
