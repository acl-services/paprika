export default Radio;

declare function Radio(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const a11yText: string;
  const ariaDescribedBy: string;
  const canDeselect: bool;
  const children: node;
  const isChecked: bool;
  const isDisabled: bool;
  const defaultIsChecked: bool;
  const name: string;
  const onClick: custom;
  const size: ShirtSizes.DEFAULT;
  const tabIndex: [number, string];
  const value: string;
}

declare function Group(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const a11yText: string;
  const canDeselect: bool;
  const children: node;
  const isDisabled: bool;
  const onChange: func;
  const size: ShirtSizes.DEFAULT;
}
