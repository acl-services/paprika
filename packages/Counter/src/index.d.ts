export default Counter;

declare function Counter(props: CounterProps): JSX.Element;
interface CounterProps {
  [x: string]: any;
  /** Background color of the counter. */
  color?: Counter.types.color.GREY | Counter.types.color.BLUE | Counter.types.color.RED;
  /** If the counter should display a red dot on the top right corner. Normally used to indicate when there are new items. */
  hasIndicator?: boolean;
  /** The number displayed inside the counter. */
  quantity: number;
  /** Size of counter. It can be small or medium. Default is medium. */
  size?: Counter.types.size.SMALL | Counter.types.size.MEDIUM;
  /** When quantity exceeds threshold, it will display "(Threshold)+" inside the counter. Default is 99. */
  threshold?: number;
}

declare namespace Counter {
  namespace types {
    namespace color {
      const GREY: any;
      const BLUE: any;
      const RED: any;
    }
  }
}
declare namespace Counter {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
    }
  }
}
