export default Sortable;

declare function Sortable(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const hasNumbers: bool;
  const hasZebraStripes: bool;
  const onChange: func;
  const onRemove: func;
}

declare function SortableItem(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const hasNumbers: bool;
  const index: number;
  const onRemove: func;
}
