import React from "react";
import moment from "moment";

import Popover from "@paprika/popover";
import Calendar from "@paprika/calendar/lib/DateRangeCalendar";
import { Kinds as CalendarKinds, START_DATE, END_DATE } from "@paprika/calendar/lib/tokens";
import ArrowIcon from "@paprika/icon/lib/ArrowRightB";
import useI18n from "@paprika/l10n/lib/useI18n";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import useDebounce from "@paprika/helpers/lib/hooks/useDebounce";
import isElementContainsFocus from "@paprika/helpers/lib/dom/isElementContainsFocus";
import { AlignTypes } from "@paprika/helpers/lib/customPropTypes";
import createPropsCollector from "./createPropsCollector";
import * as styled from "./DateRangePicker.styles";

const START_INPUT_BORDER_RADIUS = [true, false, false, true];
const END_INPUT_BORDER_RADIUS = [false, true, true, false];

const DateRangePicker = ({ startDate, endDate, onDatesChange, children }) => {
  const [shouldShowPopover, setShouldShowPopover] = React.useState(false);
  const [currentFocus, setCurrentFocus] = React.useState(null);
  const [possibleStartDate, setPossibleStartDate] = React.useState(moment().startOf('month'));
  const [possibleEndDate, setPossibleEndDate] = React.useState(moment().startOf('month').add(1, 'months'));

  const popoverContentRef = React.useRef(null);
  const startDateInputRef = React.useRef(null);
  const endDateInputRef = React.useRef(null);

  const I18n = useI18n();
  const debouncedPossibleStartDate = useDebounce(possibleStartDate, 300);
  const debouncedPossibleEndDate = useDebounce(possibleEndDate, 300);

  const {
    "DateRangePicker.Input": { props: inputProps = {} } = {},
    "DateRangePicker.StartInput": {
      props: { placeholder: startInputPlaceholder = I18n.t("daterange.start_date"), ...startInputProps } = {},
    } = {},
    "DateRangePicker.EndInput": {
      props: { placeholder: endInputPlaceholder = I18n.t("daterange.end_date"), ...endInputProps } = {},
    } = {},
    "DateRangePicker.Popover": { props: popoverProps = {} } = {},
  } = extractChildren(children, [
    "DateRangePicker.Input",
    "DateRangePicker.StartInput",
    "DateRangePicker.EndInput",
    "DateRangePicker.Popover",
  ]);

  function isAnyElementContainsFocus() {
    return (
      isElementContainsFocus(popoverContentRef.current) ||
      isElementContainsFocus(startDateInputRef.current) ||
      isElementContainsFocus(endDateInputRef.current)
    );
  }

  function showPopover() {
    if (!shouldShowPopover) setShouldShowPopover(true);
  }

  function hidePopover() {
    if (shouldShowPopover) setShouldShowPopover(false);
    if (startDateInputRef.current) startDateInputRef.current.blur();
    if (endDateInputRef.current) endDateInputRef.current.blur();
    setCurrentFocus(null);
  }

  function handleClosePopover() {
    if (!isAnyElementContainsFocus()) {
      hidePopover();
    }
  }

  function handleKeyUpOnEscape(event) {
    if (event.key === "Escape") {
      hidePopover();
    }
  }

  function onDateInputFocus(type) {
    return () => {
      setCurrentFocus(type);
    };
  }

  function onFocusChange(type) {
    if (type === START_DATE) {
      startDateInputRef.current.focus();
    } else if (type === END_DATE) {
      endDateInputRef.current.focus();
    }
  }

  function onChangeStartDate(newDate) {
    onDatesChange({ startDate: newDate, endDate });
  }

  function onChangeEndDate(newDate) {
    onDatesChange({ startDate, endDate: newDate });
  }

  function shouldDenyStartDateInputConfirmation() {
    return isElementContainsFocus(startDateInputRef.current);
  }

  function shouldDenyEndDateInputConfirmation() {
    return isElementContainsFocus(endDateInputRef.current);
  }

  function handleResetPossibleStartDate() {
    setPossibleStartDate(null);
  }

  function handleResetPossibleEndDate() {
    setPossibleEndDate(null);
  }

  function handlePossibleStartDateChange(newPossibleDate) {
    if (newPossibleDate.isSame(possibleStartDate, "year") && newPossibleDate.isSame(possibleStartDate, "month")) return;

    setPossibleStartDate(newPossibleDate);
  }

  function handlePossibleEndDateChange(newPossibleDate) {
    if (newPossibleDate.isSame(possibleEndDate, "year") && newPossibleDate.isSame(possibleEndDate, "month")) return;

    setPossibleEndDate(newPossibleDate);
  }

  return (
    <Popover
      edge={AlignTypes.LEFT}
      maxWidth="none"
      offset={8}
      {...popoverProps}
      isOpen={shouldShowPopover}
      onKeyUp={handleKeyUpOnEscape}
      onClose={handleClosePopover}
      shouldKeepFocus
    >
      <styled.Wrapper>
        <styled.DateInput
          ref={startDateInputRef}
          date={startDate}
          onChange={onChangeStartDate}
          onChangePossibleDate={handlePossibleStartDateChange}
          hasBorderRadius={START_INPUT_BORDER_RADIUS}
          placeholder={startInputPlaceholder}
          onClick={showPopover}
          beforeConfirmation={handleClosePopover}
          denyConfirmation={shouldDenyStartDateInputConfirmation}
          onFocus={onDateInputFocus(START_DATE)}
          {...inputProps}
          {...startInputProps}
        />
        <styled.Separator>
          <ArrowIcon />
        </styled.Separator>
        <styled.DateInput
          ref={endDateInputRef}
          date={endDate}
          onChange={onChangeEndDate}
          onChangePossibleDate={handlePossibleEndDateChange}
          hasBorderRadius={END_INPUT_BORDER_RADIUS}
          placeholder={endInputPlaceholder}
          onClick={showPopover}
          beforeConfirmation={handleClosePopover}
          denyConfirmation={shouldDenyEndDateInputConfirmation}
          onFocus={onDateInputFocus(END_DATE)}
          {...inputProps}
          {...endInputProps}
        />
      </styled.Wrapper>

      <Popover.Content ref={popoverContentRef}>
        <Popover.Card>
          {shouldShowPopover && (
            <styled.PopoverCardContent>
              <styled.CalendarsWrapper>
                <styled.CalendarWrapper>
                  <Calendar
                    kind={CalendarKinds.EMBEDDED}
                    focusedInput={currentFocus}
                    onFocusChange={onFocusChange}
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={onDatesChange}
                    possibleDate={debouncedPossibleStartDate}
                    resetPossibleDate={handleResetPossibleStartDate}
                  />
                </styled.CalendarWrapper>
                <styled.CalendarWrapper>
                  <Calendar
                    kind={CalendarKinds.EMBEDDED}
                    focusedInput={currentFocus}
                    onFocusChange={onFocusChange}
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={onDatesChange}
                    possibleDate={debouncedPossibleEndDate}
                    resetPossibleDate={handleResetPossibleEndDate}
                  />
                </styled.CalendarWrapper>
              </styled.CalendarsWrapper>
              {/* there will be picker for predefined ranges */}
            </styled.PopoverCardContent>
          )}
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
};

DateRangePicker.Input = createPropsCollector("DateRangePicker.Input");
DateRangePicker.StartInput = createPropsCollector("DateRangePicker.StartInput");
DateRangePicker.EndInput = createPropsCollector("DateRangePicker.EndInput");
DateRangePicker.Popover = createPropsCollector("DateRangePicker.Popover");

export default DateRangePicker;
