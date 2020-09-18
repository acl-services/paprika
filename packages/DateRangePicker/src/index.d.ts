export default DateRangePicker;

declare function DateRangePicker(props: DateRangePickerProps): JSX.Element;
interface DateRangePickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Selected start date in moment object */
  startDate?: instanceOf;
  /** Selected end date in moment object */
  endDate?: instanceOf;
  /** Callback to fire when user select start or end date */
  onChange: (...args: any[]) => any;

  children?: React.ReactNode;
}
