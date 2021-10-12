export default Link;

declare function Link(props: LinkProps): JSX.Element;
interface LinkProps {
  [x: string]: any;
  /** Text for aria-label. */
  a11yText?: string;
  /** Open url in a new Tab, is indicated by a Tab icon after the link. */
  isExternalLink?: boolean;
  /** Remove the default underline */
  hasNoUnderline?: boolean;
  /** Set font-color to black */
  isBlack?: boolean;
  /** Icon + text format */
  isNavigation?: boolean;
  /** Size for Font (and Icon) */
  size?: Link.types.size.SMALL | Link.types.size.MEDIUM;
  /** Content to be displayed: texts, icons, etc. */
  children?: React.ReactNode;
  /** URL for the Link. */
  href: string;
}

declare namespace Link {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
    }
  }
}
