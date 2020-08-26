export default ActionBar;

declare function ActionBar(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
}

declare function ColumnsArrangement(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const orderedColumnIds: arrayOf;
  const onChangeOrder: func;
  const onChangeVisibility: func;
  const onHideAll: func;
  const onShowAll: func;
  const renderTriggerButton: func;
}

declare function Filter(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const appliedNumber: number;
  const children: node;
  const columns: arrayOf;
  const onAddFilter: func;
  const onApply: func;
  const onCancel: func;
  const onChangeOperator: func;
  const onClose: func;
  const onOpen: func;
  const operator: [logicalFilterOperators.AND, logicalFilterOperators.OR];
  const rulesByType: objectOf;
}

declare function Sort(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const appliedNumber: number;
  const children: node;
  const columns: arrayOf;
  const onAddSort: func;
  const onApply: func;
  const onCancel: func;
  const onClose: func;
  const onOpen: func;
}
