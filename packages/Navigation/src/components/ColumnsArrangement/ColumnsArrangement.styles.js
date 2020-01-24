import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import PaprikaSortable from "@paprika/sortable";
import PaprikaSwitch from "@paprika/switch";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -${tokens.space};
`;

export const Sortable = styled(PaprikaSortable)`
  padding-top: ${tokens.spaceSm};
`;

export const ColumnLabel = styled.span`
  ${stylers.truncateText}
`;

export const Switch = styled(PaprikaSwitch)`
  flex-shrink: 0;
`;
