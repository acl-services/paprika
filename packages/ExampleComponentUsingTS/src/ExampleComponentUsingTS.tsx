import React from "react";
import * as sc from "./ExampleComponentUsingTS.styles";

export interface ExampleProps {
  [x: string]: any;
  /** Body content of this component. */
  children?: any;
  /** This is a required prop */
  requiredProp: string;
  /** This is a optional prop */
  optionalProp?: string;
}

function ExampleComponentUsingTS(props: ExampleProps) {
  const { children, requiredProp, optionalProp = "placeholder", ...moreProps } = props;

  return (
    <sc.Example data-pka-anchor="test-example" {...moreProps}>
      requiredProp: {requiredProp}
      optionalProp: {optionalProp}
      {children}
    </sc.Example>
  );
}

ExampleComponentUsingTS.displayName = "ExampleComponentUsingTS";
export default ExampleComponentUsingTS;
