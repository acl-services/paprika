import styled from "styled-components";

export const Grid = styled.div`
  .grid--is-active {
    outline: 2px solid blue;
  }

  [class*="-header"] {
    overflow: hidden !important;
  }
`;

export const Cell = styled.div`
  position: relative;
  .grid--is-active {
    border: 1px solid blue;
  }
`;

export const GridCell = styled.div`
  height: 1px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  whitespace: nowrap;
  width: 1px;
`;
