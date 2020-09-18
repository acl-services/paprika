export default ListBoxBrowser;

declare function ListBoxBrowser(props: ListBoxBrowserProps): JSX.Element;
interface ListBoxBrowserProps extends React.HTMLAttributes<HTMLElement> {
  /** An array of javascript objects holding the data structure for the ListBoxBrowser. The object shape must have at least a string label property and an array options property in one of the objects. Also can hold any other kind of data for your own use. */
  data: any;
  /** Indicates if the user can select multiple options */
  isMulti?: boolean;
  /** Set the height for the ListBoxBrowser */
  height?: number;
  /** Callback function receiving an array of selected options by the component */
  onChange?: (...args: any[]) => any;
  /** Allows the user to select the parent options */
  isParentSelectable?: boolean;
  /** Content title for the left column */
  rootTitle?: React.ReactNode;
  /** Content title for the right column */
  browserTitle?: React.ReactNode;
  /** You can pass <ListBoxBrowser.OptionSelected /> as a children */
  children?: React.ReactNode;
  /** Indicates if the right column should display a breadcrumb */
  hasBreadcrumb?: boolean;
  /** Set a border red color around the component indicating that has an error */
  hasError?: boolean;
  /** When declaring the array options empty, this will be executed to retrieve the data, useful if you want to do a lazy load. */
  onFetch?: (...args: any[]) => any;
  /** A function that sets an option selected returning true or false you can use to compare your data structure and decide if the option is initially selected or not. */
  defaultSelectedOptions?: (...args: any[]) => any;
  /** A function that sets the initial view for the right columns (Browser) of the ListBoxBrowser the option selected to be the initial view should have options to be valid, by default the ListBoxBrowser picked the first option which has options to be the initial value. */
  defaultSelectedView?: (...args: any[]) => any;
  /** In the case you want to use the ListBoxBrowser with one column you can hide the root column */
  hasLeftColumn?: boolean;
}
declare function CustomListBox(props: CustomListBoxProps): JSX.Element;
interface CustomListBoxProps extends React.HTMLAttributes<HTMLElement> {
  hasOnUp?: boolean;

  id?: string | number;

  isLoading?: boolean;

  onChange: (...args: any[]) => any;

  onClickNavigate: (...args: any[]) => any;

  onUp?: (...args: any[]) => any;

  options: object[];
}
declare function Title(props: TitleProps): JSX.Element;
interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  rootTitle: React.ReactNode;

  browserTitle: React.ReactNode;

  data?: object[];

  browserKey: string | number;

  onClickBreadcrumb: (...args: any[]) => any;

  hasLeftColumn: boolean;
}
