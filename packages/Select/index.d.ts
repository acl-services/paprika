export default Select;

declare function Select(props: SelectProps): JSX.Element;
interface SelectProps {
  a11yText?: string;

  className?: string;

  children?: node;

  hasError?: boolean;

  isDisabled?: boolean;

  isReadOnly?: boolean;

  placeholder?: string;

  size?: ShirtSizes.DEFAULT;

  value?: string;
}
