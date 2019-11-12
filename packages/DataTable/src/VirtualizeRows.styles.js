import styled from "styled-components";

export const Virtualize = styled.div.attrs(({ height, width }) => ({
  style: {
    width: `${width}px`,
    height: `${height}px`,
  },
}))`
  box-sizing: border-box;
  overflow: scroll;
  width: 100%;
`;

export const VirtualizeContent = styled.div.attrs(({ height }) => ({
  style: {
    height: `${height + 32}px`,
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
