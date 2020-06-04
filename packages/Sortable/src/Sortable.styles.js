import styled from "styled-components";
import tokens from "@paprika/tokens";

const commonStyles = styled.ul`
  &,
  * {
    box-sizing: border-box;
  }

  margin: 0;
  padding: 0;
`;

export const sortableStyles = styled(commonStyles)`
  ${props => {
    const hasZebraStripes =
      props.hasZebraStripes &&
      `li:nth-of-type(even) {
        background-color: ${tokens.table.rowEven.backgroundColor};
      }`;

    return `
      ${hasZebraStripes};
    `;
  }}
`;
