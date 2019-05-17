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

class CalendarController extends React.Component {
  constructor(props) {
    super(props);

    this.nextButtonRef = React.createRef();
    this.prevButtonRef = React.createRef();
  }

  getInitialVisibleMonth = () => {
    return this.props.date && this.props.date.isValid() ? this.props.date : moment();
  };

  handleDateChange = date => {
    this.props.onSelect(date);
  };

  handleClickNavigation = buttonRef => {
    if (buttonRef.current.parentNode.tabIndex !== 0) {
      // eslint-disable-next-line no-param-reassign
      buttonRef.current.parentNode.tabIndex = 0;
    }
    buttonRef.current.parentNode.focus();
  };

  handleClickNextMonth = () => {
    this.handleClickNavigation(this.nextButtonRef);
  };

  handleClickPrevMonth = () => {
    this.handleClickNavigation(this.prevButtonRef);
  };

  renderMonthHeaderElement = ({ month }) => <CalendarHeaderStyled>{month.format("MMMM YYYY")}</CalendarHeaderStyled>;

  renderArrowLeft() {
    return (
      <span ref={this.prevButtonRef}>
        <ArrowDown role="presentation" size="14px" />
      </span>
    );
  }

  renderArrowRight() {
    return (
      <span ref={this.nextButtonRef}>
        <ArrowRight role="presentation" size="14px" />
      </span>
    );
  }

  renderDayContents = day => {
    return (
      <span
        css={DayTriggerStyle}
        className="aclui-calendar-day-content"
        isSelected={moment(day).isSame(this.props.date, "day")}
        isToday={moment(day).isSame(moment(), "day")}
      >
        {day.format("D")}
      </span>
    );
  };

  render() {
    return (
      <CalendarStyled>
        <SDPController
          key={this.props.date}
          daySize={30}
          enableOutsideDays
          hideKeyboardShortcutsPanel
          initialVisibleMonth={this.getInitialVisibleMonth}
          navPrev={this.renderArrowLeft()}
          navNext={this.renderArrowRight()}
          numberOfMonths={1}
          onDateChange={this.handleDateChange}
          onPrevMonthClick={this.handleClickPrevMonth}
          onNextMonthClick={this.handleClickNextMonth}
          date={this.props.date}
          focused
          renderMonthElement={this.renderMonthHeaderElement}
          transitionDuration={0}
          horizontalMonthPadding={0}
          renderDayContents={this.renderDayContents}
          verticalBorderSpacing={0}
        />
      </CalendarStyled>
    );
  }
}

CalendarController.displayName = "CalendarController";

CalendarController.propTypes = propTypes;
CalendarController.defaultProps = defaultProps;

export default CalendarController;
