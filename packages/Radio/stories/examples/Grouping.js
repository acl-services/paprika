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
  const [checkedStateIndex, setCheckedStateIndex] = React.useState(null);
  const deselectableIndex = index => (checkedStateIndex === index ? null : index);
  const handleClick = index => {
    setCheckedStateIndex(props.canDeselect ? deselectableIndex(index) : index);
  };

  return (
    <RadioStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Radio.Group groupDescription="A group of radio buttons">
        <Radio {...props} onClick={() => handleClick(1)} isChecked={checkedStateIndex === 1}>
          Authentic VHS beard.
        </Radio>
        <Radio {...props} onClick={() => handleClick(2)} isChecked={checkedStateIndex === 2}>
          Authentic VHS beard.
        </Radio>
        <Radio {...props} onClick={() => handleClick(3)} isChecked={checkedStateIndex === 3}>
          Authentic VHS beard.
        </Radio>
      </Radio.Group>
      <Rule />
    </RadioStory>
  );
};

export default () => <ExampleStory {...radioProps()} />;
