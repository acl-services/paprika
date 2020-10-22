import React from "react";
import Heading from "../../src";

export default function UnderlineExample() {
  return (
    <>
      <Heading level={1} hasUnderline>
        Heading One
      </Heading>
      <Heading level={2} hasUnderline>
        Heading Two
      </Heading>
      <Heading level={3} hasUnderline>
        Heading Three
      </Heading>
      <Heading level={4} hasUnderline>
        Heading Four
      </Heading>
      <Heading level={5} hasUnderline>
        Heading Five
      </Heading>
      <Heading level={6} hasUnderline>
        Heading Six
      </Heading>
    </>
  );
}
