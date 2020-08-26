export default Tabs;

declare function Tabs(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const kind: ["primary", "secondary"];
  const children: node;
  const defaultIndex: number;
  const isDisabled: bool;
}

declare function List(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const a11yText: string;
  const children: node;
  const height: number;
}

declare function Panel(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const isSelected: bool;
}

declare function Panels(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function Tab(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const height: number;
  const href: string;
  const isDisabled: bool;
  const isSelected: bool;
  const onClick: func;
  const onKeyDownArrows: func;
}
