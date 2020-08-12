import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

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

export const TD = styled.td(() => {
  return css`
    padding: ${tokens.space};
    text-align: left;
  `;
});

export const TH = styled.td`
  padding: ${tokens.space};
  text-align: left;
`;
