import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import Spinner from "../../src";

const spinnerProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  caption: text("caption", "Spinning..."),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Spinner Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Spinner {...props} />
  </Story>
);

export default () => <ExampleStory {...spinnerProps()} />;
