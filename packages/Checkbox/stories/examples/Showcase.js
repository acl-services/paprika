import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import Button from "@paprika/button";
import { CheckboxStory } from "../Checkbox.stories.styles";
import Checkbox, { checkboxStates } from "../../src/Checkbox";

const { CHECKED, UNCHECKED, INDETERMINATE } = checkboxStates;

const checkboxProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  checkedState: select("checkedState", [CHECKED, UNCHECKED, INDETERMINATE], UNCHECKED),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => {
  const [checkedState, setCheckedState] = React.useState(props.value || UNCHECKED);
  const setIndeterminate = () => {
    setCheckedState(INDETERMINATE);
  };
  const handleChange = () => {
    setCheckedState(checkedState === UNCHECKED ? CHECKED : UNCHECKED);
  };
  return (
    <CheckboxStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
        Authentic VHS beard.
      </Checkbox>
      <Rule />
      <Button onClick={setIndeterminate}>Set Indeterminate</Button>
    </CheckboxStory>
  );
};

export default () => <ExampleStory {...checkboxProps()} />;
