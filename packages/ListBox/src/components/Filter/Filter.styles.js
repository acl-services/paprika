import styled from "styled-components";
import Input from "@paprika/input";
import tokens from "@paprika/tokens";

export const Filter = styled.div`
  padding: ${tokens.space};
  position: relative;
`;

export const FilterInput = styled(Input)`
  && {
    background-color: ${tokens.color.white};
  }
`;
