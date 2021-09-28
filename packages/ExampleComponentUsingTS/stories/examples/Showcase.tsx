import React from "react";
import { text } from "@storybook/addon-knobs";
// @ts-ignore
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";

import { ExampleProps } from "../../src/ExampleComponentUsingTS";
import ExampleComponentUsingTS from "../../src";

const exampleProps = () => ({
  children: text("content", "some content"),
});

const ExampleStory = (props: ExampleProps) => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Example Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <ExampleComponentUsingTS {...props} />
  </Story>
);

export default () => <ExampleStory {...exampleProps()} />;
