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

declare namespace DatePicker {
  function Input(props: InputProps): JSX.Element;
  interface InputProps {
    [x: string]: any;
    /** a11yText on the input. */
    a11yText?: string;
    /** Custom clear icon */
    clearIcon?: React.ReactNode;
    /** Placeholder of input. */
    placeholder?: string;
    /** Size of input. */
    size?: Input.types.size.SMALL | Input.types.size.MEDIUM | Input.types.size.LARGE;
    /** If the value of <input> is valid or not. */
    hasError?: boolean;
  }
}
declare namespace DatePicker {
  function Popover(props: PopoverProps): JSX.Element;
  interface PopoverProps {
    [x: string]: any;

    offset?: number;
  }
}

declare namespace Input {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
