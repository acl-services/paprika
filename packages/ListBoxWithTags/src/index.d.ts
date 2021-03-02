export default ListBoxWithTags;

declare function ListBoxWithTags(props: ListBoxWithTagsProps): JSX.Element;
interface ListBoxWithTagsProps {
  [x: string]: any;
  /** When this is true, it will display a message indicating all options are selected on the popover */
  allOptionsAreSelected?: boolean;
  /** Message to display when all options have been selected */
  allOptionsAreSelectedMessage?: string;
  /** Child of type <ListBox.Option />, <ListBox.Divider />, etc */
  children: node[];
  /** Regex that match the input of the user and reports to onAddCustomOption. The default is a basic email regex */
  customOptionRegex?: instanceOf;
  /** filter function for the ListBoxWithTags can be pair with ListBoxWithTags.filter */
  filter?: (...args: any[]) => any;
  /** If ListBox is in an error state */
  hasError?: boolean;
  /** Disables the ListBox if true */
  isDisabled?: boolean;
  /** The ListBox will not allow value to be changed */
  isReadOnly?: boolean;
  /** String message to be display when there are not results */
  noResultsMessage?: React.ReactNode;
  /** Callback whenever the user input a new custom option like some@email.com, pass undefined to ignore this behaviour */
  onAddCustomOption?: (...args: any[]) => any;
  /** Callback whenever the user change a selection on the ListBoxWithTags */
  onChange?: (...args: any[]) => any;
  /** Callback once a tag is remove from the Trigger */
  onRemove?: (...args: any[]) => any;
  /** Render prop to override the default Tag style, see example for it's uses. */
  renderTag?: (...args: any[]) => any;
  /** An array of id that helps the ListBoxWithTags to known what elements are selected */
  selectedOptions?: shape[];
  /** Size of the trigger and options (font size, height, padding, etc). */
  size?: ListBoxWithTags.types.size.MEDIUM | ListBoxWithTags.types.size.LARGE;
  /** Provides an alternative for rendering the Tag label instead of using the default [{label:value}] coming from the og data */
  tagLabelKey?: string;
}

declare namespace ListBoxWithTags {
  namespace types {
    namespace size {
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
