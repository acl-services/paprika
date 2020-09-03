export default Spinner;

declare function Spinner(props: SpinnerProps): JSX.Element;
interface SpinnerProps {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** Sets the className for the spinner */
  className?: string;
  /** Sets the caption that will display beneath the spinner */
  caption?: string;
  /** Sets the size of the spinner */
  size?: Spinner.types.size.SMALL | Spinner.types.size.MEDIUM | Spinner.types.size.LARGE;
}
