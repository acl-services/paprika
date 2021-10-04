import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import { DayPickerPhrases } from "react-dates/lib/defaultPhrases";

import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";

import * as types from "./types";

import ShortcutPanel from "./internal/ShortcutPanel";

import calendarStyles, {
  arrowIconStyles,
  calendarWrapperStyles,
  dayTriggerStyles,
  monthHeaderButtonStyles,
} from "./internal/calendar.styles";

const phrases = {
  ...DayPickerPhrases,
  chooseAvailableStartDate: ({ date }) => date,
  chooseAvailableEndDate: ({ date }) => date,
};

function DateRangeCalendar(props) {
  // TODO: nice to have MIN_DATE & MAX_DATE customizable
  const MIN_DATE = moment.utc("0000-01-01", "YYYY-MM-DD");
  const MAX_DATE = moment.utc("9999-12-31", "YYYY-MM-DD");
  const I18n = useI18n();

  // Props
  const { startDate, endDate, onDatesChange, possibleDate, focusedInput, onFocusChange, kind } = props;

  function getInitialVisibleMonth() {
    if (possibleDate && possibleDate.isValid()) {
      return possibleDate;
    }

    return startDate && startDate.isValid() ? startDate : moment();
  }

  // State
  const [shouldShowShortcut, setShouldShowShortcut] = React.useState(false);
  const [currentMonth, setCurrentMonth] = React.useState(getInitialVisibleMonth());

  // Ref
  const nextButtonRef = React.useRef(null);
  const prevButtonRef = React.useRef(null);
  const calendarRef = React.useRef(null);

  React.useEffect(() => {
    if (possibleDate && possibleDate.isValid()) {
      setCurrentMonth(possibleDate);
    }
  }, [possibleDate]);

  function handleClickHeader(month) {
    setCurrentMonth(month);
    setShouldShowShortcut(true);
  }

  function handleCancelShortcut() {
    setShouldShowShortcut(false);
  }

  function handleConfirmShortcut({ month, year }) {
    setCurrentMonth(moment.utc([year, month]));
    setShouldShowShortcut(false);
  }

  function handleClickNavigation(buttonRef) {
    if (buttonRef.current.parentNode.tabIndex !== 0) {
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.parentNode.tabIndex = 0;
    }
    buttonRef.current.parentNode.focus();
  }

  function handleClickNextMonth() {
    handleClickNavigation(nextButtonRef);
  }

  function handleClickPrevMonth() {
    handleClickNavigation(prevButtonRef);
  }

  function isOutsideSupportedRange(day) {
    return day.isBefore(MIN_DATE, "day") || day.isAfter(MAX_DATE, "day");
  }

  function renderMonthHeaderElement({ month }) {
    return (
      <Button
        css={monthHeaderButtonStyles}
        isDropdown
        isSemantic={false}
        kind={Button.types.kind.FLAT}
        onClick={() => {
          handleClickHeader(month);
        }}
        tabIndex={-1}
        data-pka-anchor="calendar.header"
      >
        {month.format(I18n.t("calendar.header_format"))}
      </Button>
    );
  }
  /* eslint-enable react/prop-types */

  function renderArrowLeft() {
    return (
      <span css={arrowIconStyles} ref={prevButtonRef} data-pka-anchor="calendar-prev-month">
        <ArrowLeft role="presentation" />
      </span>
    );
  }

  function renderArrowRight() {
    return (
      <span css={arrowIconStyles} ref={nextButtonRef} data-pka-anchor="calendar-next-month">
        <ArrowRight role="presentation" />
      </span>
    );
  }

  function renderDayContents(day) {
    return (
      <span css={dayTriggerStyles} isRangeSelected={startDate && endDate}>
        {day.format("D")}
      </span>
    );
  }

  const CalendarKey = `${currentMonth.format("YYYY-MM")}`;

  return (
    <div css={calendarWrapperStyles} tabIndex={-1} ref={calendarRef}>
      <div css={calendarStyles} isVisible={!shouldShowShortcut} kind={kind}>
        <DayPickerRangeController
          key={CalendarKey}
          minimumNights={0}
          startDate={startDate}
          endDate={endDate}
          onDatesChange={onDatesChange}
          onFocusChange={onFocusChange}
          focusedInput={focusedInput}
          isOutsideRange={isOutsideSupportedRange}
          renderMonthElement={renderMonthHeaderElement}
          enableOutsideDays
          numberOfMonths={1}
          initialVisibleMonth={() => currentMonth}
          hideKeyboardShortcutsPanel
          noBorder={kind === DateRangeCalendar.types.kind.EMBEDDED}
          daySize={34}
          verticalBorderSpacing={0}
          transitionDuration={0}
          horizontalMonthPadding={0}
          navPrev={renderArrowLeft()}
          navNext={renderArrowRight()}
          onPrevMonthClick={handleClickPrevMonth}
          onNextMonthClick={handleClickNextMonth}
          renderDayContents={renderDayContents}
          phrases={phrases}
        />
      </div>
      <ShortcutPanel
        date={currentMonth || moment()}
        isVisible={shouldShowShortcut}
        onCancel={handleCancelShortcut}
        onConfirm={handleConfirmShortcut}
      />
    </div>
  );
}

DateRangeCalendar.types = {
  kind: types.kind,
  date: { START: types.START_DATE, END: types.END_DATE },
};

const propTypes = {
  /** Selected start date in moment object */
  startDate: PropTypes.instanceOf(moment),

  /** Selected end date in moment object */
  endDate: PropTypes.instanceOf(moment),

  /** Callback to fire when user select start or end date */
  onDatesChange: PropTypes.func.isRequired,

  /** Possible date might be selected in moment object */
  possibleDate: PropTypes.instanceOf(moment),

  /**
   * This callback will be called after selecting date.
   * START_DATE or END_DATE will be passed as argument.
   * Passed argument points to next date will be selected on click.
   * It commonly used to switch focus on start/end date inputs.
   */
  onFocusChange: PropTypes.func.isRequired,

  /**
   * Points to the next date that will be selected on click.
   * Should be used in conjunction with `onFocusChange`
   */
  focusedInput: PropTypes.oneOf([DateRangeCalendar.types.date.START, DateRangeCalendar.types.date.END]).isRequired,

  /** Kind of styling */
  kind: PropTypes.oneOf(Object.values(DateRangeCalendar.types.kind)),
};

const defaultProps = {
  startDate: null,
  endDate: null,
  possibleDate: null,
  kind: DateRangeCalendar.types.kind.BORDERED,
};

DateRangeCalendar.propTypes = propTypes;
DateRangeCalendar.defaultProps = defaultProps;

export default DateRangeCalendar;
