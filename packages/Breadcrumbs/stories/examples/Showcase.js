import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import Example from "./Example";

const ExampleStory = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Breadcrumbs Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Example />
  </Story>
);

export default () => <ExampleStory />;
