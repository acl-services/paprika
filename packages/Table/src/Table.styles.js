import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

import * as types from "./types";

export const Table = styled.table(() => css`
    border: 1px solid ${tokens.border.color};
    border-collapse: collapse;

    &:focus {
      outline: 0;
    }

    & .is-highlighted-focus {
      outline: 2px solid ${tokens.highlight.active.noBorder.borderColor};
    }
    & .is-highlighted-idle {
      outline: 2px solid transparent;
    }
  `);

export const TBody = styled.tbody(({ hasZebraStripes }) => {
  let zebras = "";
  if (hasZebraStripes) {
    zebras = css`
      & td {
        background: ${tokens.table.row.backgroundColor};
      }

      & tr:nth-child(even) td {
        background-color: ${tokens.table.rowEven.backgroundColor};
      }
    `;
  }
  return css`
    ${zebras};
  `;
});

export const borderTypesStyles = {
  [types.NONE]: "",
  [types.VERTICAL]: css`
    border-color: ${tokens.border.color};
    border-style: solid;
    border-width: 0px 1px 0px 1px;
  `,
  [types.HORIZONTAL]: css`
    border-color: ${tokens.border.color};
    border-style: solid;
    border-width: 1px 0px 1px 0px;
  `,
  [types.GRID]: css`
    border: 1px solid ${tokens.border.color};
  `,
};

export const TD = styled.td(({ borderType, cellPropsResetCSS, width = null, sticky }) => {
  const px = Number.isNaN(width) ? "" : "px";
  return css`
    ${typeof sticky !== "undefined" ? `position: sticky; left: ${!Number.isNaN(sticky) ? sticky : 0}px;` : ""};
    ${borderType in borderTypesStyles ? borderTypesStyles[borderType] : ""};
    ${cellPropsResetCSS ? "" : `padding: ${tokens.space};`};
    ${width ? `width: ${width}${px}; max-width: ${width}${px};` : ""};
    text-align: left;
    z-index: 1;
  `;
});
