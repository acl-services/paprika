import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";

import "react-dates/initialize";
import { DayPickerSingleDateController as SDPController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import Button from "@paprika/button";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowDown from "@paprika/icon/lib/ArrowDown";

import CalendarStyled, { DayTriggerStyle } from "./CalendarController.styles";

const propTypes = {
  /** Selected date in moment object */
  date: momentPropTypes.momentObj,

  onFocusChange: PropTypes.func.isRequired,

  /** Callback to fire when user select date */
  onSelect: PropTypes.func.isRequired,

  isFocused: PropTypes.bool,
};

const defaultProps = {
  date: null,
  isFocused: false,
};

class CalendarController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showShortcutPanel: false,
    };

    // TODO: Update this with L10n component
    moment.locale("jp");

    this.nextButtonRef = React.createRef();
    this.prevButtonRef = React.createRef();
  }

  getInitialVisibleMonth = () => {
    return this.props.date.isValid() ? this.props.date : moment();
  };

  handleClickMonthHeader = () => {
    this.setState({ showShortcutPanel: true });
  };

  handleDateChange = date => {
    this.props.onSelect(date);
  };

  handleShortcutPanelCancel = () => {
    this.setState({ showShortcutPanel: false });
  };

  handleShortcutPanelApply = () => {
    this.setState({ showShortcutPanel: false });
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

  renderMonthHeaderElement = ({ month }) => (
    <Button onClick={this.handleClickMonthHeader} kind="flat" isDropdown isDisabled>
      {month.format("MMMM YYYY")}
    </Button>
  );

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
        className="aclui-calendar-day-trigger"
        isSelected={moment(day).isSame(this.props.date, "day")}
      >
        {day.format("D")}
      </span>
    );
  };

  render() {
    // if (this.state.showShortcutPanel) return <ShortcutPanel onCancel={this.handleShortcutPanelCancel} />;
    if (this.state.showShortcutPanel) return "shortcutpanel";

    return (
      <CalendarStyled>
        <SDPController
          daySize={30}
          enableOutsideDays
          hideKeyboardShortcutsPanel
          initialVisibleMonth={this.getInitialVisibleMonth}
          navPrev={this.renderArrowLeft()}
          navNext={this.renderArrowRight()}
          numberOfMonths={1}
          onDateChange={this.handleDateChange}
          onFocusChange={this.props.onFocusChange}
          onPrevMonthClick={this.handleClickPrevMonth}
          onNextMonthClick={this.handleClickNextMonth}
          focused={this.props.isFocused}
          isFocused={this.props.isFocused}
          date={this.props.date}
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
