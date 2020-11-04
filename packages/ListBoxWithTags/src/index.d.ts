export default ListBoxTags;

declare function ListBoxTags(props: ListBoxTagsProps): JSX.Element;
interface ListBoxTagsProps {
  [x: string]: any;

  children: React.ReactNode;

  filter?: (...args: any[]) => any;

  noResultsMessage?: string;

  onChange?: (...args: any[]) => any;

  onCustomOption?: (...args: any[]) => any;

  onRemove?: (...args: any[]) => any;

  regexCustomOption?: instanceOf;

  selectedOptions?: shape[];
}
