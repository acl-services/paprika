import styled from "styled-components";

export const Cell = styled.div.attrs(({ cellIndex, activeCellIndex, $height, $width, isHeaderCell = false }) => {
  const style = {};
  if (cellIndex && activeCellIndex && cellIndex === activeCellIndex) {
    style.outline = "3px solid #2c7ff9";
  }

  if ($height) {
    style.height = isHeaderCell ? "32px" : `${$height}px`;
    style.alignItems = "center";
    style.display = "flex";
  }

  if ($width) {
    style.flexBasis = `${$width}px`;
  }

  return {
    style,
  };
})`
  border-left: 1px solid #dde1e3;
  overflow: hidden;
  flex-grow: 0;
  padding-left: 8px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
