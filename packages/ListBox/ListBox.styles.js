import styled from "styled-components";
import Popover from "@paprika/popover";
import RawButtonStyled from "@paprika/raw-button/RawButton.styles";

const blueSelected = "#e5f1fe";

export const PopoverStyled = styled(Popover)`
  width: 100%;
  display: inline-block;
`;

export const TriggerArrowStyled = styled.span`
  position: absolute;
  top: 50%;
  margin-top: -6px;
  right: 12px;
  font-size: 11px;
  color: #333;
  pointer-events: none;
  transition: all 0.4s ease;

  ${props => {
    const rotate = props.isOpen ? `transform: rotate(180deg)` : `transform: rotate(0)`;
    return `
      transition: all 0.4s ease;
      ${rotate}
    `;
  }}
`;

export const ListBoxTriggerStyled = styled.div`
  position: relative;

  ${RawButtonStyled} {
    align-items: center;
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid #d7d7d7;
    color: #3f3d3c;
    display: flex;
    font-size: 14px;
    padding: 8px;
    overflow: hidden;
    position: relative;
    text-align: left;
    text-overflow: ellipsis;
    transition: border-color 0.2s;
    white-space: nowrap;
    width: 100%;
  }
`;

export const ListBoxContainerStyled = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.07), 0px 7px 17px rgba(0, 0, 0, 0.1);
  padding: 0;

  ${props => {
    const width = props.triggerWidth ? `width: ${props.triggerWidth}px` : "";
    return `
    ${width}
    `;
  }}
`;

export const ListBoxStyled = styled.ul`
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0 8px 8px 8px;

  li {
    box-sizing: border-box;
  }

  overflow: auto;
  ${props => {
    return `
        max-height: ${props.height}px
      `;
  }}
`;

export const ListBoxOptionStyled = styled.li`
  padding: 4px;
  margin-bottom: 4px;
  font-size: 13px;
  border-radius: 3px;

  &:hover {
    ${props => {
      return props.isSelected ? `background: ${blueSelected}` : `background: #f0f0f0`;
    }}
  }

  ${props => {
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
    `;
  }}
`;

export const ListBoxOptionDividerStyled = styled.li`
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
