import TableProp from "@paprika/table";
import styled from "styled-components";

export const Table = styled(TableProp)`
  td {
    height: 40px;
  }

  td [data-pka-anchor="raw-button"].inline-editing-raw-button {
    width: 100%;
  }
`;
