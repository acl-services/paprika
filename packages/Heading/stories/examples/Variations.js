import React from "react";
import { Rule, Story, Tagline } from "storybook/assets/styles/common.styles";
import { HeadingStory } from "../storyHelpers";
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
      <Tagline>Heading Levels</Tagline>
      <Rule />
      <HeadingStory>
        <ParagraphExample />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <DisplayLevelExample />
      </HeadingStory>
      <Rule />
      <Tagline>Heading Styles</Tagline>
      <Rule />
      <HeadingStory>
        <IsLightExample />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <DividerExample />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <UnderLineExample />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <SetWidthExample />
      </HeadingStory>
    </Story>
  );
}
