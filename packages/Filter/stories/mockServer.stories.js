import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import MockServerApp from "./MockServer";

const storyName = getStoryName("Filter");

export default {
  title: storyName,
};

export const MockServer = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Filter (with mock server)
    </Heading>
    <Tagline>This example uses a mock server to load filtered data.</Tagline>
    <Rule />

    <MockServerApp />
  </Story>
);
