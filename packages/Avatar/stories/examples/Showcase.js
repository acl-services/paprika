import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading/lib/Heading";

import Avatar from "../../src";

const avatarProps = () => ({
  children: text("content", "A"),
  size: select("size", ["small", "medium"], "medium"),
  backgroundColor: text("backgroundColor", "#d1cbc2"),
  color: text("color", "#3f3d3c"),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Avatar Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Avatar {...props} />
  </Story>
);

export default () => <ExampleStory {...avatarProps()} />;
