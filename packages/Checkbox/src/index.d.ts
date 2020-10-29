export default Checkbox;

declare function Checkbox(props: CheckboxProps): JSX.Element;
interface CheckboxProps {
  [x: string]: any;
  /** Used for aria-label on the checkbox input */
  a11yText?: string;
  /** The checkbox state */
  checkedState?: Checkbox.types.state.CHECKED | Checkbox.types.state.UNCHECKED | Checkbox.types.state.INDETERMINATE;
  /** Used for label contents */
  children?: React.ReactNode;
  /** Describe if the checkbox is disabled or not */
  isDisabled?: boolean;
  /** Callback triggered when the input state is changed */
  onChange?: (...args: any[]) => any;
  /** Size provided by parent Group component */
  size?: Checkbox.types.size.SMALL | Checkbox.types.size.MEDIUM | Checkbox.types.size.LARGE;
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex?: number | string;
}

declare namespace Checkbox {
  namespace types {
    namespace state {
      const CHECKED: any;
      const UNCHECKED: any;
      const INDETERMINATE: any;
    }
  }
}
declare namespace Checkbox {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
