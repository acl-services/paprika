import TableProp from "@paprika/table";
import styled from "styled-components";
import styler from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const Table = styled(TableProp)`
  tr {
    &:hover {
      & td {
        background: transparent;
      }
      background: #fdf7ec;
    }
  }
  td {
    height: ${styler.spacer(5)};
  }
`;
