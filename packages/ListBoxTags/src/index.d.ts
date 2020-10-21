export default ListBoxTags;

declare function ListBoxTags(props: ListBoxTagsProps): JSX.Element;
interface ListBoxTagsProps {
  [x: string]: any;

  children?: custom;

  onCustomOption?: (...args: any[]) => any;
}
