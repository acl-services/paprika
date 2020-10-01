export default Pill;

declare function Pill(props: PillProps): JSX.Element;
interface PillProps {
  [x: string]: any;

  a11yText?: string;

  children: React.ReactNode;

  isDisabled?: boolean;

  onClick?: (...args: any[]) => any;

  pillColor?:
    | Pill.types.color.BLACK
    | Pill.types.color.BLUE
    | Pill.types.color.GREEN
    | Pill.types.color.GREY
    | Pill.types.color.ORANGE
    | Pill.types.color.LIGHT_BLUE
    | Pill.types.color.LIGHT_ORANGE
    | Pill.types.severity.NO_RISK
    | Pill.types.severity.LOW_RISK
    | Pill.types.severity.MEDIUM_RISK
    | Pill.types.severity.HIGH_RISK;

  size?: Pill.types.size.SMALL | Pill.types.size.MEDIUM;
}

declare namespace Pill {
  namespace types {
    namespace color {
      const BLACK: any;
      const BLUE: any;
      const GREEN: any;
      const GREY: any;
      const ORANGE: any;
      const LIGHT_BLUE: any;
      const LIGHT_ORANGE: any;
      const severity: any;
      const NO_RISK: any;
      const LOW_RISK: any;
      const MEDIUM_RISK: any;
      const HIGH_RISK: any;
    }
  }
}
declare namespace Pill {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
    }
  }
}
