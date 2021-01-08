export default ListBoxWithTags;

declare function ListBoxWithTags(props: ListBoxWithTagsProps): JSX.Element;
interface ListBoxWithTagsProps {
  [x: string]: any;
  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children: node[];
  /** filter function for the ListBoxWithTags can be pair with ListBoxWithTags.filter */
  filter?: (...args: any[]) => any;
  /** String message to be display when there are not results */
  noResultsMessage?: React.ReactNode;
  /** Callback whenever the user change a selection on the ListBoxWithTags */
  onChange?: (...args: any[]) => any;
  /** Callback whenever the user input a new custom option like some@email.com, pass undefined to ignore this behaviour */
  onAddCustomOption?: (...args: any[]) => any;
  /** Callback once a pill is remove from the Trigger */
  onRemove?: (...args: any[]) => any;
  /** Regex that match the input of the user and reports to onAddCustomOption. The default is a basic email regex */
  customOptionRegex?: instanceOf;
  /** Render prop to override the default Pill style, see example for it's uses. */
  renderPill?: (...args: any[]) => any;
  /** An array of id that helps the ListBoxWithTags to known what elements are selected */
  selectedOptions?: shape[];
  /** Provides an alternative for rendering the Pill label instead of using the default [{label:value}] coming from the og data */
  pillLabelKey?: string;
  /** When this is true, it will display a message indicating all options are selected on the popover */
  allOptionsAreSelected?: boolean;
  /** Message to display when all options have been selected */
  allOptionsAreSelectedMessage?: string;
}
