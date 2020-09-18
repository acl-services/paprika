export default ResizeDetector;

declare function ResizeDetector(props: ResizeDetectorProps): JSX.Element;
interface ResizeDetectorProps extends React.HTMLAttributes<HTMLElement> {
  /** The width at which the size will change from the default (medium) to large. 0 or null value will disable. */
  breakpointLarge?: number;
  /** The width at which the size will change from small to the default (medium). 0 or null value will disable. */
  breakpointSmall?: number;
  /** Content to be wrapped which will be provided with live dimensions and (tshirt) size values. */
  children?: React.ReactNode;
  /** The ms delay before firing resize events / making live updates. */
  debounceDelay?: number;
  /** If the container will match its parent's width like a block level element (width: 100%). */
  isFullWidth?: boolean;
  /** If the container will match its parent's height (height: 100%). */
  isFullHeight?: boolean;
  /** Callback that fires when the size change crosses a breakpoint threshold (returns new size value). */
  onBreak?: (...args: any[]) => any;
  /** Callback that fires when the size changes (returns new width + height values). */
  onResize?: (...args: any[]) => any;
}
