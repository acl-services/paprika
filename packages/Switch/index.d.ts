export default Switch;

declare function Switch(props: SwitchProps): JSX.Element;
interface SwitchProps {
  /** Descriptive a11y text for assistive technologies. Typically required. */
  a11yText?: string;
  /** If click events are allowed to propagate up the DOM tree. */
  canPropagate?: boolean;
  /** If the switch is on. */
  isChecked?: boolean;
  /** If the switch is disabled. */
  isDisabled?: boolean;
  /** Callback to be executed when the switch is toggled on or off. Typically required. */
  onChange?: (...args: any[]) => any;
  /** Size of the switch. */
  size?: ShirtSizes.DEFAULT;
}
