import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import ParagraphExample from "../examples/ParagraphExample";
import DisplayLevelExample from "../examples/DisplayLevelExample";
import IsLightExample from "../examples/IsLightExample";

export default function HeadingLevelsStory() {
  return (
    <Story>
      <ParagraphExample />
      <Rule />
      <DisplayLevelExample />
      <Rule />
      <IsLightExample />
    </Story>
  );
}
