export default Select;

declare function Select(props: SelectProps): JSX.Element;
interface SelectProps {
  [x: string]: any;
  /** Provides a non-visible label for this select element for assistive technologies. */
  a11yText?: string;
  /** List of options as standard option elements. */
  children?: React.ReactNode;
  /** Sets the default selected value for an uncontrolled component. */
  defaultValue?: string;
  /** If true displays a red border around select element to indicate error. */
  hasError?: boolean;
  /** If true it makes the select element disabled. */
  isDisabled?: boolean;
  /** If true it makes the select element read only. */
  isReadOnly?: boolean;
  /** Callback to be executed when the selected value is changed. Receives the onChange event as an argument.  Required when value prop is provided (component is controlled). */
  onChange?: (...args: any[]) => any;
  /** Display value for a disabled first option with an empty string value. */
  placeholder?: string;
  /** Specifies the visual size of the select element. */
  size?: Select.types.size.SMALL | Select.types.size.MEDIUM | Select.types.size.LARGE;
  /** The selected value for the select element. */
  value?: string;
}

declare namespace Select {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
