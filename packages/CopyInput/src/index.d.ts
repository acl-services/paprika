export default CopyInput;

declare function CopyInput(props: CopyInputProps): JSX.Element;
interface CopyInputProps {
  [x: string]: any;
  /** Used for CopyInput.Input */
  children?: React.ReactNode;
  /** Default value for the input. */
  defaultValue?: string;
}
