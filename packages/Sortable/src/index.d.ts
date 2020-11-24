export default Sortable;

declare function Sortable(props: SortableProps): JSX.Element;
interface SortableProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** Indicator to identify the number sequence */
  hasNumbers?: boolean;
  /** Add a background-color to all even rows */
  hasZebraStripes?: boolean;
  /** Callback when sorting */
  onChange: (...args: any[]) => any;
  /** Callback when deleting an item */
  onRemove?: (...args: any[]) => any;
}
declare function SortableItem(props: SortableItemProps): JSX.Element;
interface SortableItemProps {
  [x: string]: any;

  children: React.ReactNode;
  /** Handle element, default is a handle icon */
  handleElement?: React.ReactNode;
  /** Indicator to identify the number sequence */
  hasNumbers: boolean;
  /** Numerical representation of an item */
  index: number;
  /** If drag action should be disabled on an item */
  isDragDisabled?: boolean;
  /** Callback when deleting an item */
  onRemove?: (...args: any[]) => any;
}
