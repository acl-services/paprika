import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

const Example = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;ListBox /&gt;</code>
    </Heading>
    <Tagline>
      <b>Showcase</b> – a stubby little story
    </Tagline>
    <Rule />
    <ListBox />
  </Story>
);

storiesOf(storyName, module).add("Showcase", () => {
  return <Example />;
});
