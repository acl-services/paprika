export default Filter;

declare function Filter(props: FilterProps): JSX.Element;
interface FilterProps {
  [x: string]: any;

  numberApplied?: number;

  children?: React.ReactNode;

  columns: shape[];

  data?: shape[];

  onAddFilter: (...args: any[]) => any;

  onApply: (...args: any[]) => any;

  onCancel?: (...args: any[]) => any;

  onChangeOperator?: (...args: any[]) => any;

  onClear?: (...args: any[]) => any;

  operator?: Filter.operator.AND | Filter.operator.OR;

  rulesByType?: objectOf;

  zIndex?: number;
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
