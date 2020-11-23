export default ListBoxWithTags;

declare function ListBoxWithTags(props: ListBoxWithTagsProps): JSX.Element;
interface ListBoxWithTagsProps {
  [x: string]: any;
  /** Expect <ListBoxWithTags.Option /> */
  children: React.ReactNode;
  /** filter function for the ListBoxWithTags can be pair with ListBoxWithTags.filter */
  filter?: (...args: any[]) => any;
  /** String message to be display when there are not results */
  noResultsMessage?: React.ReactNode;
  /** Callback whenever the user change a selection on the ListBoxWithTags */
  onChange?: (...args: any[]) => any;
  /** Callback whenever the user input a new custom option like some@email.com, pass undefined to ignore this behaviour */
  onCustomOption?: (...args: any[]) => any;
  /** Callback once a pill is remove from the Trigger */
  onRemove?: (...args: any[]) => any;
  /** Regex that match the input of the user and reports to onCustomOption. The default is a basic email regex */
  regexCustomOption?: instanceOf;
  /** Render prop to override the default Pill style, see example for it's uses. */
  renderPill?: (...args: any[]) => any;
  /** An array of id that helps the ListBoxWithTags to known what elements are selected */
  selectedOptions?: shape[];
}
