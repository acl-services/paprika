import React from "react";
import { text, number } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import ProgressBar from "../../src";

const progressBarProps = () => ({
  header: text("header", "Preparing your file..."),
  bodyText: text("bodyText", "Control attributes are getting updated. This might take more than 15secs."),
  completed: number("completed", "20"),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      ProgressBar Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <ProgressBar {...props} />
  </Story>
);

export default () => <ExampleStory {...progressBarProps()} />;
