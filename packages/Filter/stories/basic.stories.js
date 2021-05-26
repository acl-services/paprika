import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import BasicApp from "./Basic";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const Basic = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Filter (basic)
    </Heading>
    <Tagline>
      Without hooks, you would have to manage filters yourself (when they are created/deleted/modified).
    </Tagline>
    <Rule />

    <BasicApp />
  </Story>
);
