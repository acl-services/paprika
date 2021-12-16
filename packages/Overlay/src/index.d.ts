export default Overlay;

declare function Overlay(props: OverlayProps): JSX.Element;
interface OverlayProps {
  [x: string]: any;

  backdropClassName?: string;

  children?: (...args: any[]) => any;
  /** Portal container for the Overlay */
  container?: React.ReactNode;

  focusLockOptions?: shape;

  hasBackdrop?: boolean;

  isOpen: boolean;

  onClose?: (...args: any[]) => any;

  onAfterOpen?: (...args: any[]) => any;

  onAfterClose?: (...args: any[]) => any;
  /** z-index of the Overlay wrapper */
  zIndex?: number;
}
