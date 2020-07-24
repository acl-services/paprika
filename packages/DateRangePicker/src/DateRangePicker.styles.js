import styled from "styled-components";
import OriginalDateInput from "@paprika/date-input";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Wrapper = styled.div`
  display: flex;
`;

export const DateInput = styled(OriginalDateInput)`
  flex-grow: 1;
`;

export const Separator = styled.div`
  align-items: center;
  border-bottom: 1px solid ${tokens.border.color};
  border-top: 1px solid ${tokens.border.color};
  color: ${tokens.textColor.icon};
  display: flex;
  flex: none;
  justify-content: center;
  padding: 0 ${tokens.spaceSm};
`;

export const PopoverCardContent = styled.div`
  display: flex;
`;

const CALENDAR_INTERNAL_PADDING = 9;

export const CalendarsWrapper = styled.div`
  display: flex;
  margin: 0 ${-1 * stylers.toInt(stylers.spacer(3)) - CALENDAR_INTERNAL_PADDING}px;
`;

export const CalendarWrapper = styled.div`
  margin: 0 ${stylers.spacer(3)};
`;
