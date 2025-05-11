export default Sort;

declare function Sort(props: SortProps): JSX.Element;
interface SortProps {
  [x: string]: any;

  numberApplied?: number;

  children?: React.ReactNode;

  columns: shape[];

  data?: shape[];

  onAddSort: (...args: any[]) => any;

  onApply: (...args: any[]) => any;

  onCancel?: (...args: any[]) => any;

  onReset?: (...args: any[]) => any;

  zIndex?: number;

  isAddSortDisabled?: boolean;
}
declare function Item(props: ItemProps): JSX.Element;
interface ItemProps {
  [x: string]: any;

  columnId: string;

  id?: string | number;

  index: number;

  onChangeFilter: (...args: any[]) => any;

  onDeleteFilter: (...args: any[]) => any;

  renderValueField?: (...args: any[]) => any;

  rule: string;

  value: string | bool;
}
