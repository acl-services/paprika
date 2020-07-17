import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Popover from "@paprika/popover";
import DateInput from "@paprika/date-input";
import Calendar from "@paprika/calendar/lib/SingleDateCalendar";
import useDebounce from "@paprika/helpers/lib/hooks/useDebounce";
import isElementContainsFocus from "@paprika/helpers/lib/dom/isElementContainsFocus";
import extractChildrenProps from "@paprika/helpers/lib/extractChildrenProps";

import DateInputPropsCollector from "./components/DateInputPropsCollector";
import DatePickerPopoverPropsCollector from "./components/DatePickerPopoverPropsCollector";

import { calendarPopoverStyles } from "./DatePicker.styles";

const propTypes = {
  children: PropTypes.node,

  /** Date format used while entering and parsing user input. */
  dateFormat: PropTypes.string,

  /** Selected date in moment object. */
  date: PropTypes.instanceOf(moment),

  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat: PropTypes.string,

  /** ID for the `<input>`. */
  id: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Callback when date is selected or input. */
  onChange: PropTypes.func.isRequired,

  /** Internal errors callback */
  onError: PropTypes.func,

  /** If there is an external error or not. */
  hasError: PropTypes.bool,
};

const defaultProps = {
  children: null,
  dateFormat: "MM/DD/YYYY",
  date: null,
  hasError: false,
  humanFormat: undefined,
  id: null,
  isDisabled: false,
  isReadOnly: false,
  onError: () => {},
};

function DatePicker(props) {
  // Props
  const { children, dateFormat, date, humanFormat, id, isDisabled, isReadOnly, onChange, onError, hasError } = props;

  // State
  const [possibleDate, setPossibleDate] = React.useState(null);
  const [shouldShowCalendar, setShouldShowCalendar] = React.useState(false);

  // Ref
  const calendarRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const debouncedPossibleDate = useDebounce(possibleDate, 300);
  const extendedInputProps = extractChildrenProps(children, DateInputPropsCollector);
  const extendedPopoverProps = extractChildrenProps(children, DatePickerPopoverPropsCollector);

  function hideCalendar() {
    if (shouldShowCalendar) setShouldShowCalendar(false);
    if (inputRef.current) inputRef.current.blur();
  }

  function showCalendar() {
    if (!shouldShowCalendar) setShouldShowCalendar(true);
  }

  function handleChange(newDate) {
    if (date !== newDate) onChange(newDate);
  }

  function handleClosePopover() {
    if (!isElementContainsFocus(calendarRef.current) && !isElementContainsFocus(inputRef.current)) {
      hideCalendar();
    }
  }

  function handleKeyUpOnEscape(event) {
    if (event.key === "Escape") {
      hideCalendar();
    }
  }

  function handleResetPossibleDate() {
    setPossibleDate(null);
  }

  function handleSelect(selectedDate) {
    hideCalendar();
    window.requestAnimationFrame(() => {
      handleChange(selectedDate);
    });
  }

  function handlePossibleDateChange(newPossibleDate) {
    if (newPossibleDate.isSame(possibleDate, "year") && newPossibleDate.isSame(possibleDate, "month")) return;

    setPossibleDate(newPossibleDate);
  }

  const hasInputError = extendedInputProps && extendedInputProps.hasError;

  const hasErrorValue = hasError || hasInputError;

  return (
    <Popover
      offset={8}
      {...extendedPopoverProps}
      isOpen={shouldShowCalendar}
      onClose={handleClosePopover}
      onKeyUp={handleKeyUpOnEscape}
      shouldKeepFocus
    >
      <DateInput
        ref={inputRef}
        id={id}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
        date={date}
        dateFormat={dateFormat}
        humanFormat={humanFormat}
        onChange={onChange}
        onChangePossibleDate={handlePossibleDateChange}
        onClick={showCalendar}
        onError={onError}
        beforeConfirmation={hideCalendar}
        denyConfirmation={() => isElementContainsFocus(calendarRef.current)}
        {...extendedInputProps}
        hasError={hasErrorValue}
      />

      <Popover.Content>
        <div css={calendarPopoverStyles} data-pka-anchor="datepicker.calendar" ref={calendarRef}>
          {shouldShowCalendar ? (
            <Calendar
              date={date}
              onSelect={handleSelect}
              possibleDate={debouncedPossibleDate}
              resetPossibleDate={handleResetPossibleDate}
            />
          ) : null}
        </div>
      </Popover.Content>
    </Popover>
  );
}

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

DatePicker.Input = DateInputPropsCollector;
DatePicker.Popover = DatePickerPopoverPropsCollector;

export default DatePicker;
