export default Heading;

declare function Heading(props: HeadingProps): JSX.Element;
interface HeadingProps {
  /** Optional aria text if it should be more descriptive than what is rendered */
  a11yText?: string;
  /** Heading content is required */
  children: React.ReactNode;
  /** Optional display level(1-6) affects styles only */
  displayLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Horizontal divider style */
  hasDivider?: boolean;
  /** Underline style */
  hasUnderline?: boolean;
  /** Optional, visually hide the header */
  isHidden?: boolean;
  /** Optional, renders the children at a lighter font weight */
  isLight?: boolean;
  /** Optional, using <div> to avoid styles override by global css. */
  isSemantic?: boolean;
  /** Heading level(1-6) is required. */
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
