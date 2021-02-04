export default Tag;

declare function Tag(props: TagProps): JSX.Element;
interface TagProps {
  [x: string]: any;

  onRemove: (...args: any[]) => any;

  children: React.ReactNode;

  size?: "medium" | "large";
}
