export default Confirmation;

declare function Confirmation(props: ConfirmationProps): JSX.Element;
interface ConfirmationProps {
  /** Content of the popover confirmation */
  body?: React.ReactNode;
  /** Size of the button */
  buttonSize?: ShirtSizes.DEFAULT;

  children?: React.ReactNode;
  /** Determine the styling of the confirm button */
  confirmButtonType?: Button.Kinds.PRIMARY | Button.Kinds.DESTRUCTIVE;
  /** Label for the confirm button */
  confirmLabel: string;
  /** If the popover is open by default */
  defaultIsOpen?: boolean;
  /** Heading for the popover confirmation */
  heading?: string;
  /** If the confirm button should render in a pending state (with a spinner icon) */
  isPending?: boolean;
  /** Callback when cancel button is clicked */
  onClose?: (...args: any[]) => any;
  /** Callback when confirm button is clicked */
  onConfirm: (...args: any[]) => any;
}
