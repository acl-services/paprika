export default CollapsibleChecklists;

declare function CollapsibleChecklists(props: CollapsibleChecklistsProps): JSX.Element;
interface CollapsibleChecklistsProps {
  children: node;
  /** Callback triggered when the input state is changed */
  onChange: func;
}
declare function Group(props: GroupProps): JSX.Element;
interface GroupProps {
  /** Probably an array of "Items", but could be a Spinner or anything else */
  children?: node;
  /** If checkbox is checked by default */
  isCheckedByDefault?: boolean;
  /** If CollapsibleChecklists is disabled */
  isDisabled?: boolean;
  /** Sets a visual state whether a checklist has been checked or not */
  isIndeterminateByDefault?: boolean;
  /** Sets if the CollapsibleChecklists is open */
  onExpand?: func;
  /** Indicate the title for the checklist */
  title: node;
}
declare function Heading(props: HeadingProps): JSX.Element;
interface HeadingProps {
  /** Content of the heading */
  children: node;
}
declare function Item(props: ItemProps): JSX.Element;
interface ItemProps {
  children: node;
  /** If the item is checked or not */
  isChecked?: boolean;
  /** If the item is disabled */
  isDisabled?: boolean;
  /** Callback when user checked an item */
  onChange?: func;
}
