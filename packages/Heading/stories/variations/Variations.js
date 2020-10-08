import React from "react";
import { Rule, Story, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import HeadingFocus from "../examples/HeadingFocus";
import HeadingLayouts from "./HeadingLayouts";
import HeadingLevels from "./HeadingLevels";
import HeadingStyles from "./HeadingStyles";

export default function Variations() {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Variations of Headings
      </Heading>
      <Rule />
      <Tagline>Heading with focus</Tagline>
      <Rule />
      <HeadingFocus />

      <Rule />
      <Tagline>Heading Layouts</Tagline>
      <Rule />
      <HeadingLayouts />

      <Rule />
      <Tagline>Heading Levels</Tagline>
      <Rule />
      <HeadingLevels />

      <Rule />
      <Tagline>Heading Styles</Tagline>
      <Rule />
      <HeadingStyles />
    </Story>
  );
}
