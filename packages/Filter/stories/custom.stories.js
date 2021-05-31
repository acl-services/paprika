import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import CustomApp from "./Custom";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const Custom = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Filter (with custom filter)
    </Heading>
    <Tagline>
      You can render a custom filter &quot;value&quot; and/or use a custom list of &quot;comparators&quot;:
    </Tagline>
    <Rule />

    <CustomApp />
  </Story>
);
