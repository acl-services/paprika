import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import TakeoverStory from "./TakeoverStory";
import Takeover from "../src";

const storyName = getStoryName("Takeover");

export default {
  title: `${storyName}/Backyard/Tests/Screener`,
  id: "takeover-tests",
  component: Takeover,
};

export const focusInput = () => (
  <TakeoverStory>
    <Takeover.Content>
      <p>With input auto focus</p>
      <input type="text" data-autofocus />
    </Takeover.Content>
  </TakeoverStory>
);

focusInput.story = {
  name: "focus lock content input",
  parameters: testStoryParameters,
};

export const focusDisable = () => (
  <TakeoverStory>
    <Takeover.FocusLock autoFocus={false} />
    <Takeover.Content>
      <p>autofocus disabled</p>
    </Takeover.Content>
  </TakeoverStory>
);

focusDisable.story = {
  name: "focus lock disabled",
  parameters: testStoryParameters,
};
