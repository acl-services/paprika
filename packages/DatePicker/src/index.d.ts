export default DatePicker;

declare function DatePicker(props: DatePickerProps): JSX.Element;
interface DatePickerProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** Date format used while entering and parsing user input. */
  dateFormat?: string;
  /** Selected date in moment object. */
  date?: instanceOf;
  /** Date format used while displaying date. It should be human-friendly and spelled out, default is MMMM DD,YYYY */
  humanFormat?: string;
  /** Should be disabled or not, default is false. */
  isDisabled?: boolean;
  /** Should be read-only or not, default is false. */
  isReadOnly?: boolean;
  /** Callback when date is selected or input. */
  onChange: (...args: any[]) => any;
  /** Internal errors callback */
  onError?: (...args: any[]) => any;
  /** If there is an external error or not. */
  hasError?: boolean;
}

declare namespace DatePicker {
  function Input(props: InputProps): JSX.Element;
  interface InputProps {
    [x: string]: any;
    /** a11yText on the input. */
    a11yText?: string;
    /** Custom clear icon */
    clearIcon?: React.ReactNode;
    /** Placeholder of input. */
    placeholder?: string;
    /** Size of input. */
    size?: Input.types.size.SMALL | Input.types.size.MEDIUM | Input.types.size.LARGE;
    /** If the value of <input> is valid or not. */
    hasError?: boolean;
  }
}
declare namespace DatePicker {
  function Popover(props: PopoverProps): JSX.Element;
  interface PopoverProps {
    [x: string]: any;
    /** Where the popover content is positioned relative to the trigger or getPositioningElement. */
    align?: Popover.types.align.TOP | Popover.types.align.RIGHT | Popover.types.align.BOTTOM | Popover.types.align.LEFT;
    /** Content of the popover */
    children: React.ReactNode;
    /** Displays as a "tooltip" style with white text on black background. */
    isDark?: boolean;
    /** Activated by mouseOver / focus instead of onClick. */
    isEager?: boolean;
    /** How "controlled" popovers are shown / hidden. */
    isOpen?: boolean;
    /** This renders the popover inline in the DOM and not in a react portal. WARNING: will have side effects with paprika side panels and modals, use with caution. */
    isPortal?: boolean;
    /** How "uncontrolled" popovers can be rendered open by default. */
    defaultIsOpen?: boolean;
    /** Where the edge of the popover content is based on the trigger or getPositioningElement */
    edge?: Popover.types.align.LEFT | Popover.types.align.RIGHT | null;
    /** Maximum width of popover content. Using a number is recommended and implies px units. */
    maxWidth?: string | number;
    /** Minimumn width of popover content. Using a number is recommended and implies px units. */
    minWidth?: string | number;
    /** Callback to fire when user closes popover. */
    onClose?: (...args: any[]) => any;
    /** Distance, in px, between popover content edge and trigger / getPositioningElement. */
    offset?: number;
    /** Function that provides DOM element to use as target for positioning the popover. */
    getPositioningElement?: (...args: any[]) => any;
    /** Function that provides the scrolling DOM element that contains the popover. */
    getScrollContainer?: (...args: any[]) => any;
    /** If focus will stay at the trigger when showing popover. Popover can still be closed when clicking outside or pressing escape key. */
    shouldKeepFocus?: boolean;
    /** Number setting the z-index for the popover content / tip. */
    zIndex?: number;
  }
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
declare namespace Popover {
  namespace types {
    namespace align {
      const TOP: any;
      const RIGHT: any;
      const BOTTOM: any;
      const LEFT: any;
    }
  }
}
declare namespace Popover {
  namespace types {
    namespace align {
      const LEFT: any;
      const RIGHT: any;
    }
  }
}
