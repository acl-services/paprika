export default Checkbox;

declare function Checkbox(props: CheckboxProps): JSX.Element;
interface CheckboxProps extends React.HTMLAttributes<HTMLElement> {
  /** Used for aria-describedby on the checkbox input */
  ariaDescribedBy?: string;
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
