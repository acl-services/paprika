export default Search;

declare function Search(props: SearchProps): JSX.Element;
interface SearchProps {
  [x: string]: any;

  children: instanceOf;

  filter?: (...args: any[]) => any;

  onChangeSearch?: (...args: any[]) => any;

  data: shape[];
}
