import React, { Component } from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";
import Popover from "@paprika/Popover";
import CalendarController from "./components/CalendarController/CalendarController";

// import DatePickerStyled from "./DatePicker.styles";

const propTypes = {
  /** Selected date in moment object */
  date: momentPropTypes.momentObj,

  /** Date format, will show in the input */
  format: PropTypes.string,

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
  isDisabled: false,
  isReadOnly: false,
  // TODO: Replace it to translations when has L10n
  placeholder: "",
};

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCalendar: false,
      date: props.date,
      inputtedString: props.date ? moment(props.date).format(props.format) : "",
    };

    this.popoverRef = React.createRef();
    this.calendarRef = React.createRef();

    moment.locale("en");
  }

  handleSelect = date => {
    this.setState({ date, inputtedString: moment(date).format(this.props.format) });
    this.hideCalendar();
  };

  handleFocusInput = () => {
    this.showCalendar();
  };

  handleInputChange = e => {
    this.setState({
      inputtedString: e.target.value,
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

    if (newDate.isValid()) {
      this.setState(() => {
        return {
          date: newDate,
          inputtedString: newDate.format(this.props.format),
        };
      });
    }

    this.calendarRef.current.forceUpdate();
  };

  handleShouldClose = () => {
    // console.log(this.popoverRef);
  };

  showCalendar = () => {
    if (!this.state.showCalendar) this.setState({ showCalendar: true });
  };

  hideCalendar = () => {
    if (this.state.showCalendar) this.setState({ showCalendar: false });
  };

  render() {
    const { date, showCalendar, inputtedString } = this.state;

    return (
      <Popover isOpen={showCalendar} offset={0} onClose={this.handleShouldClose} shouldAutoFocus={false}>
        <input
          disabled={this.props.isDisabled}
          readOnly={this.props.isReadOnly}
          onChange={this.handleInputChange}
          onFocus={this.showCalendar}
          onBlur={this.handleInputConfirm}
          placeholder={this.props.placeholder}
          type="text"
          value={inputtedString}
        />
        <Popover.Content>
          <CalendarController ref={this.calendarRef} date={date} onSelect={this.handleSelect} />
        </Popover.Content>
      </Popover>
    );
  }
}

DatePicker.displayName = "DatePicker";

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
