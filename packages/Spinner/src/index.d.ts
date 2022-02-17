export default Spinner;

declare function Spinner(props: SpinnerProps): JSX.Element;
interface SpinnerProps {
  [x: string]: any;
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** Sets the caption that will display beneath the spinner */
  caption?: string;
  /** If the background is dark, different color of spinner will be rendered */
  isDark?: boolean;
  /** Sets the size of the spinner */
  size?: Spinner.types.size.SMALL | Spinner.types.size.MEDIUM | Spinner.types.size.LARGE;
}

declare namespace Spinner {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
