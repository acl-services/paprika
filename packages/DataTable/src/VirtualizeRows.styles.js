import styled from "styled-components";

export const Virtualize = styled.div.attrs(({ height, width }) => ({
  style: {
    width: `${width}px`,
    height: `${height}px`,
  },
}))`
  background: #f5f5f5;
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

export const VirualizeRows = styled.div.attrs(({ top }) => ({
  style: {
    top,
  },
}))`
  position: relative;
`;
