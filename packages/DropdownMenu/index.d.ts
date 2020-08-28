export default DropdownMenu;

declare function DropdownMenu(props: DropdownMenuProps): JSX.Element;
interface DropdownMenuProps {
  /** Alignment of the Popover */
  align?: custom;
  /** Children should consist of <Dropdown.Item /> */
  children: node;
  /** If provided, will align Popover to specified edge of Trigger */
  edge?: custom;
  /** The z-index for the popover / confirmation */
  zIndex?: custom;
}
declare namespace DropdownMenu {
  function Item(props: ItemProps): JSX.Element;
  interface ItemProps {
    /** HTML for each item */
    children: node;
    /** If the item is destructive. */
    isDestructive?: boolean;
    /** Callback to be executed when button is clicked */
    onClick?: func;
    /** Callback to be executed when key is pressed */
    onKeyDown?: func;
    /** Callback to be executed when dropdown needs to be closed */
    onClose?: func;
    /** Callback to be executed when delete item is clicked */
    onShowConfirmation?: func;
    /** Render prop to render the replacement node */
    renderConfirmation?: func;
  }
}
declare namespace DropdownMenu {
  function LinkItem(props: LinkItemProps): JSX.Element;
  interface LinkItemProps {
    /** HTML for each LinkItem */
    children: node;
    /** The url for the href */
    link: string;
    /** Callback to be executed when key is pressed */
    onKeyDown?: func;
    /** Should the link open content in a new tab */
    isExternal?: boolean;
  }
}
declare namespace DropdownMenu {
  function Trigger(props: TriggerProps): JSX.Element;
  interface TriggerProps {
    children?: node;
    /** Determine the styling of the button */
    buttonType?: ButtonTypes.ALL;

    isOpen?: boolean;

    menuRefId?: string;

    onOpenMenu?: func;

    triggerRef?: custom;
  }
}
