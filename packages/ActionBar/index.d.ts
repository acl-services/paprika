export default ActionBar;

declare function ActionBar(props: ActionBarProps): JSX.Element;
interface ActionBarProps {
  children: node;
}
declare namespace ActionBar {
  function ColumnsArrangement(props: ColumnsArrangementProps): JSX.Element;
  interface ColumnsArrangementProps {
    children: node;

    orderedColumnIds: arrayOf;

    onChangeOrder: func;

    onChangeVisibility: func;

    onHideAll: func;

    onShowAll: func;

    renderTriggerButton?: func;
  }
}
declare namespace ActionBar {
  function Filter(props: FilterProps): JSX.Element;
  interface FilterProps {
    appliedNumber?: number;

    children?: node;

    columns: arrayOf;

    onAddFilter: func;

    onApply: func;

    onCancel?: func;

    onChangeOperator?: func;

    onClose?: func;

    onOpen?: func;

    operator?: logicalFilterOperators.AND | logicalFilterOperators.OR;

    rulesByType?: objectOf;
  }
}
declare namespace ActionBar {
  function Sort(props: SortProps): JSX.Element;
  interface SortProps {
    appliedNumber?: number;

    children?: node;

    columns: arrayOf;

    onAddSort: func;

    onApply: func;

    onCancel?: func;

    onClose?: func;

    onOpen?: func;
  }
}
