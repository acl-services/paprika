export default Pill;

declare function Pill(props: PillProps): JSX.Element;
interface PillProps {
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
