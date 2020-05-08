import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

import calendarBaseStyles from "./calendar.base.styles";
import { hoveredItemStyles, selectedItemStyles, visuallyHiddenStyles } from "./shared.styles";

export const arrowIconStyles = css`
  > svg[role="presentation"] {
    ${stylers.fontSize(-1)}

    display: block;
  }
`;

const iconButtonStyles = css`
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

const calendarStyles = css`
  ${calendarBaseStyles}

  &:focus {
    outline: none;
  }

  ${({ isVisible }) => !isVisible && visuallyHiddenStyles}

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

    &.CalendarDay__selected,
    &.CalendarDay__selected_span,
    &.CalendarDay__hovered_span {
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
    ${iconButtonStyles}

    align-items: center;
    border-radius: ${tokens.border.radius};
    display: flex;
    height: ${stylers.spacer(3)};
    justify-content: center;
    padding: ${tokens.spaceSm};
    position: absolute;
    top: ${tokens.space};
    width: ${stylers.spacer(3)};

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

  .CalendarMonth_table {
    border: 0;
    margin-bottom: 0;
    margin-top: ${stylers.spacer(4)};
  }
`;

export const calendarWrapperStyles = css`
  &,
  * {
    box-sizing: border-box;
  }

  &:focus {
    outline: none;
  }
`;

const dayTriggerSelectedStyle = css`
  ${selectedItemStyles}

  &:hover {
    border: 0;
  }
`;

const dayTriggerTodayStyle = css`
  border: 1px solid ${tokens.border.color};
  font-weight: bold;
`;

const dayTriggerSpanStyle = css`
  background-color: ${tokens.color.blueLighten50};
  border-radius: 0;
`;

const dayTriggerInRangeStyles = css`
  .CalendarDay__selected_start & {
    border-radius: ${tokens.border.radius} 0 0 ${tokens.border.radius};
  }

  .CalendarDay__selected_end & {
    border-radius: 0 ${tokens.border.radius} ${tokens.border.radius} 0;
  }
`;

export const dayTriggerStyles = css`
  align-items: center;
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: inline-flex;
  height: 27px;
  justify-content: center;
  width: 100%;

  &:hover {
    ${hoveredItemStyles}
  }

  .CalendarDay__today & {
    ${dayTriggerTodayStyle};
  }

  .CalendarDay__selected & {
    ${dayTriggerSelectedStyle};
  }

  .CalendarDay__selected_span &,
  .CalendarDay__hovered_span & {
    ${dayTriggerSpanStyle};
  }

  ${({ isRangeSelected }) => isRangeSelected && dayTriggerInRangeStyles};
`;

export const monthHeaderButtonStyles = css`
  font-weight: normal;
`;

export default calendarStyles;
