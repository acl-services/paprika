export default Pill;

declare function Pill(props: PillProps): JSX.Element;
interface PillProps {
  a11yText?: string;

  children: node;

  isDisabled?: boolean;

  onClick?: func;

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
