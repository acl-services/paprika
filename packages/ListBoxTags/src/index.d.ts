export default ListBoxTags;

declare function ListBoxTags(props: ListBoxTagsProps): JSX.Element;
interface ListBoxTagsProps {
  [x: string]: any;

  data?: object[];

  isOptionSelected?: (...args: any[]) => any;

  onChange?: (...args: any[]) => any;

  onChangeFilter?: (...args: any[]) => any;

  renderOption?: (...args: any[]) => any;
}
