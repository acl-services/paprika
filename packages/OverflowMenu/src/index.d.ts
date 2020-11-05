export default OverflowMenu;

declare function OverflowMenu(props: OverflowMenuProps): JSX.Element;
interface OverflowMenuProps {
  [x: string]: any;
  /** Alignment of the Popover */
  align?: custom;
  /** Children should consist of <OverflowMenu.Item /> */
  children: React.ReactNode;
  /** If provided, will align Popover to specified edge of Trigger */
  edge?: custom;
  /** If provided, will fire when the Popover is closed */
  onClose?: custom;
  /** The z-index for the popover / confirmation */
  zIndex?: custom;
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

    onOpenMenu?: (...args: any[]) => any;

    triggerRef?: custom;
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
