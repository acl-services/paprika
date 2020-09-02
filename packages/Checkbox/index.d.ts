export default Checkbox;

declare function Checkbox(props: CheckboxProps): JSX.Element;
interface CheckboxProps {
  /** Used for aria-describedby on the checkbox input */
  ariaDescribedBy?: string;
  /** Used for aria-label on the checkbox input */
  a11yText?: string;
  /** The checkbox state */
  checkedState?: "checked" | "indeterminate" | "unchecked";
  /** Used for label contents */
  children?: React.ReactNode;
  /** Describe if the checkbox is disabled or not */
  isDisabled?: boolean;
  /** Callback triggered when the input state is changed */
  onChange?: (...args: any[]) => any;
  /** Size provided by parent Group component */
  size?: ShirtSizes.DEFAULT;
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex?: number | string;
}
