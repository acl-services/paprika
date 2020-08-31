export default Pill;

declare function Pill(props: PillProps): JSX.Element;
interface PillProps {
  a11yText?: string;

  children: React.ReactNode;

  isDisabled?: boolean;

  onClick?: (...args: any[]) => any;

  pillColor?:
    | "black"
    | "blue"
    | "green"
    | "grey"
    | "orange"
    | "lightBlue"
    | "lightOrange"
    | "noRisk"
    | "lowRisk"
    | "mediumRisk"
    | "highRisk";

  size?: ShirtSizes.LIMITED;
}
