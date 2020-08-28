export default CollapsibleText;

declare function CollapsibleText(props: CollapsibleTextProps): JSX.Element;
interface CollapsibleTextProps {
  /** Additional description for "Show more" link. Should be a "topic" that will be appended to "Show more about [topic]". */
  a11yText?: string;
  /** Full content to be revealed. Can include HTML markup, but should not include dynamic React nodes. */
  children: node;
  /** Length, in characters, of truncated preview content. */
  collapsedLength?: number;
}
