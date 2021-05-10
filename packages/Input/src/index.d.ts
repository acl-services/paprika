export default Input;

declare function Input(props: InputProps): JSX.Element;
interface InputProps {
  [x: string]: any;
  /** Provides a non-visible label for this input for assistive technologies. */
  a11yText?: string;
  /** Optional Input.Container to collect props for root DOM element. */
  children?: React.ReactNode;
  /** Custom icon for the clear action in the input. */
  clearIcon?: React.ReactNode;
  /** Sets the default input value for an uncontrolled component. */
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
  /** Callback to be executed when the input value is changed. Receives the onChange event as an argument, except when the clear button is clicked, then the argument is null. Required when value prop is provided (component is controlled). */
  onChange?: (...args: any[]) => any;
  /** Changes the size of the input. */
  size?: Input.types.size.SMALL | Input.types.size.MEDIUM | Input.types.size.LARGE;
  /** Allows user to specify the type of input. */
  type?:
    | Input.types.type.EMAIL
    | Input.types.type.PASSWORD
    | Input.types.type.SEARCH
    | Input.types.type.TELEPHONE
    | Input.types.type.TEXT
    | Input.types.type.URL;
  /** The value inside of the input */
  value?: string;
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
declare namespace Input {
  namespace types {
    namespace type {
      const EMAIL: any;
      const PASSWORD: any;
      const SEARCH: any;
      const TELEPHONE: any;
      const TEXT: any;
      const URL: any;
    }
  }
}
