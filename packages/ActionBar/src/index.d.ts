export default ActionBar;

declare function ActionBar(props: ActionBarProps): JSX.Element;
interface ActionBarProps {
  [x: string]: any;

  children: React.ReactNode;
}

declare namespace ActionBar {
  function ColumnsArrangement(props: ColumnsArrangementProps): JSX.Element;
  interface ColumnsArrangementProps {
    [x: string]: any;

    children: React.ReactNode;

    orderedColumnIds: string[];

    onChangeOrder: (...args: any[]) => any;

    onChangeVisibility: (...args: any[]) => any;

    onHideAll: (...args: any[]) => any;

    onShowAll: (...args: any[]) => any;

    renderTriggerButton?: (...args: any[]) => any;
  }
}
declare namespace ActionBar {
  function Filter(props: FilterProps): JSX.Element;
  interface FilterProps {
    [x: string]: any;

    appliedNumber?: number;

    children?: React.ReactNode;

    columns: shape[];

    onAddFilter: (...args: any[]) => any;

    onApply: (...args: any[]) => any;

    onCancel?: (...args: any[]) => any;

    onChangeOperator?: (...args: any[]) => any;

    onClose?: (...args: any[]) => any;

    onOpen?: (...args: any[]) => any;

    operator?: Filter.types.operator.AND | Filter.types.operator.OR;

    rulesByType?: objectOf;
  }
}
declare namespace ActionBar {
  function Sort(props: SortProps): JSX.Element;
  interface SortProps {
    [x: string]: any;

    appliedNumber?: number;

    children?: React.ReactNode;

    columns: shape[];

    isAddSortDisabled?: boolean;

    onAddSort: (...args: any[]) => any;

    onApply: (...args: any[]) => any;

    onCancel?: (...args: any[]) => any;

    onClose?: (...args: any[]) => any;

    onOpen?: (...args: any[]) => any;
  }
}

declare namespace Filter {
  namespace types {
    namespace operator {
      const AND: any;
      const OR: any;
    }
  }
}
