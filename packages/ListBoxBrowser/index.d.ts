export default ListBoxBrowser;

declare function ListBoxBrowser(props: ListBoxBrowserProps): JSX.Element;
interface ListBoxBrowserProps {
  /** An array of javascript objects holding the data structure for the ListBoxBrowser. The object shape must have at least a string label property and an array options property in one of the objects. Also can hold any other kind of data for your own use. */
  data: any;
  /** Indicates if the user can select multiple options */
  isMulti?: boolean;
  /** Set the height for the ListBoxBrowser */
  height?: number;
  /** Callback function receiving an array of selected options by the component */
  onChange?: func;
  /** Allows the user to select the parent options */
  isParentSelectable?: boolean;
  /** Content title for the left column */
  rootTitle?: node;
  /** Content title for the right column */
  browserTitle?: node;
  /** You can pass <ListBoxBrowser.OptionSelected /> as a children */
  children?: node;
  /** Indicates if the right column should display a breadcrumb */
  hasBreadcrumb?: boolean;
  /** Set a border red color around the component indicating that has an error */
  hasError?: boolean;
  /** When declaring the array options empty, this will be executed to retrieve the data, useful if you want to do a lazy load. */
  onFetch?: func;
  /** A function that sets an option selected returning true or false you can use to compare your data structure and decide if the option is initially selected or not. */
  defaultSelectedOptions?: func;
  /** A function that sets the initial view for the right columns (Browser) of the ListBoxBrowser the option selected to be the initial view should have options to be valid, by default the ListBoxBrowser picked the first option which has options to be the initial value. */
  defaultSelectedView?: func;
  /** In the case you want to use the ListBoxBrowser with one column you can hide the root column */
  hasLeftColumn?: boolean;
}
declare function CustomListBox(props: CustomListBoxProps): JSX.Element;
interface CustomListBoxProps {
  hasOnUp?: boolean;

  id?: string | number;

  isLoading?: boolean;

  onChange: func;

  onClickNavigate: func;

  onUp?: func;

  options: arrayOf;
}
declare function Title(props: TitleProps): JSX.Element;
interface TitleProps {
  rootTitle: node;

  browserTitle: node;

  data?: arrayOf;

  browserKey: string | number;

  onClickBreadcrumb: func;

  hasLeftColumn: boolean;
}
