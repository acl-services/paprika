export default DropdownMenu;

declare function DropdownMenu(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const align: custom;
  const children: node;
  const edge: custom;
  const zIndex: custom;
}

declare function Item(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const isDestructive: bool;
  const onClick: func;
  const onKeyDown: func;
  const onClose: func;
  const onShowConfirmation: func;
  const renderConfirmation: func;
}

declare function LinkItem(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const link: string;
  const onKeyDown: func;
  const isExternal: bool;
}

declare function Trigger(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const buttonType: ButtonTypes.ALL;
  const isOpen: bool;
  const menuRefId: string;
  const onOpenMenu: func;
  const triggerRef: custom;
}
