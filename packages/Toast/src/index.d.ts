export default Toast;

declare function Toast(props: ToastProps): JSX.Element;
interface ToastProps {
  [x: string]: any;
  /** Duration (in ms) before Toast will automaticall close (if canAutoClose is true) */
  autoCloseDelay?: number;
  /** Will automatically close after 1500ms (or longer if provided by autoCloseDelay) */
  canAutoClose?: boolean;
  /** Content of the Toast */
  children?: React.ReactNode;
  /** If the component should have a 'close' button */
  hasCloseButton?: boolean;
  /** How "controlled" toast is shown / hidden. */
  isOpen?: boolean;
  /** If the Toast is fixed to the top of the viewport. This will render the Toast as a Portal. */
  isFixed?: boolean;
  /** A11y: If the toast is polite or not. If false, then the toast will be assertive. */
  isPolite?: boolean;
  /** Determines the styling of the Toast */
  kind?:
    | Toast.types.kind.SUCCESS
    | Toast.types.kind.WARNING
    | Toast.types.kind.ERROR
    | Toast.types.kind.INFO
    | Toast.types.kind.LOCKED
    | Toast.types.kind.VISUALLY_HIDDEN;
  /** Callback that is executed after clicking the 'close' button */
  onClose?: (...args: any[]) => any;
  /** The z-index of the Toast */
  zIndex?: number;
}

declare namespace Toast {
  namespace types {
    namespace kind {
      const SUCCESS: any;
      const WARNING: any;
      const ERROR: any;
      const INFO: any;
      const LOCKED: any;
      const VISUALLY_HIDDEN: any;
    }
  }
}
