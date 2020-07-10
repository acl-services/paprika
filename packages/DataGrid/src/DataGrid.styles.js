import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import types from "./types";

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
    /* restore the original box-shadow on blur */
    box-shadow: 0 0 0 1px ${tokens.border.color};
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

  ${({ gridId, scrollBarWidth }) => {
    /** this is a div that seats with a position absolute on top of the scrollbar for the header
     * when the main table has an scrollbar, this fix the issue found on https://github.com/acl-services/paprika/pull/588
     * for most browser we can change the style for the scrollbar but this doesn't work in IE or Firefox :/
     * this hacks works in any browser
     */
    const fillerTopRightForScrollbarIEEdgeIssue =
      scrollBarWidth > 0
        ? `
          &:after {
            background: ${tokens.table.header.backgroundColor};
            content: "";
            height: 35px;     
            position: absolute;
            right: ${scrollBarWidth}px;
            top: 0;
            width: ${scrollBarWidth}px;
          }
        `
        : "";

    return css`
      ${fillerTopRightForScrollbarIEEdgeIssue};
      .grid-${gridId} {
        overflow: auto !important;
      }

      .${gridId}-header {
        /** header grid doesn't need overflow on the x side */
        overflow: hidden !important;
        overflow-y: ${scrollBarWidth > 0 ? "scroll" : "hidden"} !important;

        ::-webkit-scrollbar {
          background-color: ${tokens.table.header.backgroundColor};
        }
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

const borders = {
  [types.GRID]: `box-shadow: 0 0 0 1px ${tokens.border.color};`,
  [types.NONE]: ``,
  [types.HORIZONTAL]: `box-shadow: 0 -1px 0 0px ${tokens.border.color};`,
  [types.VERTICAL]: `box-shadow: -1px 0 0 0px ${tokens.border.color};`,
};

export const Cell = styled.div.attrs(({ hasZebraStripes, rowIndex, borderType }) => {
  const shadow = borderType in borders ? borders[borderType] : borders.grid;
  const zebra = hasZebraStripes
    ? {
        background:
          rowIndex % 2 === 0 ? `${tokens.table.rowEven.backgroundColor}` : `${tokens.table.row.backgroundColor}`,
      }
    : {};

  const style = {
    ...zebra,
    boxShadow: shadow.replace("box-shadow: ", "") /** styles requires no declaration of box-shadow */,
  };

  return { style };
})`
  background: ${tokens.color.white};
  box-sizing: border-box;
  display: flex;
  font-size: ${tokens.fontSize.default};
  justify-content: flex-start;
  line-height: 1;
  position: relative;

  &:focus {
    outline: 1px solid transparent;
  }

  ${({ hasZebraStripes, rowIndex, borderType }) => {
    const border = borderType in borders ? borders[borderType] : borders.grid;

    const zebraStripe =
      hasZebraStripes && rowIndex % 2 === 0
        ? `background: ${tokens.table.rowEven.backgroundColor};`
        : `background: ${tokens.table.row.backgroundColor};`;

    return `
      ${border}
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
      width: ${scrollBarWidth - 1}px;
      height: ${rowHeight - 1}px;
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
    const displayBlock = stickyGridWidth > 0 ? "" : "display: none;";

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
