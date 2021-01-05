export default Search;

declare function Search(props: SearchProps): JSX.Element;
interface SearchProps {
  [x: string]: any;

  children: React.ReactNode;

  onChangeSearch?: (...args: any[]) => any;

  onSelected?: (...args: any[]) => any;
}
