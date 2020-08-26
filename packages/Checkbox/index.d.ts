export default Checkbox;

declare function Checkbox(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const ariaDescribedBy: string;
  const a11yText: string;
  const checkedState: ["checked", "indeterminate", "unchecked"];
  const children: node;
  const isDisabled: bool;
  const onChange: func;
  const size: ShirtSizes.DEFAULT;
  const tabIndex: [number, string];
}
