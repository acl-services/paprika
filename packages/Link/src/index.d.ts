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
  /** Change font-color according to background color */
  isDark?: boolean;
  /** Set font-color to black */
  isSubtle?: boolean;
  /** Icon + text format */
  isNavigation?: boolean;
  /** Content to be displayed: texts, icons, etc. */
  children?: React.ReactNode;
}
