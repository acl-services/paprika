import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";

import CalendarBaseStyle from "./CalendarBase.styles";
import { HoveredItemStyles, SelectedItemStyles } from "../../shared.styles";

export const ArrowIconStyles = `
  > svg {
    display: block;
  }
`;

const IconButtonStyles = `
  transition: background-color 0.2s ease-out;
  

  &:hover {
    background-color: ${stylers.alpha(tokens.color.black, 0.1)}; 
    border-color: ${tokens.border.hoverColor};
  }

  &:focus,
  &:active {
    box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    outline: none;
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.black, 0.2)};
  }
`;

const CalendarStyled = styled.div`
  ${CalendarBaseStyle}

  * {
    box-sizing: border-box;
    font-family: ${tokens.fontFamily.default};
  }

  &:focus {
    outline: none;
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
    align-items: center;
    background-color: ${tokens.color.blackLighten80};
    display: flex;
    height: ${stylers.spacer(5)};
    justify-content: center;
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

    &:hover {
      background-color: ${tokens.color.white};
      border: none;
    }

    &:focus {
      outline: none;

      > span {
        box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
        border: 1px solid ${tokens.highlight.active.noBorder.borderColor};
      }
    }

    &:active {
      > span {
        box-shadow: ${tokens.highlight.active.noBorder.boxShadow}, inset 0 1px 1px 0 rgba(0, 0, 0, 0.1),
          inset 0 1px ${tokens.spaceSm} 0 rgba(0, 0, 0, 0.3);
        transform: scale(0.98);
      }
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
    align-items: center;
    border-radius: ${tokens.border.radius};
    display: flex;
    height: ${stylers.spacer(3)};
    justify-content: center;
    width: ${stylers.spacer(3)};
    padding: ${tokens.spaceSm};
    position: absolute;
    top: ${tokens.space};

    &:first-child {
      left: ${tokens.space};
    }

    &:last-child {
      right: ${tokens.space};
    }

    ${IconButtonStyles}
  }

  .DayPickerNavigation_button__horizontalDefault {
    top: 3px;
  }

  .CalendarMonth_table {
    border: 0;
    margin-bottom: 0;
    margin-top: ${stylers.spacer(4)};
  }
`;

export const DayTriggerStyle = props => {
  const SelectedStyle = `
    ${SelectedItemStyles}

    &:hover {
      border: 0;
    }
  `;
  const TodayStyle = `
    border: 1px solid ${tokens.border.color};
    font-weight: bold;
  `;

  return `
    align-items: center;
    border-radius: ${tokens.border.radius};
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: inline-flex;
    height: 27px;
    justify-content: center;
    width: 33px;


    &:hover {
      ${HoveredItemStyles}
    }

    ${props.isSelected ? SelectedStyle : ""}
    ${props.isToday ? TodayStyle : ""}
  `;
};

export const MonthHeaderButtonStyled = styled(Button)`
  font-weight: normal;
`;

export default CalendarStyled;
