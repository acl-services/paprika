export default DataHeader;

declare function DataHeader(props: DataHeaderProps): JSX.Element;
interface DataHeaderProps {
  [x: string]: any;

  renderDropDownMenu?: (...args: any[]) => any;

  type?: "numeric" | "string";

  label: func | string;

  backgroundColor?: string;
}
