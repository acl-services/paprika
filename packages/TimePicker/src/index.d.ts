export default TimePicker;

declare function TimePicker(props: TimePickerProps): JSX.Element;
interface TimePickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Descriptive a11y text for assistive technologies. */
  a11yText?: string;
  /** If the TimePicker is set to visible. */
  defaultIsOpen?: boolean;
  /** Sets the default value for the TimePicker */
  defaultValue?: string;
  /** If the TimePicker is disabled. */
  isDisabled?: boolean;
  /** Callback to be executed when the value is changed. */
  onChange?: (...args: any[]) => any;
  /** Callback to be executed when there is an error. */
  onError?: (...args: any[]) => any;
}
