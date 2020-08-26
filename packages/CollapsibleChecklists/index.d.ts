export default CollapsibleChecklists;

declare function CollapsibleChecklists(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const onChange: func;
}

declare function Group(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const isCheckedByDefault: bool;
  const isDisabled: bool;
  const isIndeterminateByDefault: bool;
  const onExpand: func;
  const title: node;
}

declare function Heading(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Item(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const isChecked: bool;
  const isDisabled: bool;
  const onChange: func;
}
