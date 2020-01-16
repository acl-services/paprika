import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Grid = styled.div`
  .grid--is-active {
    box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
    /* border: 2px solid blue; */
  }

  [class*="-header"] {
    overflow: hidden !important;
  }
`;

export const Cell = styled.div`
  position: relative;
`;

export const InnerElementTypeMainGrid = styled.div`
  margin: 8px 0;
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
