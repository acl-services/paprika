export default Overlay;

declare function Overlay(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const backdropClassName: string;
  const children: func;
  const container: instanceOf;
  const focusLockOptions: shape;
  const hasBackdrop: bool;
  const isOpen: bool;
  const onClose: func;
  const onAfterOpen: func;
  const onAfterClose: func;
  const zIndex: number;
}
