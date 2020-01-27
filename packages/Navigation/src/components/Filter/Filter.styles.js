import styled from "styled-components";
import tokens from "@paprika/tokens";
import PaprikaInput from "@paprika/input";
import { Wrapper } from "../InlineSelect/InlineSelect.styles";

export const FiltersPanel = styled.div`
  width: 580px;

  &:focus {
    outline: none;
  }
`;

export const FilterItem = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${tokens.spaceSm};

  ${Wrapper} {
    margin-right: ${tokens.spaceSm};
  }
`;

export const Input = styled(PaprikaInput)`
  width: 80px;
`;
