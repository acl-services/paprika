import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import { CheckboxStory } from "../Checkbox.stories.styles";
import CheckboxExample from "./CheckboxExample";

const checkboxProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  isIndeterminate: boolean("isIndeterminate", false),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => (
  <CheckboxStory>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <CheckboxExample {...props} />
  </CheckboxStory>
);

export default () => <ExampleStory {...checkboxProps()} />;
