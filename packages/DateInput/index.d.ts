export default DateInput;

declare function DateInput(props: DateInputProps): JSX.Element;
interface DateInputProps {
  /** If the value of <input> is valid or not. */
  hasError?: boolean;
  /** Date format used while entering and parsing user input. */
  dateFormat?: string;
  /** Selected date in moment object. */
  date?: instanceOf;
  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat?: string;
  /** Callback when date is inputed. Will be called on blur or enter key press. */
  onChange?: func;
  /** Callback when user inputs date. Will be called after every key up event. */
  onChangePossibleDate?: func;
  /** Error callback. Will be called on blur or enter key press if inputted date can't be parsed. */
  onError?: func;
  /** Callback to be executed when the dateInput is clicked or activated by keyboard. */
  onClick?: func;
  /** Guard function. If it returns true - confirmation will be prevented. */
  denyConfirmation?: func;
  /** Callback when confirm */
  beforeConfirmation?: func;
}
