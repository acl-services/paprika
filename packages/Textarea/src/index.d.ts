export default Textarea;

declare function Textarea(props: TextareaProps): JSX.Element;
interface TextareaProps {
  [x: string]: any;
  /** Provides a non-visible label for this textarea for assistive technologies. */
  a11yText?: string;
  /** If true the height will expand automatically to fit content up to the value of maxHeight. */
  canExpand?: boolean;
  /** Optional Textarea.Container to collect props for root DOM element. */
  children?: React.ReactNode;
  /** Sets the default textarea value for an uncontrolled component. */
  defaultValue?: string;
  /** If true displays a red border around textarea to indicate an error. */
  hasError?: boolean;
  /** If true it makes the textarea disabled. */
  isDisabled?: boolean;
  /** If true it makes the textarea read only. */
  isReadOnly?: boolean;
  /** The maximum height of the textarea. */
  maxHeight?: number | string;
  /** The minimum / default height of the textarea. */
  minHeight?: number | string;
  /** Callback to be executed when the textarea value is changed. Receives the onChange event as an argument. Required when component is controlled. */
  onChange?: (...args: any[]) => any;
  /** The size of the textarea input (font size). */
  size?: Textarea.types.size.SMALL | Textarea.types.size.MEDIUM | Textarea.types.size.LARGE;
  /** The value inside of the textarea input. Defining this prop will make this a controlled component. Do not use in conjunction with defaultValue. */
  value?: string;
}

declare namespace Textarea {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
