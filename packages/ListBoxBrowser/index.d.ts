export default ListBoxBrowser;

declare function ListBoxBrowser(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const data: any;
  const isMulti: bool;
  const height: number;
  const onChange: func;
  const isParentSelectable: bool;
  const rootTitle: node;
  const browserTitle: node;
  const children: node;
  const hasBreadcrumb: bool;
  const hasError: bool;
  const onFetch: func;
  const defaultSelectedOptions: func;
  const defaultSelectedView: func;
  const hasLeftColumn: bool;
}

declare function CustomListBox(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const hasOnUp: bool;
  const id: [string, number];
  const isLoading: bool;
  const onChange: func;
  const onClickNavigate: func;
  const onUp: func;
  const options: arrayOf;
}

declare function Title(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const rootTitle: node;
  const browserTitle: node;
  const data: arrayOf;
  const browserKey: [string, number];
  const onClickBreadcrumb: func;
  const hasLeftColumn: bool;
}
