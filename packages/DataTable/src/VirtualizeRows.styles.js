import styled from "styled-components";

export const Virtualize = styled.div.attrs(({ height, width, rowHeight }) => ({
  style: {
    width: `${width}px`,
    height: `${height + rowHeight / 3}px`,
  },
}))`
  background: #fff;
  box-sizing: border-box;
  overflow: scroll;
  width: 100%;
`;

export const VirtualizeContent = styled.div.attrs(({ height }) => ({
  style: {
    // this should be height + rowHeight + footer in case we put it
    height: `${height + 64}px`,
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
