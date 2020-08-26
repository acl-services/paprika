export default Collapsible;

declare function Collapsible(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const a11yText: string;
  const children: node;
  const iconAlign: ["left", "right"];
  const iconCollapse: node;
  const iconExpand: node;
  const isCollapsed: bool;
  const isDisabled: bool;
  const hasOnlyIconToggle: bool;
  const label: node;
  const onClick: func;
}
