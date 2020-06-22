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

  border-top: 1px solid ${tokens.border.color};
  background: ${tokens.color.white};
  position: relative;

  ${({ gridId }) => {
    return css`
      .grid-${gridId} {
        overflow: scroll !important;
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

export const Cell = styled.div.attrs(({ hasZebraStripes, rowIndex }) => {
  const style = {
    background:
      hasZebraStripes && rowIndex % 2 === 0
        ? `${tokens.table.rowEven.backgroundColor}`
        : `${tokens.table.row.backgroundColor}`,
  };

  return { style };
})`
  background: ${tokens.color.white};
  border-bottom: 1px solid ${tokens.border.color};
  border-left: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  display: flex;
  font-size: ${tokens.fontSize.default};
  justify-content: flex-start;
  line-height: 1;
  position: relative;

  &:focus {
    outline: 1px solid transparent;
  }
`;

export const CellHeader = styled(Cell)`
  background: ${tokens.table.header.backgroundColor};
  border-bottom: 1px solid ${tokens.border.color};
  border-left: 1px solid ${tokens.border.color};
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
  width: 100%;
`;

export const InnerElementType = styled.div``;

export const InnerElementTypeMainGrid = styled.div``;

export const OuterElementTypeMainGrid = styled.div`
  /* The arrow navigation is sensitive with borders. If a border is used, it will cause issues keyboard navigation. */
  box-shadow: 0px 1px 0px 0px ${tokens.border.color}, 1px 0px 0px 0px ${tokens.border.color};
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
  border: 1px solid ${tokens.border.color};
  border-bottom: 0;
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
  border: 1px solid ${tokens.border.color};
  bottom: 0;
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

export const Blocker = styled.div`
  align-items: center;
  background: transparent;
  border: 1px solid ${tokens.border.color};
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 4;

  ${({ $height, $width }) => {
    return `
      width: ${$width}px;
      height: ${$height}px;
    `;
  }}
`;

export const Footer = styled.div`
  border: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  font-size: 12px; /* custom value */
  padding: ${tokens.spaceSm};
  ${({ $width }) => {
    return `
      max-width: ${$width + 1}px;
  `;
  }}
`;
