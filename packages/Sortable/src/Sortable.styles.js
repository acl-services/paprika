import styled from "styled-components";
import tokens from "@paprika/tokens";

export const SortableWrapper = styled.ul`
  ${props => `
    &,
    * {
      box-sizing: border-box;
    }

    margin: 0;
    padding: 0;
    ${props.hasZebraStripes &&
      `li:nth-of-type(even) {
        background-color: ${tokens.table.rowEven.backgroundColor};
      }`};
    `}
`;
