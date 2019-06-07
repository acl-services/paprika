import React from "react";
import { array, boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Story, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import SelectExample from "./SelectExample";

const selectChildren = () => {
  const label = "children";
  const defaultValue = ["Pepsi", "Coke", "Diet Coke", "Canada Dry"];
  const separator = ", ";
  const options = array(label, defaultValue, separator);

  return options.map(optionLabel => <option value={optionLabel}>{optionLabel}</option>);
};

const selectProps = () => ({
  a11yText: text("a11yText"),
  children: selectChildren(),
  hasError: boolean("hasError", false),
  isDisabled: boolean("isDisabled", false),
  isReadOnly: boolean("isReadOnly", false),
  placeholder: text("placeholder", "This is a default placeholder..."),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <SelectExample {...props} />
  </Story>
);

export default () => <ExampleStory {...selectProps()} />;
