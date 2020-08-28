export default Modal;

declare function Modal(props: ModalProps): JSX.Element;
interface ModalProps {
  a11yText?: string;
  /** The content for the Modal. */
  children: node;
  /** Control the visibility of the modal */
  isOpen: boolean;
  /** Callback triggered when the modal needs to be close */
  onClose?: func;
  /** Callback once the modal has been opened event */
  onAfterOpen?: func;
  /** Callback once the modal has been closed event */
  onAfterClose?: func;

  size?: ShirtSizes.DEFAULT;
  /** The z-index of the Takeover content */
  zIndex?: number;
}
