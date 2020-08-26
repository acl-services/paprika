export default Table;

declare function Table(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const borderType: ["grid", "none", "horizontal", "vertical"];
  const a11yText: string;
  const children: node;
  const hasZebraStripes: bool;
  const data: arrayOf;
}

declare function ColumnDefinition(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const cell: [string, func];
  const header: [string, func];
}
