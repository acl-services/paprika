import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";

import Pill, { pillColors, severityPillColors } from "../../src/Pill";

const allColors = [...pillColors, ...severityPillColors];

const pillProps = () => ({
  a11yText: text("a11yText", ""),
  children: text("text / children", "Content goes here"),
  pillColor: select("pillColor", allColors, "mediumRisk"),
  size: select("size", ["small", "medium"], "medium"),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Pill Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Pill {...props} />
  </Story>
);

export default () => <ExampleStory {...pillProps()} />;
