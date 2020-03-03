import styled from "styled-components";
import Input from "@paprika/input";
import tokens from "@paprika/tokens";

export const FilterContainerStyled = styled.div`
  position: relative;
`;

export const FilterInputStyled = styled(Input)`
  && {
    background-color: white;
    display: inline-block;
    margin: ${tokens.space};
    width: calc(100% - 16px);
  }
`;
