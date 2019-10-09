import { css } from "styled-components";
import tokens from "@paprika/tokens";

const sortableStyles = css`
  &,
  * {
    box-sizing: border-box;
  }

  margin: 0;
  padding: 0;

  ${({ hasZebraStripes }) =>
    hasZebraStripes &&
    `
      li:nth-of-type(even) {
        background-color: ${tokens.table.rowEven.backgroundColor};
      }
    `}
`;

export default sortableStyles;
