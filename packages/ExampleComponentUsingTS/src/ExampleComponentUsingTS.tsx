import React from "react";
import * as sc from "./ExampleComponentUsingTS.styles";

export interface ExampleProps {
  [x: string]: any;
  children: any;
}

function ExampleComponentUsingTS(props: ExampleProps) {
  const { children = null, ...moreProps } = props;

  return (
    <sc.Example data-pka-anchor="test-example" {...moreProps}>
      {children}
    </sc.Example>
  );
}

ExampleComponentUsingTS.displayName = "ExampleComponentUsingTS";
export default ExampleComponentUsingTS;
