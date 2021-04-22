export default ProgressBar;

declare function ProgressBar(props: ProgressBarProps): JSX.Element;
interface ProgressBarProps {
  [x: string]: any;
  /** Descriptive a11y text for assistive technologies. */
  a11yText?: string;
  /** Description for the ProgressBar */
  bodyText?: string;
  /** Specifies how much progress has been completed from 0-100 */
  completed?: number;
  /** Text for the heading displayed above ProgressBar */
  header?: React.ReactNode;
  /** Semantic heading level of header */
  headerLevel?: custom;
  /** If ProgressBar is displayed in a compact style */
  isCompact?: boolean;
}
