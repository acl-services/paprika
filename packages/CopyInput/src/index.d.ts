export default CopyInput;

declare function CopyInput(props: CopyInputProps): JSX.Element;
interface CopyInputProps {
  [x: string]: any;
  /** Used for CopyInput.Input */
  children?: React.ReactNode;
  /** Is the input read-only. */
  isReadOnly?: boolean;
  /** Default value for the input */
  value?: string;
}
