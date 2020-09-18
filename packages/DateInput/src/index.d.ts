export default DateInput;

declare function DateInput(props: DateInputProps): JSX.Element;
interface DateInputProps extends React.HTMLAttributes<HTMLElement> {
  /** If the value of <input> is valid or not. */
  hasError?: boolean;
  /** Date format used while entering and parsing user input. */
  dateFormat?: string;
  /** Selected date in moment object. */
  date?: instanceOf;
  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat?: string;
  /** Callback when date is inputed. Will be called on blur or enter key press. */
  onChange?: (...args: any[]) => any;
  /** Callback when user inputs date. Will be called after every key up event. */
  onChangePossibleDate?: (...args: any[]) => any;
  /** Error callback. Will be called on blur or enter key press if inputted date can't be parsed. */
  onError?: (...args: any[]) => any;
  /** Callback to be executed when the dateInput is clicked or activated by keyboard. */
  onClick?: (...args: any[]) => any;
  /** Guard function. If it returns true - confirmation will be prevented. */
  denyConfirmation?: (...args: any[]) => any;
  /** Callback when confirm */
  beforeConfirmation?: (...args: any[]) => any;
}
