import TablePaprika from "@paprika/table";
import styled from "styled-components";
import styler from "@paprika/stylers";

export const Table = styled(TablePaprika)`
  tr {
    &:hover {
      & td {
        background: transparent;
      }

      & [data-pka-anchor="inline-editors-table-edit-icon"] {
        opacity: 1;
      }

      /* no token available */
      background: #fdf7ec;
    }
  }
  td {
    height: ${styler.spacer(5)};
  }
`;
