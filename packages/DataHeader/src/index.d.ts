export default DataHeader;

declare function DataHeader(props: DataHeaderProps): JSX.Element;
interface DataHeaderProps {
  [x: string]: any;

  backgroundColor?: string;

  color?: string;

  label: func | string;

  renderActions?: (...args: any[]) => any;

  type?: "text" | "numeric" | "date" | "dateTime" | "time";

  icons?: object;
}
