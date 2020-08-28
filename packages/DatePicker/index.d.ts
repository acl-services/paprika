export default DatePicker;

declare function DatePicker(props: DatePickerProps): JSX.Element;
interface DatePickerProps {
  children?: node;
  /** Date format used while entering and parsing user input. */
  dateFormat?: string;
  /** Selected date in moment object. */
  date?: instanceOf;
  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat?: string;
  /** ID for the `<input>`. */
  id?: string;
  /** Should be disabled or not, default is false. */
  isDisabled?: boolean;
  /** Should be read-only or not, default is false. */
  isReadOnly?: boolean;
  /** Callback when date is selected or input. */
  onChange: func;
  /** Internal errors callback */
  onError?: func;
  /** If there is an external error or not. */
  hasError?: boolean;
}
