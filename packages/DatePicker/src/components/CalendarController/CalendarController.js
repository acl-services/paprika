import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";

import "react-dates/initialize";
import { DayPickerSingleDateController as SDPController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowDown from "@paprika/icon/lib/ArrowDown";

import CalendarStyled, { DayTriggerStyle, CalendarHeaderStyled } from "./CalendarController.styles";

const propTypes = {
  /** Selected date in moment object */
  date: momentPropTypes.momentObj,

  /** Callback to fire when user select date */
  onSelect: PropTypes.func.isRequired,
};

const defaultProps = {
  date: null,
};

function CalendarController(props) {
  const nextButtonRef = React.createRef();
  const prevButtonRef = React.createRef();

  function getInitialVisibleMonth() {
    return props.date && props.date.isValid() ? props.date : moment();
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

  function renderMonthHeaderElement({ month }) {
    return <CalendarHeaderStyled>{month.format("MMMM YYYY")}</CalendarHeaderStyled>; // todo l10n
  }

  function renderArrowLeft() {
    return (
      <span ref={prevButtonRef}>
        <ArrowDown role="presentation" size="14px" />
      </span>
    );
  }

  function renderArrowRight() {
    return (
      <span ref={nextButtonRef}>
        <ArrowRight role="presentation" size="14px" />
      </span>
    );
  }

  function renderDayContents(day) {
    return (
      <span
        css={DayTriggerStyle}
        className="aclui-calendar-day-content"
        isSelected={moment(day).isSame(props.date, "day")}
        isToday={moment(day).isSame(moment(), "day")}
      >
        {day.format("D")}
      </span>
    );
  }

  return (
    <CalendarStyled>
      <SDPController
        key={props.date}
        daySize={30}
        enableOutsideDays
        hideKeyboardShortcutsPanel
        initialVisibleMonth={getInitialVisibleMonth}
        navPrev={renderArrowLeft()}
        navNext={renderArrowRight()}
        numberOfMonths={1}
        onDateChange={props.onSelect}
        onPrevMonthClick={handleClickPrevMonth}
        onNextMonthClick={handleClickNextMonth}
        date={props.date}
        focused
        renderMonthElement={renderMonthHeaderElement}
        transitionDuration={0}
        horizontalMonthPadding={0}
        renderDayContents={renderDayContents}
        verticalBorderSpacing={0}
      />
    </CalendarStyled>
  );
}

CalendarController.displayName = "CalendarController";

CalendarController.propTypes = propTypes;
CalendarController.defaultProps = defaultProps;

export default CalendarController;
