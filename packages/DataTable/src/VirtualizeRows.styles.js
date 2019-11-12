import styled from "styled-components";

export const Virtualize = styled.div.attrs(({ height }) => ({
  style: {
    height: `${height}px`,
  },
}))`
  border: 3px solid red;
  box-sizing: border-box;
  width: 100%;
  overflow: scroll;
`;

export const VirtualizeContent = styled.div.attrs(({ height }) => ({
  style: {
    height: `${height}px`,
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
