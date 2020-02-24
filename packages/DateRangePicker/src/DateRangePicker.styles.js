import React from "react";
import styled from "styled-components";
import OriginalDateInput from "@paprika/date-input";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import OriginalCalendar from "@paprika/calendar/lib/SingleDateCalendar";
import { Kinds as CalendarKinds } from "@paprika/calendar/lib/tokens";

export const Wrapper = styled.div`
  display: flex;
`;

export const DateInput = styled(OriginalDateInput)`
  flex: 1 1 auto;
`;

export const Separator = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${tokens.spaceSm};
  border-top: 1px solid ${tokens.border.color};
  border-bottom: 1px solid ${tokens.border.color};
  color: ${tokens.textColor.icon};
`;

export const PopoverCardContent = styled.div`
  display: flex;
`;

const CALENDAR_INTERNAL_PADDING = 9;

export const CalendarsWrapper = styled.div`
  display: flex;
  margin: 0 calc(-${stylers.spacer(3)} - ${CALENDAR_INTERNAL_PADDING}px);
`;

const CalendarWrapper = styled.div`
  margin: 0 ${stylers.spacer(3)};
`;

export const Calendar = props => (
  <CalendarWrapper>
    <OriginalCalendar kind={CalendarKinds.EMBEDDED} {...props} />
  </CalendarWrapper>
);
