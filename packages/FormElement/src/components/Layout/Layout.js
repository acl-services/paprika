import styled, { css } from "styled-components";

export const LayoutFlexParent = styled.div`
  display: flex;
`;

export const LayoutLeftCol = styled.div(
  ({ width }) => css`
    width: 180px;
    ${width && `width: ${width}px;`}
  `
);

export const LayoutRightCol = styled.div`
  flex: 1;
  margin-top: -7px;
`;
