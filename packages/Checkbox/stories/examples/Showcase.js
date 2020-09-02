import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import { CheckboxStory } from "../Checkbox.stories.styles";
import Checkbox from "../../src/Checkbox";

const { CHECKED, UNCHECKED } = Checkbox.types.state;

const checkboxProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  checkedState: select("checkedState", Object.values(Checkbox.types.state), UNCHECKED),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => {
  const { checkedState } = props;
  const [internalCheckedState, setInternalCheckedState] = React.useState(checkedState || UNCHECKED);

  React.useEffect(() => {
    setInternalCheckedState(checkedState);
  }, [checkedState]);

  const handleChange = () => {
    setInternalCheckedState(prevInternalCheckedState => (prevInternalCheckedState === UNCHECKED ? CHECKED : UNCHECKED));
  };

  return (
    <CheckboxStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Checkbox {...props} onChange={handleChange} checkedState={internalCheckedState}>
        Authentic VHS beard.
      </Checkbox>
      <Rule />
    </CheckboxStory>
  );
};

export default () => <ExampleStory {...checkboxProps()} />;
