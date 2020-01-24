import styled from "styled-components";
import PaprikaInput from "@paprika/input";

export const FiltersPanel = styled.div`
  width: 420px;
`;

export const FilterItem = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  width: 600px;
`;

export const Input = styled(PaprikaInput)`
  width: 80px;
`;
