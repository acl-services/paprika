export default Sortable;

declare function Sortable(props: SortableProps): JSX.Element;
interface SortableProps {
  children?: node;
  /** Indicator to identify the number sequence */
  hasNumbers?: boolean;
  /** Add a background-color to all even rows */
  hasZebraStripes?: boolean;
  /** Callback when sorting */
  onChange: func;
  /** Callback when deleting an item */
  onRemove?: func;
}
declare function SortableItem(props: SortableItemProps): JSX.Element;
interface SortableItemProps {
  children: node;
  /** Indicator to identify the number sequence */
  hasNumbers: boolean;
  /** Numerical representation of an item */
  index: number;
  /** Callback when deleting an item */
  onRemove?: func;
}
