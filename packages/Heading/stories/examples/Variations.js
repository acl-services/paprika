import React from "react";
import { Rule, Story, Tagline } from "storybook/assets/styles/common.styles";
import ExternalLinkExample from "./ExternalLinkExample";
import SetWidthExample from "./SetWidthExample";
import ParagraphExample from "./ParagraphExample";
import DisplayLevelExample from "./DisplayLevelExample";
import IsLightExample from "./IsLightExample";
import DividerExample from "./DividerExample";
import UnderLineExample from "./UnderlineExample";
import Heading from "../../src/Heading";

export default function Variations() {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Variations of Headings
      </Heading>
      <Rule />
      <Tagline>Components</Tagline>
      <Rule />
      <ExternalLinkExample />
      <Rule />
      <Tagline>Heading Levels</Tagline>
      <Rule />
      <ParagraphExample />
      <Rule />
      <DisplayLevelExample />
      <Rule />
      <Tagline>Heading Styles</Tagline>
      <Rule />
      <SetWidthExample />
      <Rule />
      <IsLightExample />
      <Rule />
      <DividerExample />
      <Rule />
      <UnderLineExample />
    </Story>
  );
}
