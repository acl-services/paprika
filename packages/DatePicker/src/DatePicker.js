import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import CalendarIcon from "@paprika/icon/lib/Calendar";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import CalendarController from "./components/CalendarController/CalendarController";

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

  /** Clear button on the side, default is false. */
  hasClearButton: PropTypes.bool,

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
  hasClearButton: true,
  isDisabled: false,
  isReadOnly: false,
  placeholder: "",
  size: "medium",
};

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCalendar: false,
      inputtedString: props.date ? moment(props.date).format(props.format) : "",
    };

    this.popoverRef = React.createRef();
    this.calendarRef = React.createRef();

    moment.locale("jp");
  }

  handleSelect = date => {
    this.setState({ inputtedString: moment(date).format(this.props.format) });
    this.hideCalendar();
    this.handleChange(date);
  };

  handleFocusInput = () => {
    this.setState(() => {
      const userFormatDate = this.props.date ? this.props.date.format(this.props.format) : "";

      return {
        inputtedString: userFormatDate,
      };
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
    const newDate = moment(this.state.inputtedString);

    if (!this.state.inputtedString) {
      this.handleReset();
    }

    if (newDate.isValid() && !moment(newDate).isSame(this.props.date, "day")) {
      this.setState(() => {
        return {
          inputtedString: newDate.format(dateFormatForConfirmation),
        };
      });
      this.handleChange(newDate);
    } else {
      // todo error out
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

  handleClickClear = () => {
    this.hideCalendar();
    this.handleReset();
  };

  handleChange(newDate) {
    if (this.props.date !== newDate) this.props.onChange(newDate);
  }

  handleReset() {
    this.setState({
      inputtedString: "",
    });
    this.handleChange(null);
  }

  render() {
    const { showCalendar, inputtedString } = this.state;

    return (
      <Popover isOpen={showCalendar} offset={0} onClose={this.hideCalendar} shouldKeepFocus>
        <Input
          a11yText={this.props.a11yText}
          className={this.props.className}
          hasClearButton={this.props.hasClearButton}
          icon={<CalendarIcon />}
          isDisabled={this.props.isDisabled}
          isReadOnly={this.props.isReadOnly}
          onBlur={this.handleInputBlur}
          onChange={this.handleInputChange}
          onClick={this.handleClick}
          onClear={this.handleClickClear}
          onFocus={this.handleFocusInput}
          onKeyUp={this.handleKeyUp}
          placeholder={this.props.placeholder}
          size={this.props.size}
          value={inputtedString}
        />

        <Popover.Content>
          <div ref={this.calendarRef}>
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
