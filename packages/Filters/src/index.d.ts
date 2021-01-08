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

  onOpen?: (...args: any[]) => any;

  operator?: Filters.types.operator.AND | Filters.types.operator.OR;

  rulesByType?: objectOf;
}

declare namespace Filters {
  namespace types {
    namespace operator {
      const AND: any;
      const OR: any;
    }
  }
}
