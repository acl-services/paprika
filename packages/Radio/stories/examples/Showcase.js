import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import { RadioStory } from "../Radio.stories.styles";
import Radio from "../../src/Radio";

const radioProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  isChecked: boolean("isChecked", false),
  canDeselect: boolean("canDeselect", false),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => {
  const { isChecked, canDeselect } = props;
  const [isCheckedState, setIsCheckedState] = React.useState(isChecked);
  const handleClick = e => {
    e.preventDefault();
    setIsCheckedState(canDeselect ? !isCheckedState : true);
  };

  return (
    <RadioStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Radio {...props} onClick={handleClick} isChecked={isCheckedState}>
        Authentic VHS beard.
      </Radio>
      <Rule />
    </RadioStory>
  );
};

export default () => <ExampleStory {...radioProps()} />;
