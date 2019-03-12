import styled from "styled-components";

export const FilterContainerStyled = styled.div`
  position: relative;
`;

export const FilterInputStyled = styled.input`
  background-color: white;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 14px;
  height: 32px;
  margin-bottom: 0;
  margin: 8px;
  outline: none;
  padding-left: 28px;
  width: calc(100% - 16px);

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
  border-radius: 100%;
  border: solid 2px #bdbdbd;
  box-sizing: border-box;
  color: #000;
  height: 12px;
  left: 17px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 17px;
  transform: rotate(-45deg);
  width: 12px;

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
