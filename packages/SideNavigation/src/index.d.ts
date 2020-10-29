export default SideNavigation;

declare function SideNavigation(props: SideNavigationProps): JSX.Element;
interface SideNavigationProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** Header text in the side panel. */
  header?: React.ReactNode;
}

declare namespace SideNavigation {
  function Item(props: ItemProps): JSX.Element;
  interface ItemProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** If this side navigation item is the current page and should be highlighted. */
    isCurrent?: boolean;
  }
}
