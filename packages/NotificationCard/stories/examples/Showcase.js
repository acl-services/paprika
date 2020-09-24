import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";
import Example from "./Example";

const props = () => ({
  align: select("align", ["top", "center"], "center"),
  level: select("level", [1, 2, 3, 4, 5, 6], 6),
  maxWidth: text("maxWidth", "600px"),
});

const ExampleStory = ({ align, level, maxWidth }) => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      NotificationCard Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Example align={align} level={level} maxWidth={maxWidth} />
  </Story>
);

export default () => <ExampleStory {...props()} />;
