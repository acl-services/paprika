export default Button;

declare function Button(props: ButtonProps): JSX.Element;
interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate?: boolean;
  /** Body content of the button. */
  children?: React.ReactNode;
  /** An icon to be included to the left of children content. */
  icon?: React.ReactNode;
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
  kind?:
    | Button.types.kind.DEFAULT
    | Button.types.kind.PRIMARY
    | Button.types.kind.SECONDARY
    | Button.types.kind.DESTRUCTIVE
    | Button.types.kind.FLAT
    | Button.types.kind.MINOR
    | Button.types.kind.LINK;
  /** Callback to be executed when the button is clicked or activated by keyboard. Typically required. */
  onClick?: (...args: any[]) => any;
  /** Value for role attribute to override the default of "button". */
  role?: string;
  /** Size of the button (font size, min-height, padding, etc). */
  size?: Button.types.size.SMALL | Button.types.size.MEDIUM | Button.types.size.LARGE;
  /** Value for tabindex attribute to override the default of 0. */
  tabIndex?: number;
}
