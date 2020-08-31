export default Select;

declare function Select(props: SelectProps): JSX.Element;
interface SelectProps {
  a11yText?: string;

  className?: string;

  children?: React.ReactNode;

  hasError?: boolean;

  isDisabled?: boolean;

  isReadOnly?: boolean;

  placeholder?: string;

  size?: ShirtSizes.DEFAULT;

  value?: string;
}
