export default SidePanel;

declare function SidePanel(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const a11yText: string;
  const children: node;
  const getPushContentElement: func;
  const groupOffsetY: number;
  const isCompact: bool;
  const isInline: bool;
  const isOpen: bool;
  const isSlideFromLeft: bool;
  const kind: ["default", "child"];
  const offsetY: number;
  const onAfterClose: func;
  const onAfterOpen: func;
  const onClose: func;
  const width: [string, number];
  const zIndex: number;
}
