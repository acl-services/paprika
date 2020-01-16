import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Grid = styled.div`
  * {
    box-sizing: border-box;
  }
  .grid--is-active {
    box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
  }

  [role="gridcell"] {
    /* this hide the aria "voice over" focus message */
    &:focus {
      border: 0;
      outline: 0;
    }
  }

  [class*="-header"] {
    overflow: hidden !important;
  }

  position: relative;

  ${({ $width }) => {
    return `width: ${$width}px;`;
  }}
`;

export const Cell = styled.div`
  border-bottom: 1px solid ${tokens.border.color};
  border-left: 1px solid ${tokens.border.color};
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  line-height: 1;
  position: relative;
`;

export const CellHeader = styled(Cell)`
  background: #e7e7e7; /* experimental */
  border-bottom: 1px solid ${tokens.border.color};
  border-left: 1px solid ${tokens.border.color};
  border-top: 1px solid ${tokens.border.color};
  color: ${tokens.color.black};
  display: block;
  font-weight: 600;
  overflow: hidden;
  padding: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const InnerCell = styled.div`
  display: block;
  overflow: hidden;
  padding: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const InnerElementTypeMainGrid = styled.div``;

export const OuterElementTypeMainGrid = styled.div`
  /*
   The arrow navigatoion is border sensible, please avoid adding a border to this styled components
   doing it will create a incorrect navigation while using the arrow keys.
  */

  box-shadow: 0px 1px 0px 0px ${tokens.border.color}, 1px 0px 0px 0px ${tokens.border.color};
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

export const Filler = styled.div`
  /* this is a small square filler on the right top corner of the table */
  background: ${tokens.border.color};
  position: absolute;
  right: 0;
  top: 0;
  ${({ rowHeight, scrollBarWidth }) => {
    const displayBlock = scrollBarWidth > 0 ? "" : "display: none;";

    return `
      ${displayBlock}
      width: ${scrollBarWidth}px;
      height: ${rowHeight}px;
    `;
  }}
`;
