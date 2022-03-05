import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Takeover from "../src";
import TakeoverStory from "./TakeoverStory";

export default {
  title: getStoryName("Takeover"),
  component: Takeover,
};

export const showcase = () => (
  <ExampleStory storyName="Takeover" tagline={ExampleStory.defaultTaglines.showcase}>
    <TakeoverStory>
      <Takeover.Content>
        {repeat(12, key => (
          <p key={key}>Post-ironic asymmetrical small batch coloring book woke pickled authentic.</p>
        ))}
      </Takeover.Content>
    </TakeoverStory>
  </ExampleStory>
);

showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
