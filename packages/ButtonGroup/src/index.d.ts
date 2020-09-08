export default ButtonGroup;

declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
interface ButtonGroupProps {
  /** The toggle buttons in the group. */
  children?: React.ReactNode;
  /** To show the icons used for selected / not selected. */
  hasIcons?: boolean;
  /** If the entire button group is disabled. */
  isDisabled?: boolean;
  /** If the width of the button group should stretch to fit its parent container (100%). */
  isFullWidth?: boolean;
  /** If multiple simultaneous selections are allowed. */
  isMulti?: boolean;
  /** If it will be rendered as a button element. If false, a span will be rendered via an accessible RawButton. */
  isSemantic?: boolean;
  /** Callback to be executed when any button item is clicked or activated by keyboard. It will return an array of the selected items' "value" properties. */
  onChange?: (...args: any[]) => any;
  /** Size of the buttons (height, font size, etc). */
  size?: ButtonGroup.types.size.SMALL | ButtonGroup.types.size.MEDIUM | ButtonGroup.types.size.LARGE;
}
declare namespace ButtonGroup {
  function Item(props: ItemProps): JSX.Element;
  interface ItemProps {
    /** Content label of the button to be displayed. */
    children?: React.ReactNode;
    /** If the item is active or on selected state */
    defaultIsActive?: boolean;
    /** Unique key to represent the selected value. */
    value: string | number;
  }
}
