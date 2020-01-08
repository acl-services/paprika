import styled from "styled-components";
import tokens from "@paprika/tokens";

export const FilterContainerStyled = styled.div`
  position: relative;
`;

export const FilterInputStyled = styled.input`
  && {
    background-color: white;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
    box-shadow: none;
    box-sizing: border-box;
    display: inline-block;
    font-size: 14px;
    height: 32px;
    margin: 8px;
    outline: none;
    padding-left: 28px;
    width: calc(100% - 16px);

    &:focus {
      background-color: #ffffff;
      border-color: #276cf5;
      box-shadow: 0 0 0 2px #99cbfc;
    }

    ${props => {
      return props.isDisabled
        ? ` color: ${tokens.color.blackLighten60}; background: ${tokens.color.blackLighten60};`
        : "";
    }}
  }
`;

export const FilterGroupFilterLabel = styled.label`
  display: block;
  font-size: 13px;
  font-weight: bold;
  margin: 4px 0 4px 0;
  width: 100%;

  &:focus {
    background-color: #ffffff;
    border-color: #276cf5;
    box-shadow: 0 0 0 2px #99cbfc;
  }
`;

export const FilterSearchIconStyled = styled.div`
  border: solid 2px #bdbdbd;
  border-radius: 100%;
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
    background-color: #bdbdbd;
    content: "";
    height: 5px;
    left: 3px;
    position: absolute;
    top: 9px;
    width: 2px;
  }
`;
