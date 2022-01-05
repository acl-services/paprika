export default ListBox;

declare function ListBox(props: ListBoxProps): JSX.Element;
interface ListBoxProps {
  [x: string]: any;
  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children?: node[];
  /** If ListBox is in an error state */
  hasError?: boolean;
  /** If there is a tag */
  hasTag?: boolean;
  /** Has implicit "All items selected" value when no item is selected */
  hasImplicitAll?: boolean;
  /** The maximum height for the options container. Using a number implies px units. */
  height?: string | number;
  /** Disables the ListBox if true */
  isDisabled?: boolean;
  /** This options will display the list-box without the Popover */
  isInline?: boolean;
  /** Let the user to select multiple options at same time */
  isMulti?: boolean;
  /** Indicates if the popover is visible */
  isOpen?: boolean;
  /** The ListBox will not allow value to be changed */
  isReadOnly?: boolean;
  /** Callback returning the current selection on the ListBox */
  onChange?: (...args: any[]) => any;
  /** Default label for trigger when the ListBox has no option selected */
  placeholder?: string;
  /** Size of the trigger and options (font size, height, padding, etc). */
  size?: ListBoxContainer.types.size.SMALL | ListBoxContainer.types.size.MEDIUM | ListBoxContainer.types.size.LARGE;
  /** Lets the user control the X-axis offset for the ListBox content */
  contentOffsetX?: number;
  /** Lets the user control the Y-axis offset for the ListBox content */
  contentOffsetY?: number;
}

declare namespace ListBox {
  function A11y(props: A11yProps): JSX.Element;
  interface A11yProps {
    [x: string]: any;
    /** DOM id attribute for focussable control (trigger element or ul element if isInline=true) */
    id?: string;
    /** Ref for a DOM element containing the label for this component */
    refLabel?: custom;
  }
}
declare namespace ListBox {
  function Box(props: BoxProps): JSX.Element;
  interface BoxProps {
    [x: string]: any;
    /** Body content of the box. */
    children?: React.ReactNode;
  }
}
declare namespace ListBox {
  function Divider(props: DividerProps): JSX.Element;
  interface DividerProps {
    [x: string]: any;
    /** isDisable is use internally as a default prop
  the prop is read by the option/helpers/optionState.js which is assigned in the store
  it helps to ignore the divider while using the keyboard.
  see: options/helpers/options.js */
    isDisabled?: boolean;

    children?: React.ReactNode;
  }
}
declare namespace ListBox {
  function Filter(props: FilterProps): JSX.Element;
  interface FilterProps {
    [x: string]: any;
    /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
    a11yText?: string;
    /** Filters the list */
    filter?: (...args: any[]) => any;
    /** If true displays a search icon */
    hasSearchIcon?: boolean;
    /** Message displayed if no results are found */
    noResultsMessage?: string;
    /** Callback to be executed when the value is changed */
    onChangeFilter?: (...args: any[]) => any;
    /** Callback to be executed when a key is pressed */
    onKeyDown?: (...args: any[]) => any;
    /** Displays a placeholder */
    placeholder?: string;
    /** Render function for filter */
    renderFilter?: (...args: any[]) => any;
    /** Sets a value for filter */
    value?: string;
  }
}
declare namespace ListBox {
  function Footer(props: FooterProps): JSX.Element;
  interface FooterProps {
    [x: string]: any;
    /** If true it makes the accept button visible */
    isAcceptVisible?: boolean;
    /** If true it makes the cancel button visible */
    isCancelVisible?: boolean;
    /** If true it makes the clear button visible */
    isClearVisible?: boolean;
    /** If true it makes the footer disabled */
    isDisabled?: boolean;
    /** Sets what kind the accept button will be */
    kindAccept?: Button.types.kind.PRIMARY | Button.types.kind.MINOR;
    /** Sets what kind the cancel button will be */
    kindCancel?: Button.types.kind.PRIMARY | Button.types.kind.MINOR;
    /** Sets what kind the cancel button will be */
    kindClear?: Button.types.kind.PRIMARY | Button.types.kind.MINOR;
    /** Sets the label for the accept button */
    labelAccept?: string;
    /** Sets the label for the cancel button */
    labelCancel?: string;
    /** Sets the label for the clear button */
    labelClear?: string;
    /** Callback to be executed when the accept button is clicked or activated by keyboard. */
    onClickAccept?: (...args: any[]) => any;
    /** Callback to be executed when the cancel button is clicked or activated by keyboard. */
    onClickCancel?: (...args: any[]) => any;
    /** Callback to be executed when the clear button is clicked or activated by keyboard. */
    onClickClear?: (...args: any[]) => any;
    /** Render an extra button beside the clear button */
    renderExtraButton?: (...args: any[]) => any;
    /** Determines the size of the footer */
    size?: Button.types.size.SMALL | Button.types.size.MEDIUM | Button.types.size.LARGE;
  }
}
declare namespace ListBox {
  function Option(props: OptionProps): JSX.Element;
  interface OptionProps {
    [x: string]: any;
    /** String, number or JSX content */
    children: node | func;

    isSelected?: boolean;
    /** Describe if the option started as selected or not */
    defaultIsSelected?: boolean;
    /** When no PlusIcon or CheckBox are needed */
    hasNoIcon?: boolean;
    /** Describe if the option is enable or not */
    isDisabled?: boolean;
    /** Describe if the option is hidden or not */
    isHidden?: boolean;
    /** When the children are not a String, label should need to be add so the filter can work */
    label?: string;
    /** Callback for the clicking event */
    onClick?: (...args: any[]) => any;
    /** Value of your option this can be any data structure */
    value?: any;
    /** Internal prop, which shouldn't be documented */
    internalHandleOnClick: (...args: any[]) => any;
    /** Internal prop, which shouldn't be documented */
    id: string;
    /** Internal prop, which shouldn't be documented */
    preventDefaultOnSelect?: boolean;
  }
}
declare namespace ListBox {
  function Popover(props: PopoverProps): JSX.Element;
  interface PopoverProps {
    [x: string]: any;
    /** Body content of the PopOver. */
    children?: React.ReactNode;
    /** Sets the z-index value of the PopOver */
    zIndex?: number;
  }
}
declare namespace ListBox {
  function RawItem(props: RawItemProps): JSX.Element;
  interface RawItemProps {
    [x: string]: any;

    preventDefaultOnSelect?: boolean;
  }
}
declare namespace ListBox {
  function Trigger(props: TriggerProps): JSX.Element;
  interface TriggerProps {
    [x: string]: any;
    /** Custom clear icon */
    clearIcon?: React.ReactNode;
    /** Body content of the trigger. */
    children?: node | func;
    /** If true it adds a clear button */
    hasClearButton?: boolean;
    /** Has implicit "All items selected" value when no item is selected */
    hasImplicitAll?: boolean;
    /** Override the label with a custom one. */
    label?: string;
    /** Callback to be executed when the clear button is clicked or activated by keyboard. */
    onClickClear?: (...args: any[]) => any;
    /** Callback to be executed when the accept button is clicked or activated by keyboard. */
    onClickFooterAccept?: (...args: any[]) => any;
    /** Sets a placeholder for the trigger */
    placeholder?: string;
    /** If true the trigger will be hidden */
    isHidden?: boolean;
  }
}

declare namespace ListBoxContainer {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
declare namespace Button {
  namespace types {
    namespace kind {
      const PRIMARY: any;
      const MINOR: any;
    }
  }
}
declare namespace Button {
  namespace types {
    namespace kind {
      const PRIMARY: any;
      const MINOR: any;
    }
  }
}
declare namespace Button {
  namespace types {
    namespace kind {
      const PRIMARY: any;
      const MINOR: any;
    }
  }
}
declare namespace Button {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
