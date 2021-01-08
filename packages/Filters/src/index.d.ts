export default Filters;

declare function Filters(props: FiltersProps): JSX.Element;
interface FiltersProps {
  [x: string]: any;

  appliedNumber?: number;

  children?: React.ReactNode;

  columns: shape[];

  data?: shape[];

  onAddFilter: (...args: any[]) => any;

  onApply: (...args: any[]) => any;

  onCancel?: (...args: any[]) => any;

  onChangeOperator?: (...args: any[]) => any;

  onClear?: (...args: any[]) => any;

  operator?: Filters.types.operator.AND | Filters.types.operator.OR;

  rulesByType?: objectOf;
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

declare namespace Filters {
  namespace types {
    namespace operator {
      const AND: any;
      const OR: any;
    }
  }
}
