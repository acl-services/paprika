import styled, { css } from "styled-components";

function getWidth({ propsWidth, calculatedWidth }) {
  if (propsWidth) {
    return css`
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: ${propsWidth}px;
    `;
  }

  if (calculatedWidth) {
    return css`
      width: ${calculatedWidth}px;
    `;
  }
  return "";
}

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  ${({ tableWidth }) => {
    return `width:${tableWidth}px;`;
  }}
`;

export const Table = styled.table`
  * {
    box-sizing: border-box;
  }
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

export const TBody = styled.tbody`
  width: 100%;
  ${({ height, isPreparing }) => {
    return css`
      /* overflow: hidden; */
      ${!isPreparing ? `display: block; height: ${height}px;` : ""}
    `;
  }}
`;

export const THead = styled.thead`
  width: 100%;
  ${({ isPreparing }) => {
    return css`
      ${!isPreparing ? `display: inline-block;` : ""}
    `;
  }}
`;

export const Th = styled.th`
  padding: 8px;
  ${getWidth};
`;

export const Td = styled.td`
  padding: 16px;
  ${getWidth};
  ${({ calculatedHeight }) => {
    return `height:${calculatedHeight}px;`;
  }}
`;

export const Virtualize = styled.div`
  box-sizing: border-box;

  width: 100%;
  ${({ height, isPreparing, headerHeight, isScrollActive }) => {
    return css`
      overflow: scroll;
      position: absolute;
      top: ${headerHeight}px;
      ${!isPreparing ? `height:${height}px;` : ""}
      ${isScrollActive ? "z-index: 1;" : "z-index: -1;"}
    `;
  }}
`;

export const VirtualizeContent = styled.div`
  background: green;
  border: 1px dotted green;
  display: block;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  ${({ height }) => {
    return css`
      height: ${height}px;
    `;
  }}
`;
