import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "react-dates/initialize";
import { DayPickerSingleDateController as SDPController } from "react-dates";

import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";

import ShortcutPanel from "./internal/ShortcutPanel";

import calendarStyles, {
  arrowIconStyles,
  calendarWrapperStyles,
  dayTriggerStyles,
  monthHeaderButtonStyles,
} from "./internal/calendar.styles";

const propTypes = {
  /** Selected date in moment object */
  date: PropTypes.instanceOf(moment),

  /** Callback when user select date */
  onSelect: PropTypes.func.isRequired,

  /** Possible date might be selected in moment object */
  possibleDate: PropTypes.instanceOf(moment),

  resetPossibleDate: PropTypes.func,
};

const noop = () => {};

const defaultProps = {
  date: null,
  possibleDate: null,
  resetPossibleDate: noop,
};

function SingleDateCalendar(props) {
  // TODO: nice to have MIN_DATE & MAX_DATE customizable
  const MIN_DATE = moment.utc("0000-01-01", "YYYY-MM-DD");
  const MAX_DATE = moment.utc("9999-12-31", "YYYY-MM-DD");
  const I18n = useI18n();

  // Props
  const { date, onSelect, possibleDate, resetPossibleDate } = props;

  // State
  const [shouldShowShortcut, setShouldShowShortcut] = React.useState(false);
  const [currentMonth, setCurrentMonth] = React.useState(null);

  // Ref
  const nextButtonRef = React.useRef(null);
  const prevButtonRef = React.useRef(null);
  const calendarRef = React.useRef(null);

  function keepFocus() {
    if (calendarRef.current) calendarRef.current.focus();
  }

  React.useEffect(() => {
    keepFocus();
  }, [currentMonth, date]);

  function getInitialVisibleMonth() {
    let initialVisibleMonth;

    if (possibleDate && possibleDate.isValid()) {
      initialVisibleMonth = possibleDate;
    } else if (currentMonth && currentMonth.isValid()) {
      initialVisibleMonth = currentMonth;
    } else {
      initialVisibleMonth = date && date.isValid() ? date : moment();
    }

    return initialVisibleMonth;
  }

  function handleClickHeader(month) {
    setCurrentMonth(month);
    resetPossibleDate();
    setShouldShowShortcut(true);
  }

  function handleCancelShortcut() {
    setShouldShowShortcut(false);
    keepFocus();
  }

  function handleConfirmShortcut({ month, year }) {
    setCurrentMonth(moment.utc([year, month]));
    resetPossibleDate();
    setShouldShowShortcut(false);
    keepFocus();
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

  /* eslint-disable react/prop-types */
  function renderMonthHeaderElement({ month }) {
    return (
      <Button
        css={monthHeaderButtonStyles}
        isDropdown
        isSemantic={false}
        kind={Button.Kinds.FLAT}
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
    return <span css={dayTriggerStyles}>{day.format("D")}</span>;
  }

  const CalendarKey = `${currentMonth && currentMonth.format("YYYY-MM")}/${possibleDate &&
    possibleDate.format("YYYY-MM")}/${date && date.format("YYYY-MM")}`;

  return (
    <div css={calendarWrapperStyles} tabIndex={-1} ref={calendarRef}>
      <div css={calendarStyles} isVisible={!shouldShowShortcut}>
        <SDPController
          key={CalendarKey}
          date={date}
          onDateChange={onSelect}
          focused
          isOutsideRange={isOutsideSupportedRange}
          renderMonthElement={renderMonthHeaderElement}
          enableOutsideDays
          numberOfMonths={1}
          initialVisibleMonth={getInitialVisibleMonth}
          hideKeyboardShortcutsPanel
          daySize={34}
          verticalBorderSpacing={0}
          transitionDuration={0}
          horizontalMonthPadding={0}
          navPrev={renderArrowLeft()}
          navNext={renderArrowRight()}
          onPrevMonthClick={handleClickPrevMonth}
          onNextMonthClick={handleClickNextMonth}
          renderDayContents={renderDayContents}
        />
      </div>
      <ShortcutPanel
        key={shouldShowShortcut}
        date={currentMonth || moment()}
        isVisible={shouldShowShortcut}
        onCancel={handleCancelShortcut}
        onConfirm={handleConfirmShortcut}
      />
    </div>
  );
}

SingleDateCalendar.propTypes = propTypes;
SingleDateCalendar.defaultProps = defaultProps;

export default SingleDateCalendar;
