export default DatePicker;

declare function DatePicker(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const children: node;
  const dateFormat: string;
  const date: instanceOf;
  const humanFormat: string;
  const id: string;
  const isDisabled: bool;
  const isReadOnly: bool;
  const onChange: func;
  const onError: func;
  const hasError: bool;
}
