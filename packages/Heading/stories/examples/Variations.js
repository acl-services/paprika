import React from "react";
import ExampleStory from "storybook/components/ExampleStory";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";

import ExternalLink from "./ExternalLink";
import Paragraph from "./Paragraph";
import DisplayLevel from "./DisplayLevel";
import IsLight from "./IsLight";
import Divider from "./Divider";
import UnderLine from "./Underline";

export default function Variations() {
  return (
    <ExampleStory storyName="Variations" tagline="&lt;Heading&gt; at a glance">
      <StoryHeading>Levels</StoryHeading>
      <Paragraph />
      <Gap.Small />
      <StoryHeading level={2}>With DisplayLevel</StoryHeading>
      <DisplayLevel />

      <Gap />

      <StoryHeading>Styles</StoryHeading>
      <IsLight />
      <Gap.Small />
      <Divider />
      <Gap.Small />
      <UnderLine />

      <Gap />

      <StoryHeading>With ExternalLink</StoryHeading>
      <ExternalLink />
    </ExampleStory>
  );
}
