import styled from "styled-components";

export const Cell = styled.div.attrs(({ cellIndex, activeCellIndex }) => {
  const style = {};
  if (cellIndex && activeCellIndex && cellIndex === activeCellIndex) {
    style.outline = "3px solid #2c7ff9";
  }

  return {
    style,
  };
})`
  border-left: 1px solid #dde1e3;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const CellHeader = styled.div`
  background: #f5f5f5;
  font-size: 13px;
  font-weight: bold;
`;
