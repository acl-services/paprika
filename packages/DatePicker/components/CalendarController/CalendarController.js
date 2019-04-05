import React, { Component } from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";

import "react-dates/initialize";
import { DayPickerSingleDateController as SDPController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import CalendarStyled from "./CalendarController.styles";

const propTypes = {
  /** Selected date in moment object */
  date: momentPropTypes.momentObj,

  /** Callback to fire when user select date */
  onSelect: PropTypes.func.isRequired,
};

const defaultProps = {
  date: null,
};

class CalendarController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShortcutPanel: false,
      focusOnCalendar: false,
    };

    // TODO: Update this with L10n component
    moment.locale("jp");
  }

  onFocusChange = () => {
    // Force the focused states to always be truthy so that date is always selectable
    this.setState({ focusOnCalendar: true });
  };

  getInitialVisibleMonth = () => (this.props.date.isValid() ? this.props.date : moment());

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

  renderMonthHeaderElement = ({ month, onMonthSelect, onYearSelect }) => (
    // <Button className="aclui-calendar-shortcut-tigger" onClick={this.handleClickMonthHeader} isDropdown type="flat">
    //   {month.format("MMMM YYYY")}
    // </Button>
    // TODO: Replace by button with icon
    <button>{month.format("MMMM YYYY")}</button>
  );

  // renderNavButton = direction => (
  //   <Icon
  //     className={`aclui-calendar-nav-button aclui-calendar-nav-button--${direction}`}
  //     canPropagate
  //     color={tokens.textColor.icon}
  //     size={14}
  //     type={`arrow-${direction}`}
  //   />
  // );

  renderDayContents = day => (
    // TODO: Replace by raw button
    <span
      className="aclui-calendar-day-mask"
      onClick={e => {
        if (e.target.classList.contains("aclui-calendar-day-mask")) {
          e.stopPropagation();
        }
      }}
    >
      <span className="aclui-calendar-day-trigger">{day.format("D")}</span>
    </span>
  );

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
          // navPrev={this.renderNavButton("left")}
          // navNext={this.renderNavButton("right")}
          numberOfMonths={1}
          onDateChange={this.handleDateChange}
          onFocusChange={this.onFocusChange}
          onPrevMonthClick={this.handleClickPrevMonth}
          onNextMonthClick={this.handleClickNextMonth}
          focused={this.state.focusOnCalendar}
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
