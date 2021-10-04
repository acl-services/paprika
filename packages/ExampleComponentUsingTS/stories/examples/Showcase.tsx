import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
// eslint-disable-next-line import/no-extraneous-dependencies
import Heading from "@paprika/heading";

import { ExampleProps } from "../../src/ExampleComponentUsingTS";
import ExampleComponentUsingTS from "../../src";

const exampleProps = () => ({
  children: text("content", "some content"),
  requiredProp: text("test prop", "this is required prop"),
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
