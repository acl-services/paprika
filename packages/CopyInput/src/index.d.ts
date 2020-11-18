export default CopyInput;

declare function CopyInput(props: CopyInputProps): JSX.Element;
interface CopyInputProps {
  [x: string]: any;
  /** Default value for the input. */
  defaultValue?: string;
}
