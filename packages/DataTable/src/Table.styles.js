import styled, { css } from "styled-components";

export const Row = styled.div`
  align-items: center;
  border-bottom: 1px solid #dde1e3;
  display: flex;

  width: 100%;
  ${({ $height }) => {
    return css`
      height: ${$height}px;
    `;
  }}
`;

export const Cell = styled.div`
  border-left: 1px solid #dde1e3;
  overflow: hidden;
  padding-left: 8px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  ${({ $width, $height }) => {
    return css`
      ${$width ? `flex-basis: ${$width}px;` : ""}
      ${$height ? `height: ${$height}px; align-items:center; display: flex;` : ""}
    `;
  }}
`;

export const Counter = styled.div`
  color: #4d4d4d;
  flex-basis: 221px;
  font-size: 13px;
  overflow: hidden;
  text-indent: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ $height }) => {
    return css`
      height: ${$height}px;
    `;
  }}
`;
