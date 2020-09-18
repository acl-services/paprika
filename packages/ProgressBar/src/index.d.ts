export default ProgressBar;

declare function ProgressBar(props: ProgressBarProps): JSX.Element;
interface ProgressBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Descriptive a11y text for assistive technologies. */
  a11yText?: string;
  /** Description for the ProgressBar */
  bodyText?: string;
  /** Header text for the ProgressBar */
  header?: string;
  /** Specifies how much progress has been completed from 0-100 */
  completed?: number;
}
