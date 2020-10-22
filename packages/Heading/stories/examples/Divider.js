import React from "react";
import Heading from "../../src";

export default function DividerExample() {
  return (
    <>
      <Heading level={1} hasDivider>
        Heading One
      </Heading>
      <Heading level={2} hasDivider>
        Heading Two
      </Heading>
      <Heading level={3} hasDivider>
        Heading Three
      </Heading>
      <Heading level={4} hasDivider>
        Heading Four
      </Heading>
      <Heading level={5} hasDivider>
        Heading Five
      </Heading>
      <Heading level={6} hasDivider>
        Heading Six
      </Heading>
    </>
  );
}
