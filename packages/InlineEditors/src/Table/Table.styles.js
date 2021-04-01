import TableProp from "@paprika/table";
import styled from "styled-components";
import styler from "@paprika/stylers";

export const Table = styled(TableProp)`
  td {
    height: ${styler.spacer(5)};
  }
`;
