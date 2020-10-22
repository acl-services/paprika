import React from "react";
import { Rule, Story, Tagline } from "storybook/assets/styles/common.styles";
import { HeadingStory } from "../storyHelpers";
import SetWidth from "./SetWidth";
import Paragraph from "./Paragraph";
import DisplayLevel from "./DisplayLevel";
import IsLight from "./IsLight";
import Divider from "./Divider";
import UnderLine from "./Underline";
import Heading from "../../src/Heading";

export default function Variations() {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Variations of &lt;Heading&gt;
      </Heading>
      <Rule />
      <Tagline>Heading Levels</Tagline>
      <Rule />
      <HeadingStory>
        <Paragraph />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <DisplayLevel />
      </HeadingStory>
      <Rule />
      <Tagline>Heading Styles</Tagline>
      <Rule />
      <HeadingStory>
        <IsLight />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <Divider />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <UnderLine />
      </HeadingStory>
      <Rule />
      <HeadingStory>
        <SetWidth />
      </HeadingStory>
    </Story>
  );
}
