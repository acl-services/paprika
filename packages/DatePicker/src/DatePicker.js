import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import Popover from "@paprika/popover";

import CalendarController from "./components/CalendarController/CalendarController";

// import DatePickerStyled from "./DatePicker.styles";

const dateFormatForConfirmation = "MMMM DD, YYYY";

const propTypes = {
  /** Selected date in moment object */
  date: momentPropTypes.momentObj,

  /** Date format, will show in the input */
  format: PropTypes.string,

  /** Clear button on the side, default is false */
  hasClearButton: PropTypes.bool,

  /** Should be disabled or not, default is false */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false */
  isReadOnly: PropTypes.bool,

  /** Placeholder of input */
  placeholder: PropTypes.string,
};

const defaultProps = {
  date: null,
  format: "YYYY-MM-DD",
  hasClearButton: false,
  isDisabled: false,
  isReadOnly: false,
  // TODO: Replace it to translations when has L10n
  placeholder: "",
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCalendar: false,
      date: props.date,
      inputtedString: props.date ? moment(props.date).format(props.format) : "",
      isCalendarFocused: false,
    };

    this.popoverRef = React.createRef();
    this.calendarRef = React.createRef();

    // moment.locale();
  }

  handleSelect = date => {
    this.setState({ date, inputtedString: moment(date).format(this.props.format) });
    this.hideCalendar();
  };

  handleFocusInput = () => {
    this.setState(state => {
      return {
        inputtedString: state.date.format(this.props.format),
        isCalendarFocused: false,
      };
    });
  };

  handleInputChange = e => {
    this.setState({
      inputtedString: e.target.value,
      isCalendarFocused: false,
    });
  };

  handleInputBlur = () => {
    window.requestAnimationFrame(() => {
      if (
        this.calendarRef.current !== document.activeElement &&
        !this.calendarRef.current.contains(document.activeElement)
      ) {
        this.handleInputConfirm();
        this.hideCalendar();
      }
    });
  };

  handleInputConfirm = () => {
    const newDate = moment(this.state.inputtedString);

    if (!this.state.inputtedString) {
      this.setState({
        date: null,
        inputtedString: "",
      });
    }

    if (newDate.isValid() && !moment(newDate).isSame(this.props.date, "day")) {
      this.setState(() => {
        return {
          date: newDate,
          inputtedString: newDate.format(dateFormatForConfirmation),
        };
      });
    }
  };

  handleKeyUp = event => {
    if (event.key === "Enter") {
      this.handleInputConfirm();
      this.hideCalendar();
    }
  };

  showCalendar = () => {
    if (!this.state.showCalendar) this.setState({ showCalendar: true });
  };

  hideCalendar = () => {
    if (this.state.showCalendar) this.setState({ showCalendar: false, isCalendarFocused: false });
  };

  handleCalendarFocusChange = () => {
    this.setState({ isCalendarFocused: true });
  };

  handleClick = () => {
    this.showCalendar();
  };

  render() {
    const { date, showCalendar, inputtedString } = this.state;

    return (
      <Popover isOpen={showCalendar} offset={0} onClose={this.hideCalendar} shouldKeepFocus>
        <Input
          a11yText={""}
          className={""}
          hasClearButton={this.props.hasClearButton}
          icon={<CalendarIcon />}
          isDisabled={this.props.isDisabled}
          isReadOnly={this.props.isReadOnly}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          onClick={this.handleClick}
          onClear={() => {}}
          onFocus={this.handleFocusInput}
          onKeyUp={this.handleKeyUp}
          placeholder={this.props.placeholder}
          size={this.props.size}
          value={inputtedString}
        />
        {/* <Popover.Trigger>
          {handler => (
            <Input
              a11yText={""}
              className={""}
              hasClearButton={this.props.hasClearButton}
              icon={<CalendarIcon />}
              isDisabled={this.props.isDisabled}
              isReadOnly={this.props.isReadOnly}
              onBlur={handler}
              onChange={this.handleInputChange}
              onClick={handler}
              onClear={() => {}}
              onFocus={this.handleFocusInput}
              onKeyUp={this.handleKeyUp}
              placeholder={this.props.placeholder}
              size={this.props.size}
              value={inputtedString}
            />
          )}
        </Popover.Trigger> */}

        <Popover.Content>
          <div ref={this.calendarRef}>
            <CalendarController
              date={date}
              isFocused={this.state.isCalendarFocused}
              onSelect={this.handleSelect}
              onFocusChange={this.handleCalendarFocusChange}
            />
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
