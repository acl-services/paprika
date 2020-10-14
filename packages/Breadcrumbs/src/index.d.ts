export default Breadcrumbs;

declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
interface BreadcrumbsProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** If the breadcrumbs will be rendered on a dark background and will use inverted colours. */
  isDark?: boolean;
  /** If the breadcrumbs will be collapsed when it has more than 3 links. */
  isAutoCollapsed?: boolean;
}

declare namespace Breadcrumbs {
  function Link(props: LinkProps): JSX.Element;
  interface LinkProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** Render as another component instead of Button.Link. */
    as?: string | func;
    /** Url for the link. */
    href?: string;
  }
}
