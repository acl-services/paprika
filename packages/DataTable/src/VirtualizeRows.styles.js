import styled from "styled-components";

export const Virtualize = styled.div.attrs(({ height, width }) => ({
  style: {
    width: `${width}px`,
    height: `${height}px`,
  },
}))`
  background: #fff;
  box-sizing: border-box;
  overflow: scroll;
  width: 100%;
  padding-bottom: 80px;
`;

export const VirtualizeContent = styled.div.attrs(({ height }) => ({
  style: {
    height: `${height}px`,
  },
}))`
  display: block;
  width: 100%;
`;

export const VirtualizeRows = styled.div.attrs(({ top }) => ({
  style: {
    top,
  },
}))`
  position: relative;
`;
