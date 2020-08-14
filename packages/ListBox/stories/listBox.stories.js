import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { Basic as BasicSingle } from "./examples/single";
import { Basic as BasicMulti } from "./examples/multi";

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
    <h3>Single</h3>
    <BasicSingle />
    <Rule />
    <h3>Multi</h3>
    <BasicMulti />
  </Story>
);

storiesOf(storyName, module).add("Showcase", () => {
  return <Example />;
});
