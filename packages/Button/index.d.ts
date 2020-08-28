export default Button;

declare function Button(props: ButtonProps): JSX.Element;
interface ButtonProps {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate?: boolean;
  /** Body content of the button. */
  children?: node;
  /** An icon to be included to the left of children content. */
  icon?: node;
  /** If the button is in an "active" or "selected" state. */
  isActive?: boolean;
  /** If the button is disabled. */
  isDisabled?: boolean;
  /** If the button includes a down arrow to the right of children content. */
  isDropdown?: boolean;
  /** If the width of the button should span it's parent container (100%). */
  isFullWidth?: boolean;
  /** If the button should render in a pending state (with a spinner icon). */
  isPending?: boolean;
  /** If it will be rendered as a <button> element. If false, a <span> will be rendered via an accessible <RawButton>. */
  isSemantic?: boolean;
  /** If the type attribute should "submit", instead of the default "button". */
  isSubmit?: boolean;
  /** The visual style of the button. */
  kind?: Kinds.ALL;
  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  onClick?: func;
  /** Value for role attribute to override the default of "button". */
  role?: string;
  /** Size of the button (font size, min-height, padding, etc). */
  size?: ShirtSizes.DEFAULT;
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex?: number;
}
