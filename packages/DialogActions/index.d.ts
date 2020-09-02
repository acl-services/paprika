export default DialogActions;

declare function DialogActions(props: DialogActionsProps): JSX.Element;
interface DialogActionsProps {
  /** If the primary button is a destructive action. */
  kindConfirm?: string;
  /** If the primary and secondary buttons are disabled. */
  isDisabled?: boolean;
  /** Text for cancel button. */
  labelCancel?: string;
  /** Text for primary action button. */
  labelConfirm?: string;
  /** Text for a secondary generic button. */
  labelDecline?: string;
  /** Function to call when cancel button is clicked. */
  onCancel?: (...args: any[]) => any;
  /** Function to call when primary button is clicked. */
  onConfirm?: (...args: any[]) => any;
  /** Function to call when secondary button is clicked. */
  onDecline?: (...args: any[]) => any;
}
