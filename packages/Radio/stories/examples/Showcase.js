import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Radio from "../../src/Radio";

const radioProps = () => ({
  size: select("size", ["medium", "large"], "medium"),
  isDisabled: boolean("Is Group Disabled", false),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => {
  return (
    <>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Radio.Group
        onChange={activeIndex => {
          action("Radio selection changed to index ")(activeIndex);
        }}
        {...props}
      >
        <Radio defaultIsChecked>Radio 1</Radio>
        <Radio>Radio 2</Radio>
        <Radio>Radio 3</Radio>
        <Radio isDisabled>Radio 4</Radio>
      </Radio.Group>
      <Rule />
    </>
  );
};

export default () => <ExampleStory {...radioProps()} />;
