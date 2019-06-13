import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

import CalendarBaseStyle from "./CalendarBase.styles";

const CalendarStyled = styled.div`
  ${CalendarBaseStyle}

  * {
    box-sizing: border-box;
    font-family: ${tokens.fontFamily.default};
  }

  .DayPicker_transitionContainer__horizontal {
    transition: none;
  }

  .DayPicker_weekHeader {
    top: 46px;

    small {
      ${stylers.fontSize(-1)};
    }
  }

  .CalendarMonth_caption {
    background-color: ${tokens.color.blackLighten80};
    height: ${stylers.spacer(5)};
    line-height: ${stylers.spacer(5)};
    padding: 0;
    margin-bottom: ${tokens.spaceLg};
    margin-left: -9px;
    margin-right: -10px;
    border-bottom: 1px solid ${tokens.border.color};
  }

  .CalendarDay {
    border: 0;
    padding: 0;
    vertical-align: middle;

    &:hover,
    &:focus,
    &:active {
      background-color: ${tokens.color.white};
      border: none;
    }

    &.CalendarDay__selected {
      background-color: ${tokens.color.white};
    }

    &.CalendarDay__outside {
      pointer-events: none;

      > span {
        color: ${tokens.color.blackDisabled};
      }
    }

    &.CalendarDay__blocked_out_of_range {
      pointer-events: none;

      > span {
        color: ${tokens.color.blackDisabled};
      }
    }
  }

  .DayPickerNavigation_button {
    border-radius: ${tokens.border.radius};
    position: absolute;
    top: 10px;
    display: block;
    padding: ${tokens.spaceSm};
    width: 22px;
    height: 22px;
    box-sizing: border-box;

    &:first-child {
      left: ${tokens.space};
    }

    &:last-child {
      right: ${tokens.space};
    }
  }

  .DayPickerNavigation_button__horizontalDefault {
    top: 3px;
  }

  .DayPickerNavigation_button:focus,
  .DayPickerNavigation_button:active {
    box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    outline: none;
  }

  .CalendarMonth_table {
    border: 0;
    margin-bottom: 0;
    margin-top: ${stylers.spacer(4)};
  }
`;

export const DayTriggerStyle = props => {
  const SelectedStyle = `
    background-color: #cde5fc;
    font-weight: bold;

    &:hover {
      border: 0;
    }
  `;
  const TodayStyle = `
    border: 1px solid ${tokens.border.color};
    font-weight: bold;
  `;

  return `
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    width: 30px;
    height: 27px;
    border-radius: ${tokens.border.radius};
    color: ${tokens.color.black};

    &:hover {
      background: ${tokens.color.blackLighten70};
      font-weight: bold;
    }

    ${props.isSelected ? SelectedStyle : ""}
    ${props.isToday ? TodayStyle : ""}
  `;
};

export const CalendarHeaderStyled = styled.span`
  ${stylers.fontSize()}
`;

export default CalendarStyled;
