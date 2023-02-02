export default CopyInput;

declare function CopyInput(props: CopyInputProps): JSX.Element;
interface CopyInputProps {
  [x: string]: any;
  /** Called after the button is clicked, and the copied value is passed in */
  alterCopiedText?: (...args: any[]) => any;
  /** Used for CopyInput.Input */
  children?: React.ReactNode;
  /** The text to show in the tooltip when the user presses the "copy" button */
  clickedText?: string;
  /** The text to show in the tooltip when the user hovers over the "copy" button */
  hoverText?: string;
  /** Is the input read-only. */
  isReadOnly?: boolean;
  /** If the value will be rendered in an Input component or hidden */
  hasInputContainer?: boolean;
  /** If a plain text version of the value will be rendered */
  hasValueContainer?: boolean;
  /** Default value for the input */
  value?: string;
}
