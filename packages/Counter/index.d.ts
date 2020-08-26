export default Counter;

declare function Counter(props: any): JSX.Element;
declare namespace propTypes {
  export {};
  const color: ["grey", "blue", "red"];
  const hasIndicator: bool;
  const quantity: number;
  const size: ShirtSizes.LIMITED;
  const threshold: number;
}
