export default DialogActions;

declare function DialogActions(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const kindConfirm: string;
  const isDisabled: bool;
  const labelCancel: string;
  const labelConfirm: string;
  const labelDecline: string;
  const onCancel: func;
  const onConfirm: func;
  const onDecline: func;
}
