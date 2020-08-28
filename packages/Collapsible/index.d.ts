export default Collapsible;

declare function Collapsible(props: CollapsibleProps): JSX.Element;
interface CollapsibleProps {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** Body content of the collapsible. */
  children?: node;
  /** Set's icon alignment left or right. */
  iconAlign?: "left" | "right";
  /** Sets RightArrowIcon if true. */
  iconCollapse?: node;
  /** Sets DownArrowIcon if true. */
  iconExpand?: node;
  /** State of the collapsible. */
  isCollapsed?: boolean;
  /** If the collapsible is disabled. */
  isDisabled?: boolean;

  hasOnlyIconToggle?: boolean;
  /** Sets the label that will display in the collapsible */
  label: node;
  /** Callback to be executed when the button is clicked or activated by keyboard. */
  onClick?: func;
}
