import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Grid = styled.div.attrs(({ $width }) => {
  return {
    style: { maxWidth: `${$width}px` },
  };
})`
  * {
    box-sizing: border-box;
  }
  .grid--is-active {
    box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
  }

  .grid--is-blurred {
    box-shadow: none;
  }

  [role="gridcell"] {
    /* this hide the aria "voice over" focus message */
    &:focus {
      outline: 0;
    }
  }

  background: ${tokens.color.white};
  position: relative;
  box-shadow: 0 0 0 1px ${tokens.border.color};

  ${({ gridId }) => {
    return css`
      .grid-${gridId} {
        overflow: auto !important;
      }

      .${gridId}-header {
        overflow: hidden !important;
      }

      .${gridId}-sticky-columns {
        /* The arrow navigation is sensitive with borders. If a border is used, it will cause issues keyboard navigation. */
        -ms-overflow-style: none;
        box-shadow: 3px 0px 0px 0px ${tokens.border.color};
        overflow-x: hidden !important;
        scrollbar-width: none; /* Internet Explorer 10+ */
        z-index: 1; /* Firefox */

        ::-webkit-scrollbar {
          width: 0px;
        }
        ::-webkit-scrollbar-track-piece {
          -webkit-border-radius: ${tokens.border.radius};
          background-color: transparent;
        }
      }
    `;
  }}
`;

export const Cell = styled.div`
  background: ${tokens.color.white};
  box-shadow: 0 0 0 1px ${tokens.border.color};
  box-sizing: border-box;
  display: flex;
  font-size: ${tokens.fontSize.default};
  justify-content: flex-start;
  line-height: 1;
  position: relative;

  &:focus {
    outline: 1px solid transparent;
  }

  ${({ hasZebraStripes, rowIndex }) => {
    const zebraStripe =
      hasZebraStripes && rowIndex % 2 === 0
        ? `background: ${tokens.table.rowEven.backgroundColor};`
        : `background: ${tokens.table.row.backgroundColor};`;
    return `
      ${zebraStripe}
    `;
  }}
`;

export const CellHeader = styled(Cell)`
  background: ${tokens.table.header.backgroundColor};
  color: ${tokens.color.black};
  display: block;
  font-weight: 600;
  overflow: hidden;
  padding: ${tokens.space};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const InnerCell = styled.div`
  display: block;
  height: 100%;
  overflow: hidden;
  padding: ${tokens.space};
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%; /* All the borders by using the spread properties */
`;

export const OuterElementType = styled.div`
  background: ${tokens.table.header.backgroundColor};
`;

export const InnerElementType = styled.div``;

export const InnerElementTypeMainGrid = styled.div``;

export const OuterElementTypeMainGrid = styled.div`
  /* The arrow navigation is sensitive with borders. If a border is used, it will cause issues keyboard navigation. */
  box-shadow: 0 0 0 1px ${tokens.border.color}; /* All the borders by using the spread properties */
`;

export const GridCell = styled.div`
  height: 1px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  white-space: nowrap;
  width: 1px;
`;
export const FillerTopRight = styled.div`
  background: ${tokens.table.header.backgroundColor};
  border-bottom: 0;
  box-shadow: 0 0 0 1px ${tokens.border.color};
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

export const FillerBottomLeft = styled.div`
  /* this is a small square filler on the bottom left corner of the DataGrid */
  background: ${tokens.table.header.backgroundColor};
  bottom: 0;
  box-shadow: 0 0 0 1px ${tokens.border.color};
  left: 0;
  position: absolute;
  z-index: 3;
  ${({ stickyGridWidth, scrollBarWidth }) => {
    const displayBlock = scrollBarWidth > 0 ? "" : "display: none;";

    return `
      ${displayBlock}
      height: ${scrollBarWidth}px;
      width: ${stickyGridWidth}px;
    `;
  }}
`;

export const Flex = styled.div`
  display: flex;
`;

export const RowCount = styled.div`
  color: ${tokens.color.blackLighten40};
  font-size: ${stylers.fontSize(-2)};
`;

export const Footer = styled.div`
  box-shadow: 0 0 0 1px ${tokens.border.color};
  box-sizing: border-box; /* custom value */
  font-size: 12px;
  padding: ${tokens.spaceSm}; /* All the borders by using the spread properties */

  ${({ $width }) => {
    return `
      max-width: ${$width}px;
  `;
  }}
`;
