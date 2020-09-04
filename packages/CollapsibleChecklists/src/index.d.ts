export default CollapsibleChecklists;

declare function CollapsibleChecklists(props: CollapsibleChecklistsProps): JSX.Element;
interface CollapsibleChecklistsProps {
  children: React.ReactNode;
  /** Callback triggered when the input state is changed */
  onChange: (...args: any[]) => any;
}
declare function Group(props: GroupProps): JSX.Element;
interface GroupProps {
  /** Probably an array of "Items", but could be a Spinner or anything else */
  children?: React.ReactNode;
  /** If checkbox is checked by default */
  isCheckedByDefault?: boolean;
  /** If CollapsibleChecklists is disabled */
  isDisabled?: boolean;
  /** Sets a visual state whether a checklist has been checked or not */
  isIndeterminateByDefault?: boolean;
  /** Sets if the CollapsibleChecklists is open */
  onExpand?: (...args: any[]) => any;
  /** Indicate the title for the checklist */
  title: React.ReactNode;
}
declare function Heading(props: HeadingProps): JSX.Element;
interface HeadingProps {
  /** Content of the heading */
  children: React.ReactNode;
}
declare function Item(props: ItemProps): JSX.Element;
interface ItemProps {
  children: React.ReactNode;
  /** If the item is checked or not */
  isChecked?: boolean;
  /** If the item is disabled */
  isDisabled?: boolean;
  /** Callback when user checked an item */
  onChange?: (...args: any[]) => any;
}
