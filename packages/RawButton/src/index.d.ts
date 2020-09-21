export default RawButton;

declare function RawButton(props: RawButtonProps): JSX.Element;
interface RawButtonProps {
  [x: string]: any;
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate?: boolean;
  /** Body content of the button. */
  children: React.ReactNode;
  /** If the visual focus ring should be displayed with an inset style. */
  hasInsetFocusStyle?: boolean;
  /** If the button is in an "active" or "selected" state. */
  isActive?: boolean;
  /** If the button is disabled. */
  isDisabled?: boolean;
  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  onClick?: (...args: any[]) => any;
  /** Value for role attribute to override the default of "button". */
  role?: string;
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex?: number;
}
