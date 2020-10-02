export default Modal;

declare function Modal(props: ModalProps): JSX.Element;
interface ModalProps {
  [x: string]: any;

  a11yText?: string;
  /** The content for the Modal. */
  children: React.ReactNode;
  /** Control the visibility of the modal */
  isOpen: boolean;
  /** Callback triggered when the modal needs to be closed */
  onClose?: (...args: any[]) => any;
  /** Callback once the modal has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback once the modal has been closed event */
  onAfterClose?: (...args: any[]) => any;

  size?: Modal.types.size.SMALL | Modal.types.size.MEDIUM | Modal.types.size.LARGE;
  /** The z-index of the Takeover content */
  zIndex?: number;
}

declare namespace Modal {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
