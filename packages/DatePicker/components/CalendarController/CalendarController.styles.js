import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

function getNumber(token) {
  return token.slice(0, -2) / 1;
}

const CalendarStyled = styled.div`
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
    height: ${getNumber(tokens.space) * 4 + getNumber(tokens.space) + 1}px;
    padding: ${tokens.spaceSm} 0;
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

    .aclui-calendar-day-mask {
      display: block;
      width: 100%;
      height: 100%;
    }

    .aclui-calendar-day-trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 27px;
      border-radius: ${tokens.border.radius};
      color: ${tokens.color.black};

      &:hover {
        border: 1px solid ${tokens.border.color};
        font-weight: bold;
      }
      &:focus {
      }
      &:active {
      }
    }

    &.CalendarDay__selected {
      background-color: ${tokens.color.white};
    }

    &.CalendarDay__selected .aclui-calendar-day-trigger {
      background-color: #cde5fc;
      border: 0;
      font-weight: bold;
    }

    &.CalendarDay__outside {
      pointer-events: none;

      .aclui-calendar-day-trigger {
        color: ${tokens.color.blackDisabled};
      }
    }
  }

  .DayPickerNavigation_button__horizontalDefault {
    top: 3px;
  }

  .DayPickerNavigation_button:focus .aclui-calendar-nav-button {
    box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    border-color: ${tokens.highlight.active.noBorder.borderColor};
    outline: none;
  }

  .CalendarMonth_table {
    border: 0;
    margin-bottom: 0;
    margin-top: ${getNumber(tokens.space) * 4}px;
  }
`;

export default CalendarStyled;
