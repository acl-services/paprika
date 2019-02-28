import styled from "styled-components";
import tokens from "@paprika/tokens";

const blueSelected = "#e5f1fe";

export const OptionStyled = styled.li`
  padding: 4px;
  margin-bottom: 4px;
  font-size: 13px;
  border-radius: 3px;

  &:hover {
    ${props => {
      const isSelected = props.isSelected ? `background: ${blueSelected}` : `background: #f0f0f0`;
      const isDisabled = props.isDisabled ? "background: none;" : "";

      return `
        ${isSelected}
        ${isDisabled}
      `;
    }}
  }

  ${props => {
    const isDisabled = props.isDisabled ? `color: ${tokens.color.blackLighten60};` : "";

    const isActived = props.isActive
      ? `
        border-width: 3px;
        border-style: solid;
        border-color: Highlight;
        border-radius: 3px;
        `
      : "";

    const isSelected = props.isSelected ? `font-weight: 600; background: ${blueSelected}` : "";

    return `
      ${isActived}
      ${isSelected}
      ${isDisabled}
    `;
  }}
`;

export const OptionDividerStyled = styled.li`
  align-items: center;
  display: flex;
  color: #717171;
  font-size: 14px;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  padding: 4px;

  &:before {
    background: #d7d7d7;
    content: "";
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    margin-right: 8px;
  }

  &:after {
    background: #d7d7d7;
    content: "";
    display: inline-block;
    flex-grow: 1;
    height: 1px;
    margin-left: 8px;
  }
`;
