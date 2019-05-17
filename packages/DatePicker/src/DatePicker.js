import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import CalendarController from "./components/CalendarController/CalendarController";

import { CalendarStyles } from "./DatePicker.styles";

const dateFormatForConfirmation = "MMMM DD, YYYY";

const propTypes = {
  /** a11yText on the input. */
  a11yText: PropTypes.string,

  /** Class name of the input. */
  className: PropTypes.string,

  /** Selected date in moment object. */
  date: momentPropTypes.momentObj,

  /** Date format, will show in the input. */
  format: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Callback when date is selected or input. */
  onChange: PropTypes.func.isRequired,

  /** Placeholder of input. */
  placeholder: PropTypes.string,

  /** Size of input. */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  a11yText: null,
  className: null,
  date: null,
  format: "YYYY-MM-DD",
  isDisabled: false,
  isReadOnly: false,
  placeholder: "",
  size: "medium",
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmationResult: "",
      hasError: false,
      inputtedString: props.date ? moment(props.date).format(props.format) : "",
      showCalendar: false,
    };

    this.calendarRef = React.createRef();
  }

  handleSelect = date => {
    this.setState({ hasError: false, inputtedString: moment(date).format(this.props.format) });
    this.hideCalendar();
    this.handleChange(date);
  };

  handleFocusInput = () => {
    this.setState({
      confirmationResult: "",
    });
  };

  handleInputChange = e => {
    this.setState({
      inputtedString: e.target.value,
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
    if (!this.state.inputtedString) {
      this.handleReset();
      return;
    }

    const newDate = moment(this.state.inputtedString);

    if (newDate.isValid()) {
      if (moment(newDate).isSame(this.props.date, "day")) return;

      const confirmationResult = newDate.format(dateFormatForConfirmation);
      this.setState(() => {
        return {
          confirmationResult,
          hasError: false,
          // inputtedString: confirmationResult,
        };
      });
      this.handleChange(newDate);
    } else {
      this.setState({
        hasError: true,
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
    if (this.state.showCalendar) this.setState({ showCalendar: false });
  };

  handleClick = () => {
    this.showCalendar();
  };

  handleChange(newDate) {
    if (this.props.date !== newDate) this.props.onChange(newDate);
  }

  handleReset() {
    this.setState({
      hasError: false,
      inputtedString: "",
    });
    this.handleChange(null);
  }

  render() {
    const { showCalendar, inputtedString } = this.state;

    return (
      <Popover isOpen={showCalendar} offset={8} onClose={this.hideCalendar} shouldKeepFocus>
        <Input
          a11yText={this.props.a11yText}
          className={this.props.className}
          hasError={this.state.hasError}
          icon={<CalendarIcon />}
          isDisabled={this.props.isDisabled}
          isReadOnly={this.props.isReadOnly}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          onClick={this.handleClick}
          onFocus={this.handleFocusInput}
          onKeyUp={this.handleKeyUp}
          placeholder={this.props.placeholder}
          size={this.props.size}
          value={this.state.confirmationResult || inputtedString}
        />

        <Popover.Content>
          <div css={CalendarStyles} ref={this.calendarRef}>
            <CalendarController date={this.props.date} onSelect={this.handleSelect} />
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
