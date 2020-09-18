export default ActionBar;

declare function ActionBar(props: ActionBarProps): JSX.Element;
interface ActionBarProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}
declare namespace ActionBar {
  function ColumnsArrangement(props: ColumnsArrangementProps): JSX.Element;
  interface ColumnsArrangementProps extends React.HTMLAttributes<HTMLElement> {
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
  interface FilterProps extends React.HTMLAttributes<HTMLElement> {
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
  interface SortProps extends React.HTMLAttributes<HTMLElement> {
    appliedNumber?: number;

    children?: React.ReactNode;

    columns: shape[];

    onAddSort: (...args: any[]) => any;

    onApply: (...args: any[]) => any;

    onCancel?: (...args: any[]) => any;

    onClose?: (...args: any[]) => any;

    onOpen?: (...args: any[]) => any;
  }
}
