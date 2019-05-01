import styled from "styled-components";
import Filter from "@paprika/listbox/lib/components/Filter";

const FilterStyled = styled(Filter)`
  width: 100%;
  font-size: 14px;
  margin: 0;
  padding: 4px;
  display: inline-block;
  border: 0;

  &:focus {
    border: 0;
    box-shadow: 0 0 0;
  }
`;
export default FilterStyled;
