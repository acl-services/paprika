export default DataHeader;

declare function DataHeader(props: DataHeaderProps): JSX.Element;
interface DataHeaderProps {
  [x: string]: any;

  renderActions?: (...args: any[]) => any;

  label: func | string;

  backgroundColor?: string;
}
