import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import types from "./types";

export const Table = styled.table`
  border: 1px solid ${tokens.border.color};
  border-collapse: collapse;
`;

export const TBody = styled.tbody(({ hasZebraStripes }) => {
  let zebras = "";
  if (hasZebraStripes) {
    zebras = css`
      & tr {
        background: ${tokens.table.row.backgroundColor};
      }

      & tr:nth-child(odd) {
        background-color: ${tokens.table.rowEven.backgroundColor};
      }
    `;
  }
  return css`
    ${zebras};
  `;
});

export const Thead = styled.thead`
  background: ${tokens.table.header.backgroundColor};

  text-align: left;
`;

const borderTypesStyles = {
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

export const TD = styled.td(({ borderType }) => {
  return css`
    ${borderType in borderTypesStyles ? borderTypesStyles[borderType] : ""}
    padding: ${tokens.space};
    text-align: left;
  `;
});

export const TH = styled.th(({ borderType }) => {
  return css`
    ${borderType in borderTypesStyles ? borderTypesStyles[borderType] : ""}
    padding: ${tokens.space};
    text-align: left;
  `;
});
