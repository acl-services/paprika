export default Sortable;

declare function Sortable(props: SortableProps): JSX.Element;
interface SortableProps extends React.HTMLAttributes<HTMLElement> {
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
interface SortableItemProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Indicator to identify the number sequence */
  hasNumbers: boolean;
  /** Numerical representation of an item */
  index: number;
  /** Callback when deleting an item */
  onRemove?: (...args: any[]) => any;
}
