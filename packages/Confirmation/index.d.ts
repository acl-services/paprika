export default Confirmation;

declare function Confirmation(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const body: node;
  const buttonSize: ShirtSizes.DEFAULT;
  const children: node;
  const confirmButtonType: [Button.Kinds.PRIMARY, Button.Kinds.DESTRUCTIVE];
  const confirmLabel: string;
  const defaultIsOpen: bool;
  const heading: string;
  const isPending: bool;
  const onClose: func;
  const onConfirm: func;
}
