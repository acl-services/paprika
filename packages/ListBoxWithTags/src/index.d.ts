export default ListBoxWithTags;

declare function ListBoxWithTags(props: ListBoxWithTagsProps): JSX.Element;
interface ListBoxWithTagsProps {
  [x: string]: any;

  children: React.ReactNode;

  filter?: (...args: any[]) => any;

  noResultsMessage?: React.ReactNode;

  onChange?: (...args: any[]) => any;

  onCustomOption?: (...args: any[]) => any;

  onRemove?: (...args: any[]) => any;

  regexCustomOption?: instanceOf;

  renderPill?: (...args: any[]) => any;

  selectedOptions?: shape[];
}
