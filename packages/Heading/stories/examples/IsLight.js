import React from "react";
import Heading from "../../src/Heading";

export default function IsLightExample() {
  return (
    <>
      <Heading level={1} isLight>
        Heading One with isLight
      </Heading>
      <Heading level={2} isLight>
        Heading Two with isLight
      </Heading>
      <Heading level={3} isLight>
        Heading Three with isLight
      </Heading>
      <Heading level={4} isLight>
        Heading Four with isLight
      </Heading>
      <Heading level={5} isLight>
        Heading Five with isLight
      </Heading>
      <Heading level={6} isLight>
        Heading Six with isLight
      </Heading>
    </>
  );
}
