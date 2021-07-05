export default CopyInput;

declare function CopyInput(props: CopyInputProps): JSX.Element;
interface CopyInputProps {
  [x: string]: any;
  /** Used for CopyInput.Input */
  children?: React.ReactNode;
  /** Is the input read-only. */
  isReadOnly?: boolean;
  /** If the value will be rendered in an Input component or hidden */
  hasInputContainer?: boolean;
  /** If a plain text version of the value will be rendered */
  hasValueContainer?: boolean;
  /** Default value for the input */
  value?: string;
}
