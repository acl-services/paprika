export default Takeover;

declare function Takeover(props: TakeoverProps): JSX.Element;
interface TakeoverProps {
  [x: string]: any;

  a11yText?: string;
  /** The content for the Takeover */
  children: React.ReactNode;
  /** Control the visibility of the Takeover */
  isOpen: boolean;
  /** Callback once the Takeover has been closed event */
  onAfterClose?: (...args: any[]) => any;
  /** Callback once the Takeover has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback triggered when the takeover needs to be close */
  onClose?: (...args: any[]) => any;
  /** The z-index of the Takeover content */
  zIndex?: number;
}
