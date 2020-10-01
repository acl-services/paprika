export default Button;

declare function Button(props: ButtonProps): JSX.Element;
interface ButtonProps {
  [x: string]: any;
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
declare namespace Button {
  function Close(props: CloseProps): JSX.Element;
  interface CloseProps {
    [x: string]: any;
    /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
    a11yText?: string;
    /** If the close button will be rendered on a dark background and will use inverted colours. */
    isDark?: boolean;
  }
}
declare namespace Button {
  function Icon(props: IconProps): JSX.Element;
  interface IconProps {
    [x: string]: any;
    /** Body content of the button (an icon). */
    children: React.ReactNode;
    /** The visual style of the button. */
    kind?:
      | Icon.types.kind.DEFAULT
      | Icon.types.kind.PRIMARY
      | Icon.types.kind.SECONDARY
      | Icon.types.kind.DESTRUCTIVE
      | Icon.types.kind.FLAT
      | Icon.types.kind.MINOR
      | Icon.types.kind.LINK;
    /** Size of the button (font size, min-height, padding, etc). */
    size?: Icon.types.size.SMALL | Icon.types.size.MEDIUM | Icon.types.size.LARGE;
  }
}
declare namespace Button {
  function Link(props: LinkProps): JSX.Element;
  interface LinkProps {
    [x: string]: any;
    /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
    a11yText?: string;
    /** Body content of the button. */
    children: React.ReactNode;
    /** Url for the link. */
    href: string;
    /** An icon to be included to the left of children content. */
    icon?: React.ReactNode;
    /** If the button is disabled. */
    isDisabled?: boolean;
    /** The visual style of the button. */
    kind?:
      | Link.types.kind.DEFAULT
      | Link.types.kind.PRIMARY
      | Link.types.kind.SECONDARY
      | Link.types.kind.DESTRUCTIVE
      | Link.types.kind.FLAT
      | Link.types.kind.MINOR
      | Link.types.kind.LINK;
    /** Size of the button (font size, min-height, padding, etc). */
    size?: Link.types.size.SMALL | Link.types.size.MEDIUM | Link.types.size.LARGE;
    /** Whether the link should open a new tab. */
    shouldOpenNewTab?: boolean;
    /** Size of the button (font size, min-height, padding, etc). */
    suffixIcon?: React.ReactNode;
  }
}
