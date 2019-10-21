import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import { CheckboxStory } from "../Checkbox.stories.styles";
import Checkbox from "../../src/Checkbox";

const checkboxProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  isIndeterminate: boolean("isIndeterminate", false),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => {
  const state1 = React.useState(props.value || true);
  const handleChange = state => () => {
    const [, setIsChecked] = state;
    setIsChecked(prevChecked => !prevChecked);
  };
  return (
    <CheckboxStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Checkbox {...props} onChange={handleChange(state1)} isChecked={state1[0]}>
        Authentic VHS beard.
      </Checkbox>
    </CheckboxStory>
  );
};

export default () => <ExampleStory {...checkboxProps()} />;
