export default Pill;

declare function Pill(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const a11yText: string;
  const children: node;
  const isDisabled: bool;
  const onClick: func;
  const pillColor: [
    "black",
    "blue",
    "green",
    "grey",
    "orange",
    "lightBlue",
    "lightOrange",
    "noRisk",
    "lowRisk",
    "mediumRisk",
    "highRisk"
  ];
  const size: ShirtSizes.LIMITED;
}
