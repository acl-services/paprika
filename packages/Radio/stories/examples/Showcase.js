import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import { RadioStory } from "../Radio.stories.styles";
import Radio from "../../src/Radio";

const radioProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  canDeselect: boolean("canDeselect", false),
  a11yLabelledByText: text("a11yLabelledByText", ""),
});

const ExampleStory = props => {
  return (
    <RadioStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Radio.Group
        defaultCheck={check => check.props.value.id === "value 1"}
        onChange={value => {
          action("Radio selection changed to ")(value);
        }}
        {...props}
      >
        <Radio value={{ id: "value 1" }}>Radio 1</Radio>
        <Radio value={{ id: "value 2" }}>Radio 2</Radio>
        <Radio value={{ id: "value 3" }}>Radio 3</Radio>
        <Radio value={{ id: "value 4" }}>Radio 4</Radio>
      </Radio.Group>
      <Rule />
    </RadioStory>
  );
};

export default () => <ExampleStory {...radioProps()} />;
