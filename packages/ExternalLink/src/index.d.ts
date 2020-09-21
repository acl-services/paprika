export default ExternalLink;

declare function ExternalLink(props: ExternalLinkProps): JSX.Element;
interface ExternalLinkProps {
  [x: string]: any;
  /** Text for aria-label. */
  ariaText?: string;
  /** Link text for showing. */
  children: string;
  /** It should not show the underline on text content */
  hasNoUnderline?: boolean;
  /** Link url for the target. */
  href: string;
}
