export default Overlay;

declare function Overlay(props: OverlayProps): JSX.Element;
interface OverlayProps {
  backdropClassName?: string;

  children?: func;
  /** container of the Overlay element */
  container?: instanceOf;

  focusLockOptions?: shape;

  hasBackdrop?: boolean;

  isOpen: boolean;

  onClose?: func;

  onAfterOpen?: func;

  onAfterClose?: func;
  /** z-index of the Overlay wrapper */
  zIndex?: number;
}
