export default DataHeader;

declare function DataHeader(props: DataHeaderProps): JSX.Element;
interface DataHeaderProps {
  [x: string]: any;

  backgroundColor?: string;

  color?: string;

  label: func | string;

  renderActions?: (...args: any[]) => any;

  type?: types.type.TEXT | types.type.NUMERIC | types.type.DATE | types.type.DATE_TIME | types.type.TIME;

  icons?: object;
}
