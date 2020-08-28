export default Textarea;

declare function Textarea(props: TextareaProps): JSX.Element;
interface TextareaProps {
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

  onChange?: func;

  size?: ShirtSizes.DEFAULT;
  /** Do not use in conjunction with defaultValue prop */
  value?: string;
}
