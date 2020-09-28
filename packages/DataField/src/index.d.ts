export default DataField;

declare function DataField(props: DataFieldProps): JSX.Element;
interface DataFieldProps {
  [x: string]: any;

  children: React.ReactNode;
}
declare function Numeric(props: NumericProps): JSX.Element;
interface NumericProps {
  [x: string]: any;
  /** The cell value to be localize */
  number: string | number;
  /** Text alignment for the number default is right */
  align?: DataField.types.align.LEFT | DataField.types.align.RIGHT | DataField.types.align.CENTER;
  /** The window.Intl.numberFormat option object https://mzl.la/3iW0ioQ */
  intl?: object;
  /** When passing a currency string as 'EUR' or 'JPY' will display the correct currency symbol, is a short version instead of using the intl prop. */
  currency?: string;
  /** Add a color to the number, accept any kind of html color #F60, rgba(100,100,100, 0.5), etc. */
  color?: string;
  /** Controls if the number should be display with full delimiter or only the decimal separators */
  displayOnlyDecimals?: boolean;
}
