import styled from "styled-components";
import stylers from "@paprika/stylers";

export const Cell = styled.div.attrs(({ cellIndex, activeCellIndex }) => {
  const style = {};
  if (cellIndex && activeCellIndex && cellIndex === activeCellIndex) {
    style.outline = "2px solid #2c7ff9";
  }

  return {
    style,
  };
})`
  border-left: 1px solid #dde1e3;
  position: relative;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: flex-start;
`;

export const CellHeader = styled.div`
  background: #f5f5f5;
  font-size: 13px;
  font-weight: bold;
`;

export const InnerCell = styled.div`
  /* padding-left: ${stylers.spacer(1)}; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  line-height: 1.6;
  overflow: hidden;
  padding: 0 8px;
  position: absolute;
  text-overflow: ellipsis;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  width: calc(100% - 16px);
`;
