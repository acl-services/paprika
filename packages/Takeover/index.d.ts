export default Takeover;

declare function Takeover(props: TakeoverProps): JSX.Element;
interface TakeoverProps {
  a11yText?: string;
  /** The content for the Takeover */
  children: node;
  /** Control the visibility of the Takeover */
  isOpen: boolean;
  /** Callback once the Takeover has been closed event */
  onAfterClose?: func;
  /** Callback once the Takeover has been opened event */
  onAfterOpen?: func;
  /** Callback triggered when the takeover needs to be close */
  onClose?: func;
  /** The z-index of the Takeover content */
  zIndex?: number;
}
