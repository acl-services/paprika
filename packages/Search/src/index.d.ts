export default Search;

declare function Search(props: SearchProps): JSX.Element;
interface SearchProps {
  [x: string]: any;

  children: instanceOf;

  onChangeSearch?: (...args: any[]) => any;

  onSelected?: (...args: any[]) => any;
}
