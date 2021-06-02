import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import HooksApp from "./Hooks";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const Hooks = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Filter (with hooks)
    </Heading>
    <Tagline>With hooks, filters are managed (when they are created/deleted/modified) internally.</Tagline>
    <Rule />

    <HooksApp />
  </Story>
);
