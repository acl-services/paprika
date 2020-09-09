import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const Sortable = styled.ul(
  ({ hasZebraStripes }) => css`
    &,
    * {
      box-sizing: border-box;
    }

    margin: 0;
    padding: 0;

    ${hasZebraStripes &&
      `
      li:nth-of-type(even) {
        background-color: ${tokens.table.rowEven.backgroundColor};
      }
    `}
  `
);
