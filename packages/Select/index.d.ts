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

  size?: Select.types.size.SMALL | Select.types.size.MEDIUM | Select.types.size.LARGE;

  value?: string;
}
