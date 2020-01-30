import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

const experimentalGrey = "#e7e7e7"; /* experimental */
const experimentalDarkGrey = "#dadada"; /* experimental */
export const Grid = styled.div.attrs(({ $width, isIdle }) => {
  const _isIdle = isIdle ? { opacity: 0 } : { opacity: 100 };

  return {
    style: { width: `${$width}px`, ..._isIdle },
  };
})`
  * {
    box-sizing: border-box;
  }
  .grid--is-active {
    box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
  }

  .grid--is-blur {
    box-shadow: 0 0 0;
  }

  [role="gridcell"] {
    /* this hide the aria "voice over" focus message */
    &:focus {
      outline: 0;
    }
  }

  border-top: 1px solid ${tokens.border.color};
  background: ${experimentalDarkGrey};

  position: relative;

  ${({ gridId }) => {
    return css`
      .grid-${gridId} {
        overflow-x: scroll !important;
      }

      .${gridId}-header {
        overflow: hidden !important;
      }

      .${gridId}-sticky-columns {
        /*
          The arrow navigatoion is border sensible, please avoid adding a border to this styled components
          doing it will create a incorrect navigation while using the arrow keys.
        */
        box-shadow: 0px 0px 12px 4px ${tokens.border.color};
        /* overflow: hidden !important; */
        overflow-x: hidden !important;
        ::-webkit-scrollbar {
          width: 0px;
        }
        ::-webkit-scrollbar-track-piece {
          -webkit-border-radius: 6px;
          background-color: transparent;
        }
      }
    `;
  }}
`;

export const Cell = styled.div`
  background: ${tokens.color.white};
  border-bottom: 1px solid ${tokens.border.color};
  border-left: 1px solid ${tokens.border.color};
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  line-height: 1;
  position: relative;
  &:focus {
    outline: 1px solid transparent;
    /* outline: 0; */
  }
`;

export const CellHeader = styled(Cell)`
  background: ${experimentalGrey};
  border-bottom: 1px solid ${tokens.border.color};
  border-left: 1px solid ${tokens.border.color};
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
  height: 100%;
  overflow: hidden;
  padding: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const InnerElementType = styled.div``;

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

export const FillerTopRigth = styled.div`
  background: ${experimentalGrey};
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
  /* this is a small square filler on the right top corner of the table */
  background: ${experimentalGrey};
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
  font-color: ${tokens.color.blackLighten40};
  font-size: 13px;
`;

export const WhileOnScrolling = styled.div`
  background: ${tokens.color.cremeLighten5};
  border-radius: ${tokens.border.radius};
  height: 10px;
  width: 100%;
`;

export const Idle = styled.div`
  background: white;
  border: 0;
  cursor: progress;
  opacity: 0;
  position: absolute;
  z-index: 100;

  ${({ $height, $width, gridId }) => {
    return `
      width: ${$width}px;
      height: ${$height}px;
      opacity: 1;
      .${gridId}-idle {
        overflow: hidden !important;
      }
    `;
  }}
`;

export const IdleBlocker = styled.div`
  align-items: center;
  background: transparent;
  border: 1px solid ${tokens.border.color};
  display: Flex;
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
  font-size: 12px;
  padding: 4px;
  ${({ $width }) => {
    return `
      max-width: ${$width + 1}px;
  `;
  }}
`;
