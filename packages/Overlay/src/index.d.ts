export default Overlay;

declare function Overlay(props: OverlayProps): JSX.Element;
interface OverlayProps extends React.HTMLAttributes<HTMLElement> {
  backdropClassName?: string;

  children?: (...args: any[]) => any;
  /** container of the Overlay element */
  container?: instanceOf;

  focusLockOptions?: shape;

  hasBackdrop?: boolean;

  isOpen: boolean;

  onClose?: (...args: any[]) => any;

  onAfterOpen?: (...args: any[]) => any;

  onAfterClose?: (...args: any[]) => any;
  /** z-index of the Overlay wrapper */
  zIndex?: number;
}
