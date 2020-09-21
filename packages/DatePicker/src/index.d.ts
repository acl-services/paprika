export default DatePicker;

declare function DatePicker(props: DatePickerProps): JSX.Element;
interface DatePickerProps {
  [x: string]: any;

  children?: React.ReactNode;
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
  onChange: (...args: any[]) => any;
  /** Internal errors callback */
  onError?: (...args: any[]) => any;
  /** If there is an external error or not. */
  hasError?: boolean;
}
