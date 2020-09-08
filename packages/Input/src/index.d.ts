export default Input;

declare function Input(props: InputProps): JSX.Element;
interface InputProps {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** Sets the class for the input. */
  className?: string;
  /** Custom icon for the clear action in the input. */
  clearIcon?: React.ReactNode;
  /** Sets the default input value */
  defaultValue?: string;
  /** If true displays a clear button inside the input if it contains a value. */
  hasClearButton?: boolean;
  /** If true displays a red border around input to show error. */
  hasError?: boolean;
  /** Displays an icon inside the input. */
  icon?: React.ReactNode;
  /** If true it makes the input disabled. */
  isDisabled?: boolean;
  /** If true it makes the input read only. */
  isReadOnly?: boolean;
  /** Callback to be executed when the input value is changed. Should not be used with defaultValue prop */
  onChange?: (...args: any[]) => any;
  /** Callback to be executed when the input value is cleared */
  onClear?: (...args: any[]) => any;
  /** Changes the size of the input. */
  size?: Input.types.size.SMALL | Input.types.size.MEDIUM | Input.types.size.LARGE;
  /** Allows user to specify the type of input. */
  type?:
    | Input.types.type.EMAIL
    | Input.types.type.NUMBER
    | Input.types.type.PASSWORD
    | Input.types.type.SEARCH
    | Input.types.type.TELEPHONE
    | Input.types.type.TEXT
    | Input.types.type.URL;
  /** The value inside of the input */
  value?: string;
}
