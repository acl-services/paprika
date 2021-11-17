import React from "react";
import Heading from "../../src";

export default function DividerExample() {
  return (
    <>
      <Heading level={1} hasDivider>
        Heading One with hasDivider
      </Heading>
      <Heading level={2} hasDivider>
        Heading Two with hasDivider
      </Heading>
      <Heading level={3} hasDivider>
        Heading Three with hasDivider
      </Heading>
      <Heading level={4} hasDivider>
        Heading Four with hasDivider
      </Heading>
      <Heading level={5} hasDivider>
        Heading Five with hasDivider
      </Heading>
      <Heading level={6} hasDivider>
        Heading Six with hasDivider
      </Heading>
    </>
  );
}
