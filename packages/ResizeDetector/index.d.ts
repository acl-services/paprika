export default ResizeDetector;

declare function ResizeDetector(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const breakpointLarge: number;
  const breakpointSmall: number;
  const children: node;
  const debounceDelay: number;
  const isFullWidth: bool;
  const isFullHeight: bool;
  const onBreak: func;
  const onResize: func;
}
