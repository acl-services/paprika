export default Select;

declare function Select(props: SelectProps): JSX.Element;
interface SelectProps {
  [x: string]: any;

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
