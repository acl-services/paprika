import styled from "styled-components";
import Filter from "@paprika/listbox/components/Filter";

const FilterStyled = styled(Filter)`
  border: 1px solid transparent;
  font-size: 14px;
  margin: 0;
  padding: 4px;
  flex-grow: 1;

  &:focus {
    border: 0;
    box-shadow: 0 0 0;
  }
`;
export default FilterStyled;
