export default ListBoxTags;

declare function ListBoxTags(props: ListBoxTagsProps): JSX.Element;
interface ListBoxTagsProps {
  [x: string]: any;

  children: React.ReactNode;

  noResultsMessage?: string;

  onCustomOption?: (...args: any[]) => any;

  regexCustomOption?: instanceOf;
}
