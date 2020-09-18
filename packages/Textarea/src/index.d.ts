export default Textarea;

declare function Textarea(props: TextareaProps): JSX.Element;
interface TextareaProps extends React.HTMLAttributes<HTMLElement> {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** Indicate if the textarea is expandable */
  canExpand?: boolean;
  /** Sets class name */
  className?: string;
  /** Do not use in conjunction with value prop */
  defaultValue?: string;

  hasError?: boolean;
  /** If the textarea is disabled */
  isDisabled?: boolean;
  /** If the textarea is read-only */
  isReadOnly?: boolean;
  /** Indicates the maximum height of the textarea */
  maxHeight?: string;

  onChange?: (...args: any[]) => any;

  size?: Textarea.types.size.SMALL | Textarea.types.size.MEDIUM | Textarea.types.size.LARGE;
  /** Do not use in conjunction with defaultValue prop */
  value?: string;
}
