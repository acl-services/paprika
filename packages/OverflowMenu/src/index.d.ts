export default OverflowMenu;

declare function OverflowMenu(props: OverflowMenuProps): JSX.Element;
interface OverflowMenuProps {
  [x: string]: any;
  /** Where the popover content is positioned relative to the trigger or getPositioningElement. */
  align?: Popover.types.align.TOP | Popover.types.align.RIGHT | Popover.types.align.BOTTOM | Popover.types.align.LEFT;
  /** Children should consist of <OverflowMenu.Item /> */
  children: React.ReactNode;
  /** If provided, will align Popover to specified edge of Trigger */
  edge?: Popover.types.align.LEFT | Popover.types.align.RIGHT | null;
  /** Control if the overflow menu popover open. */
  isOpen?: boolean;
  /** The maximum height of the OverflowMenu content */
  maxHeight?: number | string;
  /** If provided, will fire when the Popover is closed */
  onClose?: (...args: any[]) => any;
  /** The z-index for the popover / confirmation */
  zIndex?: number;
}

declare namespace OverflowMenu {
  function Item(props: ItemProps): JSX.Element;
  interface ItemProps {
    [x: string]: any;
    /** HTML for each item */
    children: React.ReactNode;
    /** If the item is destructive. */
    isDestructive?: boolean;
    /** Callback to be executed when button is clicked */
    onClick?: (...args: any[]) => any;
    /** Callback to be executed when key is pressed */
    onKeyDown?: (...args: any[]) => any;
    /** Callback to be executed when overflow menu needs to be closed */
    onClose?: (...args: any[]) => any;
    /** Callback to be executed when delete item is clicked */
    onShowConfirmation?: (...args: any[]) => any;
    /** Render prop to render the replacement node */
    renderConfirmation?: (...args: any[]) => any;
  }
}
declare namespace OverflowMenu {
  function LinkItem(props: LinkItemProps): JSX.Element;
  interface LinkItemProps {
    [x: string]: any;
    /** HTML for each LinkItem */
    children: React.ReactNode;
    /** The url for the href */
    link: string;
    /** Callback to be executed when key is pressed */
    onKeyDown?: (...args: any[]) => any;
    /** Should the link open content in a new tab */
    isExternal?: boolean;
  }
}
declare namespace OverflowMenu {
  function Trigger(props: TriggerProps): JSX.Element;
  interface TriggerProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** Determine the styling of the button */
    buttonType?: Trigger.types.button.ICON | Trigger.types.button.RAW | Trigger.types.button.SIMPLE;

    isOpen?: boolean;

    menuRefId?: string;

    onClick?: (...args: any[]) => any;

    onOpenMenu?: (...args: any[]) => any;

    triggerRef?: custom;
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
declare namespace Trigger {
  namespace types {
    namespace button {
      const ICON: any;
      const RAW: any;
      const SIMPLE: any;
    }
  }
}
