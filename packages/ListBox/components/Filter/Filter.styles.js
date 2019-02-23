import styled from "styled-components";

export const FilterContainerStyled = styled.div`
  position: relative;
  padding: 8px 8px 0 8px;
`;

export const FilterInputStyled = styled.input`
  background-color: white;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  font-size: 14px;
  height: 32px;
  margin-bottom: 0;
  margin: 4px 0 8px 0;
  outline: none;
  padding-left: 28px;
  width: 100%;

  &:focus {
    background-color: #ffffff;
    border-color: #276cf5;
    box-shadow: 0 0 0 2px #99cbfc;
  }
`;

export const FilterGroupFilterLabel = styled.label`
  font-size: 13px;
  font-weight: bold;
  width: 100%;
  display: block;
  margin: 4px 0 4px 0;

  &:focus {
    background-color: #ffffff;
    border-color: #276cf5;
    box-shadow: 0 0 0 2px #99cbfc;
  }
`;

export const FilterSearchIconStyled = styled.div`
  top: calc(50% - 5px);
  left: 16px;
  color: #000;
  position: absolute;
  width: 12px;
  height: 12px;
  border: solid 2px #bdbdbd;
  border-radius: 100%;
  transform: rotate(-45deg);

  &:before {
    content: "";
    position: absolute;
    top: 9px;
    left: 3px;
    height: 5px;
    width: 2px;
    background-color: #bdbdbd;
  }
`;
