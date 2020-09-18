export default Collapsible;

declare function Collapsible(props: CollapsibleProps): JSX.Element;
interface CollapsibleProps extends React.HTMLAttributes<HTMLElement> {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText?: string;
  /** Body content of the collapsible. */
  children?: React.ReactNode;
  /** Set's icon alignment left or right. */
  iconAlign?: "left" | "right";
  /** Sets RightArrowIcon if true. */
  iconCollapse?: React.ReactNode;
  /** Sets DownArrowIcon if true. */
  iconExpand?: React.ReactNode;
  /** State of the collapsible. */
  isCollapsed?: boolean;
  /** If the collapsible is disabled. */
  isDisabled?: boolean;

  hasOnlyIconToggle?: boolean;
  /** Sets the label that will display in the collapsible */
  label: React.ReactNode;
  /** Callback to be executed when the button is clicked or activated by keyboard. */
  onClick?: (...args: any[]) => any;
}
