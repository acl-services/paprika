export default Counter;

declare function Counter(props: CounterProps): JSX.Element;
interface CounterProps {
  /** Background color of the counter. */
  color?: "grey" | "blue" | "red";
  /** If the counter should display a red dot on the top right corner. Normally used to indicate when there are new items. */
  hasIndicator?: boolean;
  /** The number displayed inside the counter. */
  quantity: number;
  /** Size of counter. It can be small or medium. Default is medium. */
  size?: ShirtSizes.LIMITED;
  /** When quantity exceeds threshold, it will display "(Threshold)+" inside the counter. Default is 99. */
  threshold?: number;
}
