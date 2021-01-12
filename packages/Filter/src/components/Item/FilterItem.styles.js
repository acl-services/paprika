import styled from "styled-components";
import Button from "@paprika/button";
import Select from "@paprika/select";
import tokens from "@paprika/tokens";

export const FilterItem = styled.li`
  align-items: center;
  background-color: ${tokens.color.blackLighten70};
  border-radius: ${tokens.card.borderRadius};
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${tokens.spaceLg};
  padding: ${tokens.spaceLg} ${tokens.space};
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;

  [data-pka-anchor="filter.filterItem.valueInput--date"] {
    flex-basis: 100%;
    margin-top: ${tokens.spaceLg};
  }
`;

export const ColumnSelect = styled(Select)`
  flex-basis: calc(50% - 6px);
  margin-right: ${tokens.spaceLg};
`;

export const RuleSelect = styled.div`
  flex-basis: calc(50% - 6px);
`;

export const ValueInput = styled.div`
  flex-basis: 100%;
  margin-top: ${tokens.spaceLg};
`;

export const DeleteButton = styled(Button.Icon)`
  margin-left: ${tokens.space};
`;
